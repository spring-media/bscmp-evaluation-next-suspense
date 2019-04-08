import ReactDOM from "react-dom";

console.log("runtime running");

const dataStr = document.querySelector(
  'script[type="application/hydration-data"]'
).innerHTML;

const data = JSON.parse(dataStr);

console.log(data);
