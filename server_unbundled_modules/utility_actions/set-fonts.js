const setFont = require("./set-font.js");

const setFonts = () => {
  // const fonts = [
  // 	{
  // 		name: 'Brutal',
  // 		fileName: 'BrutalType',
  // 		fontWeight: 'normal',
  // 		fontStyle: 'normal'
  // 	},
  // 	{
  // 		name: 'Brutal',
  // 		fileName: 'BrutalTypeLight',
  // 		fontWeight: '300',
  // 		fontStyle: 'normal'
  // 	},
  // 	{
  // 		name: 'Brutal',
  // 		fileName: 'BrutalTypeMedium',
  // 		fontWeight: '500',
  // 		fontStyle: 'normal'
  // 	},
  // 	{
  // 		name: 'Brutal',
  // 		fileName: 'BrutalTypeBold',
  // 		fontWeight: 'bold',
  // 		fontStyle: 'normal'
  // 	}
  // ];
  const fonts = [
    {
      name: "Roboto",
      fileName: "Roboto-Thin",
      fontWeight: "100",
      fontStyle: "normal",
    },
    {
      name: "Roboto",
      fileName: "Roboto-ThinItalic",
      fontWeight: "100",
      fontStyle: "italic",
    },
    {
      name: "Roboto",
      fileName: "Roboto-Light",
      fontWeight: "300",
      fontStyle: "normal",
    },
    {
      name: "Roboto",
      fileName: "Roboto-LightItalic",
      fontWeight: "300",
      fontStyle: "italic",
    },
    {
      name: "Roboto",
      fileName: "Roboto-Regular",
      fontWeight: "normal",
      fontStyle: "normal",
    },
    {
      name: "Roboto",
      fileName: "Roboto-Italic",
      fontWeight: "normal",
      fontStyle: "italic",
    },
    {
      name: "Roboto",
      fileName: "Roboto-Medium",
      fontWeight: "500",
      fontStyle: "normal",
    },
    {
      name: "Roboto",
      fileName: "Roboto-MediumItalic",
      fontWeight: "500",
      fontStyle: "italic",
    },
    {
      name: "Roboto",
      fileName: "Roboto-Bold",
      fontWeight: "700",
      fontStyle: "normal",
    },
    {
      name: "Roboto",
      fileName: "Roboto-BoldItalic",
      fontWeight: "700",
      fontStyle: "italic",
    },
    {
      name: "Roboto",
      fileName: "Roboto-Black",
      fontWeight: "900",
      fontStyle: "normal",
    },
    {
      name: "Roboto",
      fileName: "Roboto-BlackItalic",
      fontWeight: "900",
      fontStyle: "italic",
    },

    // {
    // 	name: 'DidotLTPro',
    // 	fileName: 'DidotLTPro-Roman',
    // 	fontWeight: 'normal',
    // 	fontStyle: 'normal'
    // },
    // {
    // 	name: 'DidotLTPro',
    // 	fileName: 'DidotLTPro-Headline',
    // 	fontWeight: 'normal',
    // 	fontStyle: 'normal',
    // 	fontStretch: 'condensed'
    // },

    {
      name: "DietDidotTitle",
      fileName: "DietDidotTitleBold",
      fontWeight: "bold",
      fontStyle: "normal",
    },
    {
      name: "DietDidotTitle",
      fileName: "DietDidotTitleBoldItalic",
      fontWeight: "bold",
      fontStyle: "italic",
    },

    {
      name: "DinAlternate",
      fileName: "DINAlternate-Regular",
      fontWeight: "normal",
      fontStyle: "normal",
    },
    {
      name: "DinAlternate",
      fileName: "DINAlternate-Bold",
      fontWeight: "bold",
      fontStyle: "normal",
    },
  ];

  const setFontsStringArray = fonts.map((font) => setFont({ ...font }));
  const setFontsString = setFontsStringArray.join("");
  return setFontsString;
};

module.exports = setFonts;
