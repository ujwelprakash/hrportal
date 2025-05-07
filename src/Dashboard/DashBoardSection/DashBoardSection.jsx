import React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import birthday from "../../assets/img.jpg";
import unsplashGrey from "../../assets/unsplashgrey.png";
import dot from "../../assets/framedot.png";

const DashboardSection = () => {
  return (
    <div className="w-full max-w-[1424px] mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column: Stats + Announcements */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Top Stat Cards */}
          <div className="flex gap-4 flex-wrap">
            {[
              { title: "Leave Request", value: "24", bg: "#FFEFE7" },
              { title: "Attendance", value: "10", bg: "#E7F5FF" },
              { title: "Total Employees", value: "24", bg: "#F3E8FF" },
            ].map((card, index) => (
              <div
                key={index}
                className="w-full sm:w-[220px] h-[120px] p-4 rounded-[12px] shadow-md flex flex-col justify-between"
                style={{ backgroundColor: card.bg }}
              >
                <p className="text-[16px] font-semibold text-[#1E1E1E]">
                  {card.title}
                </p>
                <p className="text-[36px] font-bold text-[#1E1E1E]">
                  {card.value}
                </p>
              </div>
            ))}
          </div>

          {/* Payroll & Task Request */}
          <div className="flex gap-4 flex-wrap">
            {[
              {
                title: "PayRoll",
                value: "216",
                men: "12 Men",
                women: "12 Women",
                change: "+2%",
                chartPath: "M0 30 C20 10, 40 35, 80 20",
              },
              {
                title: "Task Request",
                value: "16",
                men: "6 Men",
                women: "10 Women",
                change: "+5%",
                chartPath: "M0 30 C20 15, 40 30, 80 20",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[340px] h-[180px] p-6 rounded-[12px] border border-gray-200 shadow flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-semibold text-[#1E1E1E]">
                      {card.title}
                    </p>
                    <p className="text-4xl font-bold text-[#1E1E1E] mt-1">
                      {card.value}
                    </p>
                    <p className="text-sm text-[#555] mt-2">{card.men}</p>
                    <p className="text-sm text-[#555]">{card.women}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="relative w-[80px] h-[50px]">
                      <svg
                        width="80"
                        height="50"
                        viewBox="0 0 80 50"
                        fill="none"
                      >
                        <defs>
                          <linearGradient
                            id={`grad${idx}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="0%"
                              stopColor="#FF5A5F"
                              stopOpacity="0.2"
                            />
                            <stop
                              offset="100%"
                              stopColor="#FF5A5F"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                        <path
                          d={card.chartPath}
                          stroke="#FF5A5F"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path
                          d={`${card.chartPath} L80 50 L0 50 Z`}
                          fill={`url(#grad${idx})`}
                        />
                      </svg>
                      <div className="absolute -top-1 left-[30px] text-[10px] text-[#FF5A5F] font-semibold flex items-center gap-1">
                        {card.change} <span className="text-[10px]">↑</span>
                      </div>
                    </div>
                    <div className="mt-1 bg-[#FDEFEA] text-[#FF5A5F] text-[10px] px-2 py-[2px] rounded-md font-medium">
                      {card.change} Past month
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Announcements */}
          <div className="w-full bg-white rounded-[10px] shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <p className="text-base font-semibold">Announcement</p>
              <p className="text-sm text-gray-500">Today, 13 Sep 2021</p>
            </div>

            {[
              {
                title: "Outing schedule for every department",
                time: "5 Minutes ago",
              },
              { title: "Meeting HR Department", time: "Yesterday, 12:30 PM" },
              {
                title:
                  "IT Department need two more talents for UX/UI Designer position",
                time: "Yesterday, 09:15 AM",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-start p-4 mb-3 rounded-md border border-gray-200 shadow-sm"
              >
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.time}</p>
                </div>
                <img src={dot} alt="menu icon" className="w-4 h-4 mt-1" />
              </div>
            ))}

            <div className="mt-4 pt-3 text-center text-sm font-medium text-red-600 cursor-pointer">
              See All Announcements
            </div>
          </div>
        </div>

        {/* Right Column: Calendar & Birthdays */}
        <div className="w-full lg:w-[380px] flex flex-col gap-6">
          {/* Calendar */}
          <div className="p-4 bg-white rounded-lg shadow-md w-fit scale-[0.85] origin-top-left lg:scale-100">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar defaultValue={dayjs("2022-04-17")} />
            </LocalizationProvider>
          </div>

          {/* Birthday Calendar */}
          <div className="flex flex-col justify-center gap-4">
            <p className="text-lg font-semibold text-gray-700">
              Birthday Calendar
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {[birthday, unsplashGrey].map((img, idx) => (
                <div
                  key={idx}
                  className="w-full sm:w-[211px] h-[214px] border border-gray-200 rounded-[12px] p-4 flex flex-col items-center text-center shadow-sm"
                >
                  <img
                    src={img}
                    alt="birthday"
                    className="w-24 h-24 rounded-full object-cover mb-2"
                  />
                  <p className="text-sm font-semibold">Robert Whistable</p>
                  <p className="text-xs text-gray-600">Product Manager</p>
                  {idx === 0 && (
                    <p className="text-xs text-gray-500">15 Feb 1998</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;
