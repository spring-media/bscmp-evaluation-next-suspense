import React, { Component } from "react";
import Hydrate from "./hydrate";

export default function useAsHydrationWrapper(WrappedComponent) {
  return props => (
    <Hydrate>
      <WrappedComponent {...props} />
    </Hydrate>
  );
}
