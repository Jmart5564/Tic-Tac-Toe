import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const GameContext = createContext();




export function GameContextProvider({ children }) {
  const [square, setSquares] = useState(Array(9).fill(''));
  const [player, setPlayer] = useState('O');
  const [active, setActive] = useState(true);

  return (
    <GameContext.Provider
      value={{
        square,
        setSquares,
        player,
        setPlayer,
        active,
        setActive
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  
  return context;
}