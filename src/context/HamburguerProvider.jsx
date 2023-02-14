import React, { useState } from "react";
import HamburgerContext from "./HamburguerContext";

function HamburguerProvider ({ children }) {
  const [active, setActive] = useState(false);
 
const contextValue = {
  active,
  setActive,
};

return (
    <HamburgerContext.Provider value={contextValue}>
        {children}
    </HamburgerContext.Provider>
);
}

export default HamburguerProvider;