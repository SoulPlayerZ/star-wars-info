import React, { useState } from "react";
import LoadingContext from "./LoadingContext";

function LoadingProvider ({ children }) {
  const [loading, setLoading] = useState(false);
 
const contextValue = {
  loading,
  setLoading,
};

return (
    <LoadingContext.Provider value={contextValue}>
        {children}
    </LoadingContext.Provider>
);
}

export default LoadingProvider;