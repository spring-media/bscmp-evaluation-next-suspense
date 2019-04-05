const path = require("path");
const util = require("util");

module.exports = (nextConfig = {}, ...rest) => {
  return Object.assign({}, nextConfig, {
    webpack(webpackConfig, options) {
      /*  webpackConfig.entry().then(entry => {
        if (webpackConfig.name === "client") {
          console.log("");
          console.log("resolving", `"${webpackConfig.name}"`);
          console.log(JSON.stringify(entry, null, 2));
          console.log("");
          // console.log(util.inspect(webpackConfig, { depth: 100 }));
          // console.log(webpackConfig.output.filename.toString());
          // console.log("");
        }
      });
      const entry = path.resolve(__dirname, "client.js"); */
      return Object.assign({}, webpackConfig /* , { entry } */);
    }
  });
};
