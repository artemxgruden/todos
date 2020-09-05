const { ROOT_DOM_ELEMENT_ID } = require("./../configuration.js");

// const resetGlobalDefaultStyles = require("./reset-global-default-styles.js");
// const setFonts = require("./set-fonts.js");
// const setGlobalStyles = require("./set-global-styles.js");

const writeDocumentDataPart1 = (response, { documentTitle }) => {
  response.setHeader("Content-Type", "text/html");

  response.write("<!doctype html>");
  response.write("<html>");
  response.write("<head>");

  response.write('<meta charset="UTF-8"/>');
  response.write(
    '<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>'
  );
  response.write('<meta http-equiv="X-UA-Compatible" content="ie=edge"/>');
  response.write(
    '<meta name="viewport" content="width=device-width, initial-scale=1"/>'
  );
  response.write('<meta name="robots" content="all"/>');

  // if (documentTitle) {
  //   response.write(`<title>${documentTitle}</title>`);
  // }

  // /*
	// reset css styles, set fonts, set global css styles
	// */
  // response.write(
  //   `<style media="screen" type="text/css">${resetGlobalDefaultStyles()}${setFonts()}${setGlobalStyles()}</style>`
  // );

  response.write("</head>");
  response.write("<body>");

  response.write(`<div id="${ROOT_DOM_ELEMENT_ID}">`);
};

module.exports = writeDocumentDataPart1;
