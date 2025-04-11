import { BrowserRouter, Routes, Route } from "react-router";
import { HomeIcon, BarChart3Icon, CalculatorIcon } from "lucide-react";

import SignInPage from "@/features/auth/pages/sign-in";
import InstrumentsPage from "@/features/instruments/pages/instruments";
import StatisticsPage from "@/features/instruments/pages/statistics";
import SimulatorPage from "@/features/instruments/pages/simulator";
import { ProtectedRoute } from "@/features/auth/components/protected-route";
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
      name: "Estadísticas",
      href: "/statistics",
      icon: BarChart3Icon,
    },
    {
      name: "Simulador de Inversiones",
      href: "/simulator",
      icon: CalculatorIcon,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/sign-in" element={<SignInPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout navigation={navigation} />}>
            <Route index element={<InstrumentsPage />} />
            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/simulator" element={<SimulatorPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
