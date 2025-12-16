"use client";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("John");
  return (
    <div>
      <h1>The Var Component</h1>
      <h2>My name is {name}</h2>
      <div className="flex gap-2">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setName("Jane")}
        >
          Set name to Jane
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={() => setName("John")}
        >
          Set name to John
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
          onClick={() => setName("Shelly")}
        >
          Set name to Shelly
        </button>
      </div>
    </div>
  );
}
