const path = require("path");
const util = require("util");

module.exports = (nextConfig = {}, ...rest) => {
  return Object.assign({}, nextConfig, {
    webpack(webpackConfig, options) {
      webpackConfig.entry = webpackConfig.entry().then(val => {
        if (webpackConfig.name === "client") {
          val["static/runtime/client.js"] = path.resolve(
            __dirname,
            "..",
            "..",
            "packages",
            "super-intendent",
            "runtime.js"
          );
        }
        return val;
      });
      return Object.assign({}, webpackConfig /* , { entry } */);
    }
  });
};
