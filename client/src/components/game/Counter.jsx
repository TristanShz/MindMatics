import { useEffect, useState } from "react";

const Counter = ({ onFinish }) => {
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevState) => prevState - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (counter === 0) onFinish();
  return (
    <div className={"absolute inset-0 flex items-center justify-center"}>
      <h1>{counter}</h1>
    </div>
  );
};

export default Counter;
