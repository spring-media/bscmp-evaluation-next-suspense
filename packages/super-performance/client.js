import React from "react";
import ReactDOM from "react-dom";
import Article from "../../components/article";

if (typeof document !== undefined) {
  console.debug("Hydration runtime running");

  const hydrateComponents = [Article];

  const componentMap = hydrateComponents.reduce((map, comp) => {
    const compName = comp.displayName || comp.name;
    return Object.assign(map, { [compName]: comp });
  }, {});

  const serializedHydrationData = document.querySelector(
    'script[type="application/hydration-data"]'
  ).innerHTML;

  const hydrationData = JSON.parse(serializedHydrationData);

  Object.entries(hydrationData).forEach(([id, data]) => {
    const marker = document.querySelector(
      `script[type="application/hydration-marker"][id="${id}"]`
    );
    let container = marker;
    data.forEach(({ name, props }) => {
      const Component = componentMap[name];
      container = container.nextElementSibling;
      ReactDOM.hydrate(<Component {...props} />, container);
    });
  });
} else {
  console.debug("Omitting client runtime, running on the server");
}
