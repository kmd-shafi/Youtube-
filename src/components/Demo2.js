import React, { useRef } from "react";

const Demo2 = () => {
  const z = useRef(10);
  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="m-2 p-2 bg-black text-white"
          onClick={() => {
            z.current = z.current + 1;
            // console.log(z.current);
          }}
        >
          Increase z
        </button>
        <span className="font-bold text-xl">Ref = {z.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
