import { Hydrate } from ".";

export default function hydrationScripts({ clear = false }) {
  const __html = JSON.stringify(Hydrate.data);
  if (clear) Hydrate.data = {};
  return (
    <script
      type="application/hydration-data"
      dangerouslySetInnerHTML={{ __html }}
    />
  );
}
