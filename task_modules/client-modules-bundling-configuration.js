const { resolve: resolvePath } = require("path");
const { DefinePlugin } = require("webpack");

const configuration = require("./../client_unbundled_modules/configuration.js");
const BundlingStatisticsWebpackPlugin = require("./bundling-statistics-webpack-plugin.js");

const CURRENT_WORKING_DIRECTORY = process.cwd();

module.exports = {
  target: "web",

  stats: {
    colors: true,
  },

  entry: {
    common: [
      "luxon",
      "platform",
      "react",
      "react-dom",
      "styled-components",
      "react-routed-components",
      "react-data-connected-components",
      "react-dynamic-imported-components",
    ],
    main: resolvePath(
      CURRENT_WORKING_DIRECTORY,
      `client_unbundled_modules/main.js`
    )
  },

  output: {
    filename: "[name]-[hash].js",
    chunkFilename: "[name]-[chunkhash].js",
    path: resolvePath(CURRENT_WORKING_DIRECTORY, `client_bundled_modules`),
    publicPath: `/files/client_bundled_modules/`,
  },

  resolve: {
    alias: {},
    modules: [
      "node_modules",
      // resolvePath(CURRENT_WORKING_DIRECTORY, "common_modules"),
      // resolvePath(CURRENT_WORKING_DIRECTORY, "client_modules"),
    ],
    extensions: [".js", ".mjs", ".json"],
  },

  devtool: "source-map",

  optimization: {
    splitChunks: {
      cacheGroups: {
        chunks: "all",
        common: {
          chunks: "all",
          test: "common",
          name: "common",
          enforce: true,
        },
      },
    },
  },

  plugins: [
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(configuration.NODE_ENV),
        MACHINE: JSON.stringify(configuration.MACHINE),
        DATA_PROVIDER_BASE_URL: JSON.stringify(
          configuration.DATA_PROVIDER_BASE_URL
        ),
        ROOT_DOM_ELEMENT_ID: JSON.stringify(configuration.ROOT_DOM_ELEMENT_ID),
      },
    }),

    new BundlingStatisticsWebpackPlugin({
      filePath: resolvePath(
        CURRENT_WORKING_DIRECTORY,
        "client_bundled_modules",
        `bundling-statistics.js`
      ),
    }),
  ],

  module: {
    rules: [
      {
        type: "javascript/auto",
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: ["@babel/plugin-syntax-dynamic-import"],
            },
          },
        ],
      },

      {
        type: "javascript/auto",
        test: /\.m?js$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: {
          loader: "eslint-loader",
          options: {
            configFile: resolvePath(
              CURRENT_WORKING_DIRECTORY,
              ".eslintrc.json"
            ),
          },
        },
      },
    ],
  },
};
