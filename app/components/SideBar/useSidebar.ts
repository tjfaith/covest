"use client";
import { LandPlot, LayoutDashboard, Pyramid, Users } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { RootState } from "@/app/Store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { toggleSideBar } from "@/app/Store/Features/settingsSlice";
import { useDispatch } from "react-redux";
import { UserServices } from "@/app/api";
import { updateLoggedInUser } from "@/app/Store/Features/userSlice";
import toast from "react-hot-toast";

function useSidebar() {
  const router = useRouter();
  const dispatch = useDispatch();

  const {activePage, showSideBar} = useSelector(
    (state: RootState) => state.settings
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
  const handleChangePage=(route_to:string)=>{
   dispatch(toggleSideBar(false));
    router.push(route_to);
  }
  
  const hideMenu = ()=>{
   dispatch(toggleSideBar(false));

 }
  const handleLogout=()=>{
    localStorage.clear()
    router.push('/');
  }
  
  const getUserData = async ()=>{
    await UserServices().userData().then(response=>{
      dispatch(updateLoggedInUser(response.data))
    }, ()=>{
      toast.error('An error occurred, please try again')
    })
  }

  useEffect(() => {
    getUserData()
  }, [getUserData]);
  return { navMenu, activePage, confirmLogout,showSideBar, hideMenu, handleChangePage,handleLogout, setConfirmLogout };
}

export default useSidebar;
