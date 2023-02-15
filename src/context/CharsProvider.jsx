import React, { useState } from "react";
import CharsContext from "./CharsContext";

function CharsProvider ({ children }) {
  const [chars, setChars] = useState({});
 
const contextValue = {
  chars,
  setChars,
};

return (
    <CharsContext.Provider value={contextValue}>
        {children}
    </CharsContext.Provider>
);
}

export default CharsProvider;