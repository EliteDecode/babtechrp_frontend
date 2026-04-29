import logo from "@/assets/images/Logo.png";
import useSidebar from "@/hooks/useSidebar";
import { DashboardNavbarProps } from "@/types/majorTypes";
import { sideBarLinks } from "@/utils/dashboardContents";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({ setIsSidebar, isSidebar }: DashboardNavbarProps) => {
  const { location, user, handleSidebarToggle } = useSidebar({ setIsSidebar });

  const initials = user?.fullname
    ?.split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className="h-screen flex flex-col bg-primary overflow-hidden"
      style={{ position: "sticky", top: 0, zIndex: 1000 }}>

      {/* Logo row */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
        <img
          src={logo}
          alt="BST logo"
          className="w-20 brightness-0 invert opacity-90"
        />
        <button
          onClick={() => setIsSidebar(!isSidebar)}
          className="md:hidden w-7 h-7 flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors">
          <X size={16} />
        </button>
      </div>

      {/* User card */}
      <div className="px-3 py-3 border-b border-white/10">
        <div className="flex items-center gap-3 bg-white/10 rounded-xl px-3 py-2.5">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-[11px] font-bold shrink-0">
            {initials}
          </div>
          <div className="min-w-0">
            <p className="text-white text-xs font-semibold truncate leading-tight">
              {user?.fullname}
            </p>
            <p className="text-blue-300 text-[10px] leading-tight mt-0.5">
              User Account
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-4 scrollbar-none">
        {sideBarLinks.map((group, index) => (
          <div key={index}>
            <p className="text-blue-400/70 text-[9px] font-bold uppercase tracking-widest px-2 mb-1.5">
              {group.title}
            </p>
            <div className="space-y-0.5">
              {group.content.map((item, index2) => {
                const isActive = location.pathname.includes(item.link);
                return (
                  <Link
                    key={index2}
                    to={item.link}
                    onClick={handleSidebarToggle}
                    className={`flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all duration-150 group ${
                      isActive
                        ? "bg-white/15 border-l-2 border-white/70 pl-[10px]"
                        : "hover:bg-white/8 border-l-2 border-transparent"
                    }`}>
                    <span
                      style={{
                        filter: isActive
                          ? "brightness(0) invert(1)"
                          : "brightness(0) invert(1)",
                        opacity: isActive ? 1 : 0.45,
                      }}>
                      {item.Icon}
                    </span>
                    <span
                      className={`text-[11px] font-medium ${
                        isActive ? "text-white" : "text-white/50 group-hover:text-white/80"
                      }`}>
                      {item.Title}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
