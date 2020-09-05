const { WHITE_COLOR } = require("./../constants.js");

const setGlobalStyles = () => `
	* {
		font-weight: normal;
		font-style: normal;
		font-family: Roboto, Arial, Helvetica, sans-serif;
	}

	html, body { 
		background-color: ${WHITE_COLOR};
	}

	*::-webkit-scrollbar {
		width: 6px;
		background-color: #F5F5F5;
	}

	*::-webkit-scrollbar-thumb {
		background-color: rgba(100, 100, 100, 1);
	}

	*::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(100, 100, 100, 0.3);
		background-color: #F5F5F5;
	}
`;

module.exports = setGlobalStyles;
