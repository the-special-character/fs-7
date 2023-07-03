import { createContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setUser(JSON.parse(token));
    }
  }, []);

  const register = async (data) => {
    try {
      const { confirmPassword, ...rest } = data;
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        body: JSON.stringify(rest),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json);
      }
      sessionStorage.setItem("token", JSON.stringify(json));
      setUser(json);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (data) => {
    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json);
      }
      sessionStorage.setItem("token", JSON.stringify(json));
      setUser(json);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    sessionStorage.clear();
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      register,
      login,
      logout,
    }),
    [user, register, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
