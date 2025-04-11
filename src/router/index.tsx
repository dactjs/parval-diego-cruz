import { BrowserRouter, Routes, Route } from "react-router";

import SignInPage from "@/features/auth/pages/sign-in";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Index</h1>} />
        <Route path="/auth/sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
}
