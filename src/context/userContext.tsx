"use client";

import React from "react";

export interface IUserContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
}

export const UserContext = React.createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: IUser | null;
}) {
  const [userState, setUserState] = React.useState<IUser | null>(user);

  return (
    <UserContext.Provider value={{ user: userState, setUser: setUserState }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error("useContext deve estar dentro do Provider");
  }
  return context;
};
