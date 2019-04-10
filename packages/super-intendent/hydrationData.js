import Hydrate from "./hydrate";

export default function HydrationData({ clear = false }) {
  return (
    <script
      type="application/hydration-data"
      dangerouslySetInnerHTML={{ __html: serializedHydrationData(clear) }}
    />
  );
}

function serializedHydrationData(clear) {
  const data = Hydrate.getData();
  if (clear) Hydrate.data = {};
  return JSON.stringify(data);
}
