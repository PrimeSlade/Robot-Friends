import React, { useState } from "react";

const CounterButton = () => {
  const [counter, setCounter] = useState(0);
  return (
    <button onClick={() => setCounter((c) => c + 1)} className="mb3">
      Click {counter}
    </button>
  );
};

export default CounterButton;
