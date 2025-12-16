"use client";
import { Branch, Num, Plural, T } from "gt-next";
import { useState } from "react";

export default function Page() {
  const [toggle, setToggle] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <T context="cookies as in baking">
      <div>
        <h1>The Branch Component</h1>
        <Branch
          branch={toggle ? "masculine" : "feminine"}
          masculine="The beautiful man"
          feminine="The beautiful woman"
          neutral="The beautiful person"
        />
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
              <span>
                There is <Num>{count}</Num> cookie
              </span>
            }
            plural={
              <span>
                There are <Num>{count}</Num> cookies
              </span>
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
