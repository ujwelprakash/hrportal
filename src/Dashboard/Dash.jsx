import React from "react";
import Header from "../Header/Header";
import SideBar from "../sideBar/SideBar";
import DashboardSection from "./DashBoardSection/DashBoardSection";

function Dash() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1424px] mx-auto h-screen overflow-hidden">
      {/* Sidebar - hidden on mobile, visible on desktop */}
      <div className="hidden md:block w-[210px] bg-white border-r">
        <SideBar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header - always visible */}
        <Header />

        {/* Mobile Sidebar */}
        <div className="md:hidden">
          <SideBar />
        </div>

        {/* Scrollable Dashboard Content */}
        <div className="flex-1 overflow-y-auto">
          <DashboardSection />
        </div>
      </div>
    </div>
  );
}

export default Dash;
