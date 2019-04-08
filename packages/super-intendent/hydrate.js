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
    const numElements = this.props.children.length;
    const props = this.props.children.map(child => child.props);
    return { numElements, props };
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
