import util from "util";
import React from "react";
import PropTypes from "prop-types";
import DocumentProxyContext from "../context/documentProxy";

export default class CustomNextScript extends React.Component {
  static contextTypes = {
    _documentProps: PropTypes.any,
    _devOnlyInvalidateCacheQueryString: PropTypes.string
  };

  render() {
    //console.log(util.inspect(this.context, { depth: 100 }));
    console.log(JSON.stringify(this.context, null, 2));
    return (
      <DocumentProxyContext.Provider value={this.context}>
        {this.props.children}
      </DocumentProxyContext.Provider>
    );
  }
}
