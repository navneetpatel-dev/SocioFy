import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  showHomeScreen: false,
  setHomeScreen: (value) => {},
});

function AuthContextProvider({ children }) {
  const [userExist, setUserExist] = useState(false);

  function setHomeScreen(val) {
    setUserExist(!!val);
  }

  const value = {
    showHomeScreen: !!userExist,
    setHomeScreen: setHomeScreen,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
