const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const defaultConfig = {
  entry: "./src/index.js",
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};

module.exports = (env, argv) => {
  let config = defaultConfig;

  if (env === "development") {
    config = {
      ...defaultConfig,
      devtool: "inline-source-map",
      optimization: {
        runtimeChunck: "single",
      },
    };
  }

  return config;
};
