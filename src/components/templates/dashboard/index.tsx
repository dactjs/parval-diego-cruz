import { Outlet, Link, useLocation } from "react-router";

import type { LucideProps } from "lucide-react";

import { cn } from "@/lib/shadcn";

export type DashboardLayoutNavigation = Array<{
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
}>;

export interface DashboardLayoutProps {
  navigation: DashboardLayoutNavigation;
}

export function DashboardLayout({ navigation }: DashboardLayoutProps) {
  const location = useLocation();

  return (
    <div className="flex h-screen">
      <aside className="flex h-full w-64 flex-col border-r bg-white">
        <div className="flex h-14 items-center border-b px-4">
          <h2 className="text-lg font-semibold">Prueba técnica - Parval</h2>
        </div>

        <nav className="flex-1 overflow-auto py-4">
          <ul className="space-y-1 px-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    item.href === location.pathname
                      ? "bg-green-100 text-green-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <main className="flex-1 overflow-auto p-4">
        <Outlet />
      </main>
    </div>
  );
}
