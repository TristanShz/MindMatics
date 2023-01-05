import { useEffect, useState } from "react";
import { gameConfig } from "../_config/gameConfig";

export const useTimer = () => {
  const [timer, setTimer] = useState(gameConfig.duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevState) => prevState - 250);
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return {
    timer,
    setTimer,
  };
};
