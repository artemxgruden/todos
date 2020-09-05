const { extname: getFileExtension } = require("path");
const { parse: parseUrl } = require("url");

// const { createDataStateStorage } = require("react-data-connected-components");
// const { traverseComposition } = require("react-routed-components");
// const {
//   loadDynamicImportedComponents,
// } = require("react-dynamic-imported-components");

// const preloadDataState = require("./../utility_actions/preload-data-state.js");
// const getPathMatchingResult = require("./../utility_actions/get-path-matching-result.js");
const getContentType = require("./../utility_actions/get-content-type.js");
const getReadStream = require("./../utility_actions/get-read-stream.js");
// const createRenderingStream = require("./../utility_actions/create-rendering-stream.js");
const writeDocumentDataPart1 = require("./../utility_actions/write-document-data-part-1.js");
const writeDocumentDataPart2 = require("./../utility_actions/write-document-data-part-2.js");

const getRequestCookies = require("./../utility_actions/get-request-cookies.js");
const endResponse = require("./../utility_actions/end-response.js");

// const createComposition = require("./../../common_unbundled_modules/create-composition.js");
// const initialDataState = require("./../../common_unbundled_modules/initial-data-state.js");

const log = require("./../utility_actions/log.js");

module.exports = async (request, response) => {
  try {
    const method = request.method.toLowerCase();
    const url = request.url.toLowerCase();
    const cookies = getRequestCookies(request.headers.cookie);

    request.lowerCasedMethod = method;
    request.lowerCasedUrl = url;
    request.cookies = cookies;

    if (request.url.startsWith("/favicon.ico")) {
      return endResponse(request, response, 204);
    }

    if (request.url.startsWith("/files")) {
      try {
        log(
          "info",
          `${request.lowerCasedMethod} ${request.url} ${JSON.stringify(
            request.cookies,
            null,
            4
          )}`
        );

        const { pathname } = parseUrl(request.url);

        if (pathname === "/files") {
          return endResponse(request, response, 200);
        }

        const fileExtension = getFileExtension(pathname);

        const contentType = getContentType(fileExtension);

        response.setHeader("Content-Type", contentType);
        const readStream = await getReadStream(pathname);

        if (readStream) {
          return readStream.pipe(response);
        }

        return endResponse(request, response, 404);
      } catch (error) {
        console.error(error);
        return endResponse(request, response, 404);
      }
    }

    // response.setHeader("Content-Type", "text/html");

    writeDocumentDataPart1(response, {
      // documentTitle: pathMatchingResult
      //   ? pathMatchingResult.documentTitle
      //   : "not found",
    });

    writeDocumentDataPart2(response, {
      // initialDataState: dataStateStorage.getDataState(),
    });

    endResponse(request, response, 200);

    // renderingStream.pipe(response, {
    //   end: false,
    // });
  } catch (error) {
    console.error(error);
    response.write(error.message);

    endResponse(request, response, 500);
  }
};
