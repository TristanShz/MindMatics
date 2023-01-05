import { useEffect, useMemo, useState } from "react";
import { gameUtils } from "../utils/gameUtils";
import { gameConfig } from "../_config/gameConfig";

export const useGame = (difficulty) => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(gameConfig.duration);
  const [answerState, setAnswerState] = useState(undefined);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevState) => prevState - 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const calculation = useMemo(() => {
    return gameUtils.generateRandomCalculation(difficulty);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAnswers, difficulty]);

  return {
    calculation,
    userAnswers,
    setUserAnswers,
    score,
    setScore,
    timer,
    setTimer,
    answerState,
    setAnswerState,
  };
};
