export default async function loadRuntime() {
  console.log("loadRuntime");

  await import("./runtime");
}
