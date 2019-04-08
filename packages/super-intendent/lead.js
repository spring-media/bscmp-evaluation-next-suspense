import React, { Component } from "react";

export default class Lead extends Component {
  getHydrationData() {
    const children = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children];
    const numElements = children.length;
    const props = children.map(child => child.props);
    return { numElements, props };
  }

  getHydrationScript() {
    return JSON.stringify(this.getHydrationData());
  }

  render() {
    return (
      <>
        <script
          type="application/hydration-marker"
          dangerouslySetInnerHTML={{ __html: this.getHydrationScript() }}
        />
        {this.props.children}
      </>
    );
  }
}
