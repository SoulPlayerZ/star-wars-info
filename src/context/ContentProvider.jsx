import React, { useState } from "react";
import ContentContext from "./ContentContext";

function ContentProvider ({ children }) {
  const [chars, setChars] = useState({});
  const [planets, setPlanets] = useState({});
  const [movies, setMovies] = useState({});
 
  const contextValue = {
    chars,
    setChars,
    planets,
    setPlanets,
    movies,
    setMovies,
  };

  return (
    <ContentContext.Provider value={contextValue}>
        {children}
    </ContentContext.Provider>
  );
}

export default ContentProvider;