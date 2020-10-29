import React, { useContext, createContext, useState } from "react";

interface AuthType {
  email: string;
  name: string;
  token: string;
  logged: boolean;
}

interface AuthContextType {
  auth: AuthType;
  setAuth: (value: AuthType) => void;
}

const defaultValue: AuthType = {
  email: "",
  name: "",
  token: "",
  logged: false,
};

type Props = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType>({
  auth: defaultValue,
  setAuth: () => {},
});

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState(defaultValue);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
