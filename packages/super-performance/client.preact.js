import { EMPTY_OBJ, EMPTY_ARR } from "../preact/src/constants";
import { commitRoot } from "../preact/src/diff/index";
import { diffChildren } from "../preact/src/diff/children";
import { createElement, Fragment } from "../preact/src/create-element";
import options from "../preact/src/options";

import Article from "../../components/article";

/* const parent = document.querySelector("#test");
const el = document.querySelector("#test > article"); */

const parent = document.querySelector("#main-container");
const el1 = document.querySelector("#main-container > article:nth-child(1)");
const el2 = document.querySelector("#main-container > article:nth-child(2)");
const el3 = document.querySelector("#main-container > article:nth-child(3)");

const els = [el1, el2, el3];

/* if (typeof window !== "undefined") {
  for (let i = 0; i < els.length; i++) {
    window.setTimeout(() => {
      console.log("rendering", els[i]);
      render(<Article column={i + 1} />, parent, els[i]);
    }, (i + 1) * 1000);
  }
} */

render(<Article column={1} />, parent, el1);
render(<Article column={2} />, parent, el2);
render(<Article column={3} />, parent, el3);

// console.log(1, el1);
// console.log(2, el2);
// console.log(3, el3);

/**
 * Render a Preact virtual node into a DOM element
 * @param {import('./index').ComponentChild} vnode The virtual node to render
 * @param {import('./internal').PreactElement} parentDom The DOM element to
 * render into
 */
export function render(vnode, parentDom, oldDom) {
  if (options.root) options.root(vnode, parentDom);
  let oldVNode = parentDom._prevVNode;
  vnode = createElement(Fragment, null, [vnode]);

  let mounts = [];
  // debugger;
  diffChildren(
    parentDom,
    oldDom ? vnode : (parentDom._prevVNode = vnode),
    oldDom ? undefined : oldVNode,
    EMPTY_OBJ,
    parentDom.ownerSVGElement !== undefined,
    oldDom
      ? [oldDom]
      : oldVNode
      ? null
      : EMPTY_ARR.slice.call(parentDom.childNodes),
    mounts,
    vnode,
    oldDom
  );
  commitRoot(mounts, vnode);
}

/**
 * Update an existing DOM element with data from a Preact virtual node
 * @param {import('./index').ComponentChild} vnode The virtual node to render
 * @param {import('./internal').PreactElement} parentDom The DOM element to
 * update
 */
export function hydrate(vnode, parentDom) {
  parentDom._prevVNode = null;
  render(vnode, parentDom);
}
