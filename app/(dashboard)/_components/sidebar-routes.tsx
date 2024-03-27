"use client";

import { BarChart, Compass, Layout, List } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];
const coachRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/coach/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();
  const isCoachPage = pathname?.includes("/coach");
  const routes = isCoachPage ? coachRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
