const nodeexternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.ts",
  target: "node",
  output: {
    filename: "bundle.js", // output file
    path: __dirname + "/../build",
    libraryTarget: "commonjs",
    devtoolModuleFilenameTemplate: "[absolute-resource-path]",
  },
  externals: [nodeexternals()],
  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
};
