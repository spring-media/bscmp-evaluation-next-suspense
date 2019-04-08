import React, { Component } from "react";

export default class Lead extends Component {
  getHydrationScript() {
    return JSON.stringify(this.getHydrationData());
  }

  getHydrationData() {
    const children = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children];
    return children.map(child => this.getDataFromChild(child));
  }

  getDataFromChild(child) {
    const name = child.type.displayName || child.type.name;
    const props = child.props;
    return { name, props };
  }

  render() {
    return (
      <>
        {this.props.children}
        <script
          type="application/lead-hydration-marker"
          dangerouslySetInnerHTML={{ __html: this.getHydrationScript() }}
        />
      </>
    );
  }
}
