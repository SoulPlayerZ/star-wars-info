import React, { useState } from "react";

function HamburguerProvider ({ children }) {
  const [active, setActive] = useState(false);
 
const contextValue = {
  active,
  setActive,
};

return (
<HamburguerContext.Provider value={contextValue}>
    {children}
</HamburguerContext.Provider>
);
}

export default HamburguerProvider;