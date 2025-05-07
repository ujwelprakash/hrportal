import React from "react";
import { Link } from "react-router-dom"; // React Router
import Header from "../Header/Header";
import SideBar from "../sideBar/SideBar";
import attend from "../assets/attend.jpg"
import icon from "../assets/icon.png";

const AttendancePage = () => {
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
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6 sm:p-10">
          <div className="bg-white rounded-xl p-6 sm:p-10 w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
            <h1 className="text-2xl font-bold text-[#1E1E1E] mb-8">Employee</h1>

            <div className="flex gap-6 flex-wrap">
              {/* Active - Employee Card */}
                <Link to="/attendance/Leave">
                <div className="w-[157px] h-[157px] border-2 border-[#FF5A5F] bg-white rounded-xl flex flex-col items-center justify-center text-[#FF5A5F] shadow hover:shadow-md transition">
                  <img src={icon} size={36} />
                  <p className="mt-2 text-sm font-medium">Leave Request</p>
                </div>
              </Link>

              {/* Inactive - Org Config Card */}
              <Link to="/attendance/List">
                <div className="w-[157px] h-[157px] border-2  border-gray-300 bg-white rounded-xl flex flex-col items-center justify-center  text-gray-400 shadow hover:shadow-md transition">
                  <img src={attend} size={36} />
                  <p className="mt-2 text-sm font-medium">Attendances</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>


    
  );
}


export default AttendancePage
