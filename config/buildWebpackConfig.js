const buildPlugins = require("./buildPlugins");
const buildLoaders = require("./buildLoaders");
const buildDevServer = require("./buildDevServer");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = function buildWebpackConfig(options) {
  const {paths, mode, isDev} = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options)
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          test: /\.js(\?.*)?$/i,
        }),
        new CssMinimizerPlugin({
          parallel: true,
        }),
      ],
    },
  }
}
