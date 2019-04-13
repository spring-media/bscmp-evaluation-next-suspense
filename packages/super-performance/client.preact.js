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

//render(<Article column={1} />, parent, el1);
debugger;
render(<Article column={2} />, parent, el2);
debugger;
//render(<Article column={3} />, parent, el3);

console.log(1, el1);
console.log(2, el2);
console.log(3, el3);

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
  diffChildren(
    parentDom,
    (parentDom._prevVNode = vnode),
    oldVNode,
    EMPTY_OBJ,
    parentDom.ownerSVGElement !== undefined,
    oldVNode ? null : EMPTY_ARR.slice.call(parentDom.childNodes),
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
