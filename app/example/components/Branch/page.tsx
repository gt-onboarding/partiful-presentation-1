"use client";
import { Branch, Num, Plural, T } from "gt-next";
import { useState } from "react";

export default function Page() {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <T>
      <div>
        <h1>The Branch Component</h1>
        <h2>
          <Branch
            branch={toggle}
            true="Toggle is true"
            false="Toggle is false"
          />
        </h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setToggle(!toggle)}
        >
          Toggle
        </button>
        <h2>
          <Plural
            n={count}
            singular={
              <>
                There is <Num>{count}</Num> cookie
              </>
            }
            plural={
              <>
                There are <Num>{count}</Num> cookies
              </>
            }
          />
        </h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </T>
  );
}
