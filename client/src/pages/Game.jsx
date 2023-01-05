import { useCallback, useState } from "react";
import { GameProvider } from "../context/GameContext";
import ChooseDifficulty from "../components/game/ChooseDifficulty";
import BackButton from "../components/game/BackButton";
import StartGame from "../components/game/StartGame";
import { gameConfig } from "../_config/gameConfig";
import Game from "../components/game/Game";
import GameResult from "../components/game/GameResult";

const GamePage = () => {
  const { states } = gameConfig;
  const [gameState, setGameState] = useState(states.CHOOSE_DIFFICULTY);
  const [gameResult, setGameResult] = useState(undefined);

  const resetGame = useCallback(() => {
    setGameState(states.CHOOSE_DIFFICULTY);
    setGameResult(undefined);
  }, []);

  return (
    <div className={"w-full h-full"}>
      <GameProvider gameState={gameState} setGameState={setGameState}>
        <BackButton />
        {gameState === states.CHOOSE_DIFFICULTY && <ChooseDifficulty />}
        {gameState === states.START && <StartGame />}
        {gameState === states.PLAY && (
          <Game setGameResult={setGameResult} setGameState={setGameState} />
        )}
        {gameState === states.FINISH && (
          <GameResult result={gameResult} resetGame={resetGame} />
        )}
      </GameProvider>
    </div>
  );
};

export default GamePage;
