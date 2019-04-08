import React, { Component } from "react";
import PropTypes from "prop-types";
import { hydrationScripts } from "../super-intendent";

export default class PerformanceScript extends Component {
  static DATA_GLOBAL = "__HYDRATION";

  static contextTypes = {
    _documentProps: PropTypes.any,
    _devOnlyInvalidateCacheQueryString: PropTypes.string
  };

  appendStyles() {
    return this.context._documentProps.styles.map(({ key, props }) => (
      <style
        key={key}
        dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
      />
    ));
  }

  getScripts(files) {
    const { assetPrefix } = this.context._documentProps;
    if (!files || files.length === 0) {
      return null;
    }
    const { _devOnlyInvalidateCacheQueryString } = this.context;

    return files.map(file => {
      // Only render .js files here
      if (!/\.js$/.exec(file)) {
        return null;
      }

      return (
        <script
          key={file}
          src={`${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`}
          nonce={this.props.nonce}
          async
          crossOrigin={this.props.crossOrigin || process.crossOrigin}
        />
      );
    });
  }

  getPerformanceScripts() {
    return ["static/runtime/webpack.js", "static/runtime/client.js"];
  }

  render() {
    return (
      <>
        {this.appendStyles()}
        {/* this.getScripts(this.context._documentProps.files) */}
        {this.getScripts([
          "static/runtime/webpack.js",
          "static/runtime/main.js"
        ])}

        {hydrationScripts({ clear: true })}
      </>
    );
  }
}
