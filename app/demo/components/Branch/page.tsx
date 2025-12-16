"use client";
import { useState } from "react";

export default function Page() {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>The Branch Component</h1>
      <h2>{toggle ? "Toggle is true" : "Toggle is false"}</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setToggle(!toggle)}>Toggle</button>
      <h2>There {count === 1 ? "is" : "are"} {count} {count === 1 ? "cookie" : "cookies"}</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setCount(count - 1)}>Decrement</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}