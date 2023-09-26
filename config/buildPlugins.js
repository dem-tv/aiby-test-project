const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = function buildPlugins({paths}) {
  return [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new CopyPlugin({
      patterns: [
        {
          from: paths.imagesEntry,
          to: paths.imagesOutput
        },
      ],
    }),
  ]
}
