import { createContext, useContext, useMemo, useState } from "react";

const GameContext = createContext(null);

const GameProvider = ({ children, gameState, setGameState }) => {
  const [difficulty, setDifficulty] = useState(undefined);

  const value = useMemo(() => {
    return {
      gameState,
      setGameState,
      difficulty,
      setDifficulty,
    };
  }, [gameState, difficulty, setGameState, setDifficulty]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};

const useGameContext = () => useContext(GameContext);

export { GameProvider, useGameContext };
