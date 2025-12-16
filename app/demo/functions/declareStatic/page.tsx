"use client";
import { useState } from "react";
export default function Page() {
  const [subject, setSubject] = useState("masculine");


  function getSubject() {
    if (subject === "masculine") {
      return "man";
    } else if (subject === "feminine") {
      return "woman";
    } else {
      return "person";
    }
  }


  const result = "The beautiful " + getSubject() + " go home";
  return (
    <div>
      <h1>The declareStatic Function</h1>
      <h2>{result}</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setSubject("masculine")}>Masculine</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setSubject("feminine")}>Feminine</button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setSubject("neutral")}>Neutral</button>
    </div>
  )
}