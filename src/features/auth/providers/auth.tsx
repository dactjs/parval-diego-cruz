import { useState } from "react";

import { UserSchema } from "@/features/users/schemas/users";
import { USERS_STORAGE_KEY } from "@/features/users/constants";

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
    const raw = localStorage.getItem(USERS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];

    const result = UserSchema.array().safeParse(parsed);

    if (!result.success) throw new Error(result.error.message);

    const user = result.data.find(
      (user) => username === user.username && password === user.password
    );

    if (!user) throw new Error("Credenciales inválidas");

    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(user));
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
