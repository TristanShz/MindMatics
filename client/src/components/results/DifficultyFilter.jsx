import { gameConfig } from "../../_config/gameConfig";
import SelectableButton from "../ui/SelectableButton";

const DifficultyFilter = ({ setDifficultySelected, difficultySelected }) => {
  return (
    <div className={"flex flex-wrap gap-2"}>
      <SelectableButton
        selected={!difficultySelected}
        className={"px-4"}
        onClick={() => setDifficultySelected(undefined)}
      >
        ALL
      </SelectableButton>
      {Object.entries(gameConfig.difficulties).map(([key, value]) => {
        return (
          <SelectableButton
            selected={difficultySelected === value}
            className={"px-4"}
            onClick={() => setDifficultySelected(value)}
            key={value}
          >
            {key}
          </SelectableButton>
        );
      })}
    </div>
  );
};

export default DifficultyFilter;
