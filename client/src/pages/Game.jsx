import { useState } from "react";
import { GameProvider } from "../context/GameContext";
import ChooseDifficulty from "../components/game/ChooseDifficulty";
import BackButton from "../components/game/BackButton";
import StartGame from "../components/game/StartGame";
import { gameConfig } from "../_config/gameConfig";

const Game = () => {
  const { states } = gameConfig;
  const [gameState, setGameState] = useState(states.CHOOSE_DIFFICULTY);

  return (
    <div className={"w-full h-full"}>
      <GameProvider gameState={gameState} setGameState={setGameState}>
        <BackButton />
        {gameState === states.CHOOSE_DIFFICULTY && <ChooseDifficulty />}
        {gameState === states.START && <StartGame />}
      </GameProvider>
    </div>
  );
};

export default Game;
