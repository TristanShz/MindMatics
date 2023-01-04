import { useGame } from "../../context/GameContext";
import TitleBlock from "../ui/TitleBlock";
import { gameConfig } from "../../_config/gameConfig";
import SecondaryText from "../ui/SecondaryText";

const StartGame = () => {
  const { difficulty } = useGame();
  return (
    <div className={"flex flex-col items-center gap-12"}>
      <TitleBlock />
      <p className={"w-full md:w-2/3 lg:w-1/2"}>
        The game will start in <SecondaryText>{difficulty}</SecondaryText>{" "}
        difficulty, you will have{" "}
        <SecondaryText>{gameConfig.duration}</SecondaryText> seconds to solve as
        many calculations as possible, if you make a mistake in a calculation,{" "}
        <SecondaryText>{gameConfig.timeRemovedWhenBadResponse}</SecondaryText>{" "}
        seconds will be removed on the timer, good luck!
      </p>
    </div>
  );
};

export default StartGame;
