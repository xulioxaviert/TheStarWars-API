/* import React, { useState, useContext } from "react";

const CardContext = React.createContext();

export const UseCardContext = () => {
  return useContext(CardContext);
};

export default function CardProvider({ children }) {
  const [characters, setCharacters] = useState([]);

  const addItem = (item) => {
    const found = characters.find((character) => character.id === item.id);
    if (found) {
      const cardItem = {
        ...item,
      };
      setCharacters([...cardItem]);
    }
  };

  return (
    <CardContext.Provider value={setCharacters}>
      {children}
    </CardContext.Provider>
  );
}
 */