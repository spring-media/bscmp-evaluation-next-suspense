import React from "react";
import PropTypes from "prop-types";

export default class NextScript extends React.Component {
  static contextTypes = {
    _documentProps: PropTypes.any,
    _devOnlyInvalidateCacheQueryString: PropTypes.string
  };

  logDocumentProps() {
    const documentProps = JSON.stringify(this.context._documentProps.styles);
    const __html = `console.log(${documentProps})`;
    return <script dangerouslySetInnerHTML={{ __html }} />;
  }

  appendStyles() {
    const { styles } = this.context._documentProps;
    return styles.map(({ key, props }) => (
      <style
        key={key}
        dangerouslySetInnerHTML={props.dangerouslySetInnerHTML}
      />
    ));
  }

  render() {
    return (
      <>
        {this.logDocumentProps()}
        {this.appendStyles()}
      </>
    );
  }
}
