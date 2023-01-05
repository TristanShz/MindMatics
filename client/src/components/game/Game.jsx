import { useTimer } from "../../hooks/useTimer";
import ProgressBar from "./ProgressBar";
import { gameConfig } from "../../_config/gameConfig";
import { useGameContext } from "../../context/GameContext";
import AnswerField from "./AnswerField";
import { memo } from "react";
import { useGame } from "../../hooks/useGame";
import SecondaryText from "../ui/SecondaryText";

const Game = memo(({ setGameResult, setGameState }) => {
  const { difficulty } = useGameContext();
  const { timer, setTimer } = useTimer();
  const game = useGame(difficulty);

  // if (timer <= 0) {
  //   setGameState(gameConfig.states.FINISH);
  //   setGameResult({ userAnswers: game.userAnswers, score: game.score });
  // }

  return (
    <div className={"w-full h-full flex flex-col items-center justify-center"}>
      <div
        className={
          "p-12 border border-slate-50 bg-slate-900 shadow shadow-slate-800 w-2/3 space-y-16"
        }
      >
        <div>
          <ProgressBar initialTime={gameConfig.duration} timer={timer} />
          <div className={"w-full flex justify-between mt-2"}>
            <p className={"text-slate-400"}>Score : {game.score}</p>
            <p className={"text-slate-400"}>
              Time left : {Math.floor(timer / 1000)}
            </p>
          </div>
        </div>
        <h2>{game.calculation.formattedCalculation}</h2>
        <AnswerField
          calculation={game.calculation}
          setScore={game.setScore}
          setTimer={setTimer}
          setUserAnswers={game.setUserAnswers}
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
