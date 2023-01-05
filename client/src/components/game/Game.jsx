import ProgressBar from "./ProgressBar";
import { gameConfig } from "../../_config/gameConfig";
import { useGameContext } from "../../context/GameContext";
import AnswerField from "./AnswerField";
import { memo } from "react";
import { useGame } from "../../hooks/useGame";
import SecondaryText from "../ui/SecondaryText";
import clsx from "clsx";
import GameInfos from "./GameInfos";

const Game = memo(({ setGameResult, setGameState }) => {
  const { difficulty } = useGameContext();
  const {
    timer,
    calculation,
    setUserAnswers,
    score,
    setScore,
    setTimer,
    answerState,
    setAnswerState,
    userAnswers,
  } = useGame(difficulty);

  // if (timer <= 0) {
  //   setGameState(gameConfig.states.FINISH);
  //   setGameResult({ userAnswers: userAnswers, score: score });
  // }

  return (
    <div className={"w-full h-full flex flex-col items-center justify-center"}>
      <div
        className={clsx(
          "p-12 border bg-slate-900 shadow shadow-slate-800 w-2/3 space-y-16",
          {
            "border-teal-500": answerState === gameConfig.answerState.CORRECT,
            "border-red-500 animate-wiggle":
              answerState === gameConfig.answerState.WRONG,
            "border-orange-500": answerState === gameConfig.answerState.SKIP,
            "border-slate-50": !answerState,
          }
        )}
      >
        <div>
          <ProgressBar initialTime={gameConfig.duration} timer={timer} />
          <GameInfos timer={timer} score={score} answerState={answerState} />
        </div>
        <h2>{calculation.formattedCalculation}</h2>
        <AnswerField
          calculation={calculation}
          setScore={setScore}
          setTimer={setTimer}
          setUserAnswers={setUserAnswers}
          answerState={answerState}
          setAnswerState={setAnswerState}
        />
      </div>
      <div className={"mt-2 text-slate-400"}>
        Press <SecondaryText>Enter</SecondaryText> to validate your answer and{" "}
        <SecondaryText>S</SecondaryText> to skip
      </div>
    </div>
  );
});

export default Game;
