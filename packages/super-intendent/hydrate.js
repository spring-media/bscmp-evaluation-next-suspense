import React, { Component } from "react";

export default class Hydrate extends Component {
  static nextId = 0;
  static data = {};

  static storeData(id, data) {
    Hydrate.data[id.toString()] = data;
  }

  static getData() {
    return Hydrate.data;
  }

  state = {
    id: ++Hydrate.nextId
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
        <script type="application/hydration-marker" id={this.state.id} />
        {this.props.children}
      </>
    );
  }
}
