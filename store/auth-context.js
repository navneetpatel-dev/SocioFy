import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
  const value = {};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
