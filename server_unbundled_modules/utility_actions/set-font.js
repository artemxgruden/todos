const constants = require("./../constants.js");
const configuration = require("./../configuration.js");

const setFont = ({
  fontFamily,
  name,
  fileName,
  fontStyle = "normal",
  fontWeight = "normal",
  fontStretch = "normal",
}) => {
  return `
		@font-face {
			font-family: "${fontFamily || name}";
			src: url(/files/fonts/${fileName}.woff) format("woff"),
			url(/files/fonts/${fileName}.woff2) format("woff2");
			font-style: ${fontStyle};
			font-weight: ${fontWeight};
			font-stretch: ${fontStretch};
		}
	`;
};

module.exports = setFont;
