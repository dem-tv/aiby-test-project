const path = require('path');
const buildWebpackConfig =require("./config/buildWebpackConfig");


module.exports = (env) => {

  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    build: path.resolve(__dirname, 'docs'),
    html: path.resolve(__dirname, 'src', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    imagesEntry: path.resolve(__dirname, 'src', 'assets', 'images'),
    imagesOutput: path.resolve(__dirname, 'docs', 'assets', 'images'),
  }

  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  })

  return config
};