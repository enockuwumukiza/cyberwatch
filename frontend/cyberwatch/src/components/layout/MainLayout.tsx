import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { 
  LayoutDashboard, 
  ShieldAlert, 
  Globe, 
  FileBarChart, 
  Cpu, 
  Users, 
  Settings,
  Bell,
  AlertOctagon,
  Shield,
  Activity,
  Zap
} from 'lucide-react';
import Sidebar from "./Sidebar"
import { Menu } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard', badge: null },
  { 
    icon: ShieldAlert, 
    label: 'Threat Intel', 
    path: '/threats', 
    badge: { count: 8, severity: 'critical' } 
  },
  { 
    icon: Globe, 
    label: 'Network Map', 
    path: '/network', 
    badge: { count: 3, severity: 'warning' }
  },
  { 
    icon: FileBarChart, 
    label: 'Logs', 
    path: '/logs', 
    badge: { count: 156, severity: 'info' } 
  },
  { icon: Cpu, label: 'ML & AI Models', path: '/models', badge: null },
  { icon: Users, label: 'Access Control', path: '/users', badge: null },
  { icon: Settings, label: 'Settings', path: '/settings', badge: null },
];

const MainLayout = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (path: string) => {
    navigate(path);
    setOpen(false); // close menu on navigation
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      {/* Mobile Top Nav */}
      <div className="flex lg:hidden items-center justify-between p-4 bg-gray-100 border-b">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-2 text-gray-700">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <div className="p-4 space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleNavClick(item.path)}
                    className="flex items-center w-full text-left gap-3 px-4 py-2 rounded-md hover:bg-gray-100 transition text-gray-800"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          item.badge.severity === "critical"
                            ? "bg-red-500 text-white"
                            : item.badge.severity === "warning"
                            ? "bg-yellow-500 text-black"
                            : "bg-blue-500 text-white"
                        }`}
                      >
                        {item.badge.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-semibold">ISIMBI</h1>
      </div>

      {/* Sidebar on large screens */}
      <div className="hidden lg:block lg:w-[15%] lg:min-w-[200px] bg-gray-100">
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
