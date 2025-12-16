"use client";
import { useState } from "react";

export default function Page() {
  const [cookies, setCookies] = useState(0);
  return (
    <div>
      <h1>The Var Component</h1>
      <h2>I have {cookies} cookies</h2>
      <div className="flex gap-2">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setCookies(cookies + 1)}>Add a cookie</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => setCookies(cookies - 1)}>Remove a cookie</button>
      <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={() => setCookies(0)}>Reset cookies</button>
      </div>
    </div>
  )
}