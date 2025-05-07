import React from "react";
import dot from "../assets/framedot.png";

const Cards = () => {
  return (
    <div>
      <div className="flex gap-6">
        {/* Leave Request */}
        <div
          className="w-[280px] h-[150px] pt-4 pr-4 pb-4 pl-6 gap-4 rounded-[12px] shadow"
          style={{ backgroundColor: "#FFEFE7" }}
        >
          <p className="text-xl font-semibold">Leave Request</p>
          <p className="text-4xl font-bold">04</p>
        </div>

        {/* Attendance */}
        <div
          className="w-[280px] h-[150px] pt-4 pr-4 pb-4 pl-6 gap-4 rounded-[12px] shadow"
          style={{ backgroundColor: "#E7F5FF" }}
        >
          <p className="text-xl font-semibold">Attendance</p>
          <p className="text-4xl font-bold">10</p>
        </div>

        {/* Total Employee */}
        <div
          className="w-[280px] h-[150px] pt-4 pr-4 pb-4 pl-6 gap-4 rounded-[12px] shadow"
          style={{ backgroundColor: "#E6F4EA" }}
        >
          <p className="text-xl font-semibold">Total Employee</p>
          <p className="text-4xl font-bold">24</p>
        </div>
      </div>

      <div className="flex gap-6 mt-6">
        {/* First Card */}
        <div className="w-[360px] h-[180px] p-6 rounded-[12px] border border-gray-300 shadow flex flex-col justify-between">
          {/* Top: Title and Numbers */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold text-[#1E1E1E]">PayRoll</p>
              <p className="text-4xl t-2 font-bold text-[#1E1E1E] mt-1">48</p>
              <p className="text-sm t-2 text-[#555] mt-2">12 Men</p>
              <p className="text-sm text-[#555]">12 Women</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="relative w-[80px] h-[50px]">
                <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
                  <defs>
                    <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF5A5F" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#FF5A5F" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 30 C20 10, 40 35, 80 20"
                    stroke="#FF5A5F"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M0 30 C20 10, 40 35, 80 20 L80 50 L0 50 Z"
                    fill="url(#grad1)"
                  />
                </svg>
                <div className="absolute -top-1 left-[30px] text-[10px] text-[#FF5A5F] font-semibold flex items-center gap-1">
                  +2% <span className="text-[10px]">↑</span>
                </div>
              </div>
              <div className="mt-1 bg-[#FDEFEA] text-[#FF5A5F] text-[10px] px-2 py-[2px] rounded-md font-medium">
                +2% Past month
              </div>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-[360px] h-[180px] p-7 rounded-[12px] border border-gray-300 shadow flex flex-col justify-between">
          {/* Top: Title and Numbers */}
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-semibold text-[#1E1E1E]">
                Task Request
              </p>
              <p className="text-4xl t-2 font-bold text-[#1E1E1E] mt-1">16</p>
              <p className="text-sm t-2 text-[#555] mt-2">6 Men</p>
              <p className="text-sm text-[#555]">10 Women</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="relative w-[80px] h-[50px]">
                <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
                  <defs>
                    <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF5A5F" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#FF5A5F" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 30 C20 15, 40 30, 80 20"
                    stroke="#FF5A5F"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M0 30 C20 15, 40 30, 80 20 L80 50 L0 50 Z"
                    fill="url(#grad2)"
                  />
                </svg>
                <div className="absolute -top-1 left-[30px] text-[10px] text-[#FF5A5F] font-semibold flex items-center gap-1">
                  +5% <span className="text-[10px]">↑</span>
                </div>
              </div>
              <div className="mt-1 bg-[#FDEFEA] text-[#FF5A5F] text-[10px] px-2 py-[2px] rounded-md font-medium">
                +5% Past month
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" top-[532px] left-[293px] w-[640px] bg-white rounded-[10px] shadow p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-base font-semibold">Announcement</p>
          <p className="text-sm text-gray-500">Today, 13 Sep 2021</p>
        </div>

        {/* Announcement 1 */}
        <div className="flex justify-between items-center p-4 mb-3 rounded-md border border-gray-300">
          <div>
            <p className="text-sm font-medium">
              Outing schedule for every department
            </p>
            <p className="text-xs text-gray-500">5 Minutes ago</p>
          </div>
          <img src={dot} alt="menu icon" className="w-5 h-5" />
        </div>

        {/* Announcement 2 */}
        <div className="flex justify-between items-center p-4 mb-3 rounded-md border border-gray-300 shadow-sm">
          <div>
            <p className="text-sm font-medium">Meeting HR Department</p>
            <p className="text-xs text-gray-500">Yesterday, 12:30 PM</p>
          </div>
          <img src={dot} alt="menu icon" className="w-4 h-4" />
        </div>

        {/* Announcement 3 */}
        <div className="flex justify-between items-start p-4 mb-3 rounded-md border border-gray-300 shadow-sm">
          <div>
            <p className="text-sm font-medium">
              IT Department need two more talents for UX/UI Designer position
            </p>
            <p className="text-xs text-gray-500">Yesterday, 09:15 AM</p>
          </div>
          <img src={dot} alt="menu icon" className="w-4 h-4 mt-1" />
        </div>

        {/* Footer Link */}
        <div className="mt-4 pt-3 text-center text-sm font-medium text-red-600 cursor-pointer">
          See All Announcements
        </div>
      </div>
    </div>
  );
};

export default Cards;
