const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = function buildLoaders({isDev}) {
  const loaders = [
    {
      test: /\.s[ac]ss$/i,
      exclude: /node_modules/,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPath) => Boolean(resPath.includes('.module.')),
              localIdentName: isDev
                ? '[path][name]__[local]--[hash:base64:5]'
                : '[hash:base64:8]'
            },
          }
        },
        "sass-loader",
      ],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
  ]

  if (!isDev) {
    loaders.push({
      test: /\.(?:js|mjs|cjs)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {targets: "ie 11"}]
          ]
        }
      }
    })
  }

  return loaders
}
