import { useGT } from "gt-next";
export default function Page() {
  const gt = useGT();
  const subtitle = gt("This hook is used to translate strings.");
  return (
    <div>
      <h1>The useGT Hook</h1>
      <h2>{subtitle}</h2>
    </div>
  );
}
