const path = require("path");
const util = require("util");

module.exports = (nextConfig = {}, ...rest) => {
  return Object.assign({}, nextConfig, {
    webpack(webpackConfig, options) {
      webpackConfig.entry = webpackConfig.entry().then(val => {
        if (webpackConfig.name === "client") {
          // val["static/runtime/client.js"] = path.resolve(

          // wow, can we actually overwrite the main.js ?????????????????????
          val["static/runtime/main.js"] = path.resolve(
            __dirname,
            "..",
            "..",
            "packages",
            "super-intendent",
            "runtime.js"
          );
          console.log(JSON.stringify(val, null, 2));
        }
        return val;
      });
      return Object.assign({}, webpackConfig /* , { entry } */);
    }
  });
};
