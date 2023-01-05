import { useGameContext } from "../../context/GameContext";
import clsx from "clsx";
import Button from "../ui/Button";
import { memo, useCallback } from "react";
import { gameUtils } from "../../utils/gameUtils";
import { gameConfig } from "../../_config/gameConfig";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GameResult = memo(({ result, resetGame }) => {
  const { difficulty } = useGameContext();
  const navigate = useNavigate();
  const saveScore = useCallback(() => {
    gameUtils
      .saveResult(result.score, gameConfig.difficulties[difficulty])
      .then(() => {
        toast.success("Result saved successfully");
        navigate("/");
      })
      .catch(() => {
        toast.error("Error while saving result");
      });
  }, [result, difficulty, navigate]);
  return (
    <div
      className={
        "p-12 border border-slate-50 bg-slate-900 shadow shadow-slate-800 w-2/3 mx-auto flex flex-col items-center gap-16"
      }
    >
      <h3 className={"text-slate-300"}>Well done !</h3>
      <h4>Your score : {result.score}</h4>
      <div className={"w-full"}>
        {result.userAnswers.map((answer, index) => {
          const isCorrect = answer.answer === answer.calculation.result;
          return (
            <div
              key={answer.calculation.formattedCalculation + index}
              className={"flex justify-between border-b border-slate-800 py-3"}
            >
              <p
                className={clsx("text-lg", {
                  "text-red-500": !isCorrect,
                })}
              >
                {answer.calculation.formattedCalculation}
              </p>
              <div className={"flex gap-4"}>
                <p
                  className={clsx("text-xl", {
                    "text-teal-500": isCorrect,
                    "text-red-500": !isCorrect,
                  })}
                >
                  {answer.answer}
                </p>
                {!isCorrect && (
                  <p className={"text-teal-500 text-xl"}>
                    {answer.calculation.result}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className={"flex gap-8"}>
        <Button large onClick={saveScore}>
          Save score
        </Button>
        <Button large secondary onClick={resetGame}>
          Try again
        </Button>
      </div>
    </div>
  );
});

export default GameResult;
