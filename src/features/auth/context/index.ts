import { createContext } from "react";

import type { Session } from "../schemas/session";

export interface AuthContextValue {
  session: Session | null;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextValue>({
  session: null,
  signIn: async () => {},
  signOut: async () => {},
});
