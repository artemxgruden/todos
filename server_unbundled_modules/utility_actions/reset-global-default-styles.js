const resetGlobalDefaultStyles = () => `
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		outline: none;
		border: 0;
		background: none;
	}

	html, body {
		font-size: 14px;
	}
`;

module.exports = resetGlobalDefaultStyles;
