import { useState } from "react";
import { SlowComponent } from "./SlowComponent";

export function WithoutReactCompiler() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <h1 className="text-2xl">Without React Compiler 🐌</h1>

      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <button
            className="border-2 py-1 px-2 rounded-md"
            onClick={() => setCount((c) => c + 1)}
          >
            Increase count
          </button>
          <span>{count}</span>
        </div>

        <SlowComponent />
      </div>
    </div>
  );
}
