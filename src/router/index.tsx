import { BrowserRouter, Routes, Route } from "react-router";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Index</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
