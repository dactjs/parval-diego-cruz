import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AuthProvider } from "@/features/auth/providers/auth";
import { Router } from "@/router";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </StrictMode>
);
