import { useGameContext } from "../../context/GameContext";
import TitleBlock from "../ui/TitleBlock";
import { gameConfig } from "../../_config/gameConfig";
import SecondaryText from "../ui/SecondaryText";
import Button from "../ui/Button";
import { useCallback, useState } from "react";
import Counter from "./Counter";

const StartGame = () => {
  const { difficulty, setGameState } = useGameContext();
  const [isStarting, setIsStarting] = useState(false);

  const startCounter = useCallback(() => setIsStarting(true), []);
  const startGame = useCallback(() => setGameState(gameConfig.states.PLAY), []);

  if (isStarting) {
    return <Counter onFinish={startGame} />;
  }

  return (
    <div className={"flex flex-col items-center gap-12"}>
      <TitleBlock />
      <p className={"w-full md:w-2/3 lg:w-1/2"}>
        The game will start in <SecondaryText>{difficulty}</SecondaryText>{" "}
        difficulty, you will have{" "}
        <SecondaryText>{gameConfig.duration / 1000}</SecondaryText> seconds to
        solve as many calculations as possible, if you make a mistake in a
        calculation,{" "}
        <SecondaryText>{gameConfig.penalty.wrongAnswer / 1000}</SecondaryText>{" "}
        seconds will be removed on the timer and if you skip a calculation,{" "}
        {<SecondaryText>{gameConfig.penalty.skip / 1000}</SecondaryText>}{" "}
        seconds will be removed on the timer, good luck!
      </p>
      <Button large onClick={startCounter}>
        START GAME
      </Button>
    </div>
  );
};

export default StartGame;
