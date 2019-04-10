import React, { Component } from "react";

export default class Hydrate extends Component {
  static data = {};

  static storeData(id, data) {
    Hydrate.data[id] = data;
  }

  static getData() {
    return Hydrate.data;
  }

  state = {
    id: Math.random()
      .toString(36)
      .substring(2, 15) // quick and dirty dev id
  };

  constructor(props) {
    super(props);
    Hydrate.storeData(this.state.id, this.getHydrationData());
  }

  getHydrationData() {
    const children = React.Children.toArray(this.props.children);
    return children.map(child => this.getDataFromChild(child));
  }

  getDataFromChild({ type, props }) {
    const name = type.displayName || type.name;
    return { name, props };
  }

  render() {
    return (
      <>
        <script type="application/hydration-marker" hid={this.state.id} />
        {this.props.children}
      </>
    );
  }
}
