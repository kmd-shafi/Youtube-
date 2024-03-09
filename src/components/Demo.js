import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setTest] = useState(0);
  const [isDark, setIsDark] = useState(true);

  const prime = useMemo(() => findPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black" +
        (isDark && " text-white bg-green-400")
      }
    >
      <div>
        <button
          className="bg-black text-white m-2 p-2"
          onClick={() => setIsDark(!isDark)}
        >
          Theme
        </button>
      </div>
      <div>
        <input
          className="border border-black w-72 px-2 text-black "
          type="number"
          value={text}
          onChange={(e) => setTest(e.target.value)}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl"> nth Prime :{prime} </h1>
      </div>
    </div>
  );
};

export default Demo;
