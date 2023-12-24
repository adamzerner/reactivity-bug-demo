import { useState } from "preact/hooks";

export const Stepper = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Count: {count}</div>
      <button
        onClick={() => {
          console.log("hits onClick");
          setCount((c) => c + 1);
        }}
      >
        increment
      </button>
    </div>
  );
};
