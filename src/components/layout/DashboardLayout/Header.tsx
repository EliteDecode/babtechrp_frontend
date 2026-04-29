import ButtonSpinners from "@/helpers/ButtonSpinners";
import useDashboardHeader from "@/hooks/useDashboardHeader";
import { DashboardNavbarProps } from "@/types/majorTypes";
import { LogOut, Menu } from "lucide-react";

const Header = ({ setIsSidebar, isSidebar }: DashboardNavbarProps) => {
  const { handleLogout, dashboardTitle, isLoading, user } = useDashboardHeader();

  const initials = user?.fullname
    ?.split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-2.5 flex items-center justify-between">
      {/* Left: menu toggle + page title */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsSidebar(!isSidebar)}
          className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors">
          <Menu size={18} />
        </button>
        <span
          className="text-sm font-semibold text-gray-800 hidden sm:block"
          style={{ fontFamily: "eczar" }}>
          {dashboardTitle}
        </span>
      </div>

      {/* Right: user info + logout */}
      <div className="flex items-center gap-2.5">
        <div className="hidden sm:block text-right">
          <p className="text-xs font-semibold text-gray-800 leading-tight">
            {user?.fullname}
          </p>
          <p className="text-[10px] text-gray-400 leading-tight">
            User Account
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-[11px] font-bold shrink-0">
          {initials}
        </div>
        <button
          onClick={handleLogout}
          disabled={isLoading}
          title="Logout"
          className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors">
          {isLoading ? <ButtonSpinners /> : <LogOut size={15} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
