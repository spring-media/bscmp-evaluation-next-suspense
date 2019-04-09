import React from "react";
import ReactDOM from "react-dom";
import Article from "../../components/article";

if (typeof document !== undefined) {
  console.log("runtime running");

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
    data.reverse().forEach(({ name, props }) => {
      const Element = componentMap[name];
      container = container.previousElementSibling;
      ReactDOM.hydrate(<Element {...props} />, container);
    });
  });
} else {
  console.log("omitting runtime, running on the server");
}
