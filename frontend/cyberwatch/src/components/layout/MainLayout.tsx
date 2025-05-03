// components/layout/MainLayout.tsx
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full">
      {/* Sidebar takes 15% */}
      <div className="w-[15%] min-w-[200px] bg-gray-100">
        <Sidebar />
      </div>

      {/* Main content takes 85% */}
      <div className="w-[85%] p-4 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
