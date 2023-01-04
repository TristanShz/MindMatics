import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ValidationDialog from "../ui/ValidationDialog";
import { ROUTES } from "../../_config/routes";
import { useGame } from "../../context/GameContext";
import { gameConfig } from "../../_config/gameConfig";

const BackButton = () => {
  const { gameState, setGameState } = useGame();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    if (gameState === gameConfig.states.CHOOSE_DIFFICULTY) {
      setIsDialogOpen(true);
    }
    if (gameState === gameConfig.states.START) {
      setGameState(gameConfig.states.CHOOSE_DIFFICULTY);
    }
  };
  return (
    <>
      <ValidationDialog
        texts={{
          head: "Back to home",
          body: "Are you sure you want to leave the game in progress ?",
        }}
        isOpen={isDialogOpen}
        closeDialog={() => setIsDialogOpen(false)}
        onValidate={() => navigate(ROUTES.home)}
      />
      <div className={"text-start w-full"} onClick={handleBack}>
        <p className={"text-lg hover:cursor-pointer hover:underline"}>Back</p>
      </div>
    </>
  );
};

export default BackButton;
