import React, { Component } from "react";

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default function asLead(WrappedComponent) {
  const uid = Math.random()
    .toString(36)
    .substring(2, 15);

  class AsLead extends Component {
    render() {
      const serialisedProps = JSON.stringify(this.props).replace(/\//g, "\\/");
      return (
        <span siid={uid}>
          <WrappedComponent {...this.props} />
          <script
            siid={uid}
            type="application/hydration-data"
            dangerouslySetInnerHTML={{ __html: serialisedProps }}
          />
        </span>
      );
    }
  }

  AsLead.displayName = `asLead(${getDisplayName(WrappedComponent)})`;
  return AsLead;
}
