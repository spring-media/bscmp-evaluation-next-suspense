import React, { Component } from "react";
import PropTypes from "prop-types";
import { Hydrate } from "../super-intendent";

export default class NextScript extends Component {
  static DATA_GLOBAL = "__HYDRATION";

  static contextTypes = {
    _documentProps: PropTypes.any,
    _devOnlyInvalidateCacheQueryString: PropTypes.string
  };

  logDocumentProps() {
    const documentProps = JSON.stringify(this.context._documentProps);
    const __html = `console.log("documentProps", ${documentProps})`;
    return <script dangerouslySetInnerHTML={{ __html }} />;
  }

  appendStyles() {
    return this.context._documentProps.styles.map(({ key, props }) => (
      <style
        key={key}
        dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
      />
    ));
  }

  appendHydrationData() {
    const serializedData = JSON.stringify(Hydrate.data);
    const __html = `var ${NextScript.DATA_GLOBAL} = ${serializedData}`;
    return <script dangerouslySetInnerHTML={{ __html }} />;
  }

  render() {
    return (
      <>
        {/* this.logDocumentProps() */}
        {this.appendStyles()}
        {this.appendHydrationData()}
      </>
    );
  }
}
