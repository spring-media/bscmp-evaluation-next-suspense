const path = require("path");

module.exports = (nextConfig = {}) => {
  const webpack = webpackConfig => modifyWebpackConfig(webpackConfig);
  return Object.assign({}, nextConfig, { webpack });
};

function modifyWebpackConfig(webpackConfig) {
  if (webpackConfig.name === "client") {
    webpackConfig.entry = webpackConfig.entry().then(e => replaceMainJs(e));
  }
  return webpackConfig;
}

function replaceMainJs(entry) {
  entry["static/runtime/main.js"] = path.resolve(__dirname, "client.js");
  return entry;
}
