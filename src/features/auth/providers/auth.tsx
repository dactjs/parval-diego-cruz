import { useState } from "react";

import { USERS } from "@/features/users/db";

import { AuthContext } from "../context";
import { SessionSchema, type Session } from "../schemas/session";
import { SESSION_STORAGE_KEY } from "../constants";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<Session | null>(() => {
    const raw = sessionStorage.getItem(SESSION_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;

    const result = SessionSchema.safeParse(parsed);

    return result.success ? result.data : null;
  });

  const handleSignIn = async (username: string, password: string) => {
    const user = USERS.find(
      (user) => username === user.username && password === user.password
    );

    if (!user) throw new Error("Credenciales inválidas");

    sessionStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify({ username: user.username, role: user.role })
    );

    setSession({ user });
  };

  const handleSignOut = async () => {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
    setSession(null);
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        signIn: handleSignIn,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
