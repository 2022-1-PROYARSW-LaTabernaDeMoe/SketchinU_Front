import React, { useContext, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [CurrentUser, setCurrentUser] = useState();

  function signup(email, password) {
    return auth.creaUserWithEmail;
  }
  const value = {
    CurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
