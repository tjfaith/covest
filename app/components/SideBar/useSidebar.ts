"use client";
import { LandPlot, LayoutDashboard, Pyramid, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { RootState } from "@/app/Store";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function useSidebar() {
  const activePage = useSelector(
    (state: RootState) => state.settings.activePage
  );

  const [confirmLogout, setConfirmLogout] = useState(false)
  const navMenu: Record<string, string | LucideIcon>[] = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      id: "dashboard",
      route_to: "/dashboard",
    },
    {
      label: "Buy Property",
      icon: LandPlot,
      id: "buy_property",
      route_to: "/dashboard/buyProperty",
    },
    {
      label: "Buy Land",
      icon: Pyramid,
      id: "buy_land",
      route_to: "/dashboard/buyLand ",
    },
    {
      label: "Referrals",
      icon: Users,
      id: "referrals",
      route_to: "/dashboard/referrals ",
    },
  ];
  return { navMenu, activePage, confirmLogout, setConfirmLogout };
}

export default useSidebar;
