const { renderToNodeStream } = require("react-dom/server.js");
const { ServerStyleSheet } = require("styled-components");

const createRenderingStream = (composition) => {
  const serverStyleSheet = new ServerStyleSheet();

  const markupWithStyles = serverStyleSheet.collectStyles(composition);

  const renderingStream = serverStyleSheet.interleaveWithNodeStream(
    renderToNodeStream(markupWithStyles)
  );

  return renderingStream;
};

module.exports = createRenderingStream;
