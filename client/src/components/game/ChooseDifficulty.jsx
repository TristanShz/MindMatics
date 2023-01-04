import TitleBlock from "../ui/TitleBlock";
import SelectableButton from "../ui/SelectableButton";
import { useGame } from "../../context/GameContext";
import { gameConfig } from "../../_config/gameConfig";

const ChooseDifficulty = () => {
  const { setDifficulty, setGameState } = useGame();
  return (
    <div>
      <div className={"flex flex-col gap-12 items-center"}>
        <TitleBlock />
        <h3>Choose a difficulty</h3>
        {Object.keys(gameConfig.difficulties).map((difficultyKey) => {
          return (
            <SelectableButton
              onClick={() => {
                setDifficulty(difficultyKey);
                setGameState(gameConfig.states.START);
              }}
            >
              {difficultyKey}
            </SelectableButton>
          );
        })}
      </div>
    </div>
  );
};

export default ChooseDifficulty;
