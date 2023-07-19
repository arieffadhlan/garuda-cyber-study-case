"use client";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline"
import { logout } from "@/redux/features/auth/authSlice";

const AccountNavigation = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/auth/login");
  }
  
  return (
    <div className="flex flex-[40%] flex-col h-fit p-6 border border-neutral-2 rounded-lg bg-neutral-1 shadow-2xs">
      <button type="button" onClick={handleLogout} className="flex items-center gap-4">
        <ArrowRightOnRectangleIcon className="w-6 h-6 text-emerald-800" />
        <span className="font-medium text-base text-neutral-5">Sign Out</span>
      </button>
    </div>
  )
}
  
export default AccountNavigation;