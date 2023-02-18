import React, { useState } from "react";
import ContentContext from "./ContentContext";

function ContentProvider ({ children }) {
  const [chars, setChars] = useState({});
 
const contextValue = {
  chars,
  setChars,
};

return (
    <ContentContext.Provider value={contextValue}>
        {children}
    </ContentContext.Provider>
);
}

export default ContentProvider;