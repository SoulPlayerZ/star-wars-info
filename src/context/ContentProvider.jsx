import React, { useState } from "react";
import ContentContext from "./ContentContext";

function ContentProvider ({ children }) {
  const [chars, setChars] = useState({});
  const [planets, setPlanets] = useState({});
  const [movies, setMovies] = useState({});
  const [starShips, setStarShips] = useState({});
 
  const contextValue = {
    chars,
    setChars,
    planets,
    setPlanets,
    movies,
    setMovies,
    starShips,
    setStarShips,
  };

  return (
    <ContentContext.Provider value={contextValue}>
        {children}
    </ContentContext.Provider>
  );
}

export default ContentProvider;