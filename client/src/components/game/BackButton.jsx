import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ValidationDialog from "../ui/ValidationDialog";
import { ROUTES } from "../../_config/routes";
import { useGameContext } from "../../context/GameContext";
import { gameConfig } from "../../_config/gameConfig";

const BackButton = () => {
  const { gameState, setGameState } = useGameContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const closeDialog = () => setIsDialogOpen(false);
  const onValidate = () => navigate(ROUTES.home);
  const handleBack = () => {
    if (
      gameState === gameConfig.states.CHOOSE_DIFFICULTY ||
      gameState === gameConfig.states.PLAY
    ) {
      setIsDialogOpen(true);
    }
    if (gameState === gameConfig.states.START) {
      setGameState(gameConfig.states.CHOOSE_DIFFICULTY);
    }
    if (gameState === gameConfig.states.FINISH) {
      navigate("/");
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
        closeDialog={closeDialog}
        onValidate={onValidate}
      />
      <div className={"text-start w-full"} onClick={handleBack}>
        <p className={"text-lg hover:cursor-pointer hover:underline"}>Back</p>
      </div>
    </>
  );
};

export default BackButton;
