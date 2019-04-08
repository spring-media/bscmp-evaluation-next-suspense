import { Hydrate } from "../super-intendent";

export default function hydrationDataScript({ clear = false }) {
  const __html = JSON.stringify(Hydrate.data);
  if (clear) Hydrate.data = {};
  return (
    <script
      type="application/hydration-data"
      dangerouslySetInnerHTML={{ __html }}
    />
  );
}
