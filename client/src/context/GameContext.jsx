import { createContext, useContext, useState } from "react";

const GameContext = createContext(null);

const GameProvider = ({ children, gameState, setGameState }) => {
  const [difficulty, setDifficulty] = useState(undefined);
  return (
    <GameContext.Provider
      value={{ gameState, setGameState, difficulty, setDifficulty }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGame = () => useContext(GameContext);

export { GameProvider, useGame };
