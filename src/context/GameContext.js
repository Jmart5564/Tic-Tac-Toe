import { useState } from 'react';
// import { useContext } from 'react';
import { createContext } from 'react';

const GameContext = createContext();




export function GameContextProvider({ children }) {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('O');
  const [active, setActive] = useState(true);

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
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