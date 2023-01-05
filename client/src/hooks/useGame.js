import { useMemo, useState } from "react";
import { gameUtils } from "../utils/gameUtils";

export const useGame = (difficulty) => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const calculation = useMemo(() => {
    return gameUtils.generateRandomCalculation(difficulty);
  }, [userAnswers]);

  return {
    calculation,
    userAnswers,
    setUserAnswers,
    score,
    setScore,
  };
};
