const httpServer = require("./http-server.js");

// const overrideNativeObjects = require("./../common_unbundled_modules/override-native-objects.js");

const handleHttpServerRequestEvent = require("./http_server_event_handlers/handle-request-event.js");
const handleHttpServerInitializationEvent = require("./http_server_event_handlers/handle-initialization-event.js");
const handleHttpServerErrorEvent = require("./http_server_event_handlers/handle-error-event.js");
const handleHttpServerClientErrorEvent = require("./http_server_event_handlers/handle-client-error-event.js");

const handleProcessSigtermEvent = require("./process_event_handlers/handle-sigterm-event.js");
const handleProcessSigintEvent = require("./process_event_handlers/handle-sigint-event.js");
const handleProcessSigusr1Event = require("./process_event_handlers/handle-sigusr1-event.js");
const handleProcessUnhandledExceptionEvent = require("./process_event_handlers/handle-unhandled-exception-event.js");
const handleProcessUncaughtExceptionEvent = require("./process_event_handlers/handle-uncaught-exception-event.js");
const handleProcessUnhandledRejectionEvent = require("./process_event_handlers/handle-unhandled-rejection-event.js");

const {
  HTTP_SERVER_LISTENING_EVENT,
  HTTP_SERVER_REQUEST_EVENT,
  HTTP_SERVER_ERROR_EVENT,
  HTTP_SERVER_CLIENT_ERROR_EVENT,
  PROCESS_SIGTERM_EVENT,
  PROCESS_UNCAUGHT_EXCEPTION_EVENT,
  PROCESS_SIGINT_EVENT,
  PROCESS_SIGUSR1_EVENT,
  PROCESS_UNHANDLED_EXCEPTION_EVENT,
  PROCESS_UNHANDLED_REJECTION_EVENT,
} = require("./constants.js");

const { HTTP_SERVER_PORT } = require("./configuration.js");

const loggingWriteStream = require("./logging-write-stream.js");
const log = require("./utility_actions/log.js");

const start = async () => {
  try {
    httpServer.on(
      HTTP_SERVER_LISTENING_EVENT,
      handleHttpServerInitializationEvent
    );
    httpServer.on(HTTP_SERVER_REQUEST_EVENT, handleHttpServerRequestEvent);
    httpServer.on(HTTP_SERVER_ERROR_EVENT, handleHttpServerErrorEvent);
    httpServer.on(
      HTTP_SERVER_CLIENT_ERROR_EVENT,
      handleHttpServerClientErrorEvent
    );
    httpServer.listen({ port: HTTP_SERVER_PORT });

    process.on(PROCESS_SIGTERM_EVENT, handleProcessSigtermEvent);
    process.on(PROCESS_SIGINT_EVENT, handleProcessSigintEvent);
    process.on(PROCESS_SIGUSR1_EVENT, handleProcessSigusr1Event);
    process.on(
      PROCESS_UNHANDLED_EXCEPTION_EVENT,
      handleProcessUnhandledExceptionEvent
    );
    process.on(
      PROCESS_UNCAUGHT_EXCEPTION_EVENT,
      handleProcessUncaughtExceptionEvent
    );
    process.on(
      PROCESS_UNHANDLED_REJECTION_EVENT,
      handleProcessUnhandledRejectionEvent
    );
  } catch (error) {
    log("error", error);

    httpServer.close();

    if (loggingWriteStream) {
      loggingWriteStream.end();
    }

    process.exit(1);
  }
};

// overrideNativeObjects();
start();
