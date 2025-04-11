import { BrowserRouter, Routes, Route } from "react-router";
import { HomeIcon, BarChart3Icon, CalculatorIcon } from "lucide-react";

import SignInPage from "@/features/auth/pages/sign-in";
import {
  DashboardLayout,
  type DashboardLayoutNavigation,
} from "@/components/templates/dashboard";

export function Router() {
  const navigation: DashboardLayoutNavigation = [
    {
      name: "Inicio",
      href: "/",
      icon: HomeIcon,
    },
    {
      name: "Gráfico",
      href: "/grafico",
      icon: BarChart3Icon,
    },
    {
      name: "Simulador de Inversiones",
      href: "/simulador",
      icon: CalculatorIcon,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/sign-in" element={<SignInPage />} />

        <Route element={<DashboardLayout navigation={navigation} />}>
          <Route index element={<h1>Hola</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
