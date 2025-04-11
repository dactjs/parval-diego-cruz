import { useContext } from "react";
import { Navigate, Outlet } from "react-router";

import { AuthContext } from "../../context";

export function ProtectedRoute() {
  const { session } = useContext(AuthContext);

  if (!session) return <Navigate replace to="/auth/sign-in" />;

  return <Outlet />;
}
