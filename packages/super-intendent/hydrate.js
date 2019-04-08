import React, { Component } from "react";

export default class Hydrate extends Component {
  static data = {};

  static storeData(id, data) {
    Hydrate.data[id] = data;
  }

  state = {
    id: this.getId()
  };

  getId() {
    return Math.random()
      .toString(36)
      .substring(2, 15);
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
    Hydrate.storeData(this.state.id, this.getHydrationData());
    return (
      <>
        <script type="application/hydration-marker" id={this.state.id} />
        {this.props.children}
      </>
    );
  }
}
