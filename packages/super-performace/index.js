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

  appendDev() {
    return this.context._documentProps.devFiles.map((src, index) => (
      <script key={index} src={src} />
    ));
  }

  render() {
    return (
      <>
        {this.appendStyles()}
        {/* this.appendDev() */}
        {hydrationScripts({ clear: true })}
      </>
    );
  }
}
