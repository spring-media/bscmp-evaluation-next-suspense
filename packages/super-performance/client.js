import React from "react";
import ReactDOM from "react-dom";
import Article, { ArticleAsClass } from "../../components/article";

if (typeof document !== undefined) {
  window.webpackHotUpdate = function() {};

  console.log("%cHydration runtime running", "color: blue");

  const hydrateComponents = [Article, ArticleAsClass];

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
      `script[type="application/hydration-marker"][hid="${id}"]`
    );
    let container = marker;
    data = Array.isArray(data) ? data : [data];

    const elements = Array.from({ length: data.length }, () => {
      container = container.nextElementSibling;
      return container;
    });

    data.forEach(({ name, props }, i) => {
      const Component = componentMap[name];
      const container = elements[i];
      const isClass = Component.prototype instanceof React.Component;
      const children = isClass
        ? new Component(props).render().props.children
        : Component(props).props.children;
      ReactDOM.render(<>{children}</>, container);
    });
  });
} else {
  console.debug("Omitting client runtime, running on the server");
}
