import ReactDOM from "react-dom";

if (typeof document !== undefined) {
  console.log("runtime running");

  const dataStr = document.querySelector(
    'script[type="application/hydration-data"]'
  ).innerHTML;

  const data = JSON.parse(dataStr);

  console.log(data);
} else {
  console.log("omitting runtime, running on the server");
}
