import { T } from "gt-next";

export default function Page() {
  return (
    <T>
      <div>
        <h1>The T Component</h1>
        <p>This component is used to translate text.</p>
        <Example1 />
        <Example2 />
      </div>
    </T>
  );
}

function Example1() {
  return (
    <T>
      <div>
        <h2>Example 1</h2>
      </div>
    </T>
  );
}

function Example2() {
  return (
    <T>
      <div>
        <h2>Example 2</h2>
      </div>
    </T>
  );
}
