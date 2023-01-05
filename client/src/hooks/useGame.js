import { useMemo, useState } from "react";
import { gameUtils } from "../utils/gameUtils";

export const useGame = (difficulty) => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

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
  };
};
