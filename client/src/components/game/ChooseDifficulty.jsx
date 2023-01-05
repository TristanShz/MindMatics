import TitleBlock from "../ui/TitleBlock";
import SelectableButton from "../ui/SelectableButton";
import { useGameContext } from "../../context/GameContext";
import { gameConfig } from "../../_config/gameConfig";

const ChooseDifficulty = () => {
  const { setDifficulty, setGameState } = useGameContext();
  return (
    <div>
      <div className={"flex flex-col gap-12 items-center"}>
        <TitleBlock />
        <h3>Choose a difficulty</h3>
        <div className={"w-full sm:w-3/4 lg:w-1/3 space-y-12"}>
          {Object.keys(gameConfig.difficulties).map((difficultyKey) => {
            return (
              <SelectableButton
                className={"w-full"}
                onClick={() => {
                  setDifficulty(difficultyKey);
                  setGameState(gameConfig.states.START);
                }}
                key={difficultyKey}
              >
                {difficultyKey}
              </SelectableButton>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChooseDifficulty;
