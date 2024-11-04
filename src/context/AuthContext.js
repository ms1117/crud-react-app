import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null); // Create a context object

export const useAuth = () => useContext(AuthContext); // Custom hook for easy access to the context

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === "admin" && password === "admin") {
      setUser({ id: "1", name: username });
      return true;
    } else {
      setUser(null);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children} {/*This will be your application components*/}
    </AuthContext.Provider>
  );
};
