import React, { Component } from "react";
import PropTypes from "prop-types";

export default class NextScript extends Component {
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

  render() {
    return (
      <>
        {/* this.logDocumentProps() */}
        {this.appendStyles()}
      </>
    );
  }
}
