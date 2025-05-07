import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Default icons
import dashboard from "../assets/ic_dashboard.png";
import calendar from "../assets/ic_calendar.jpg";
import recruitment from "../assets/ic_recruitment.jpg";
import employee from "../assets/ic_employee.jpg";
import department from "../assets/ic_department.jpg";
import share from "../assets/share.jpg";
import support from "../assets/ic_support.jpg";
import setting from "../assets/ic_settings.jpg";
import burger from "../assets/ic_burgermenu.png";

// Red (active) icons
import dashboardRed from "../assets/reddashboard.png";
import calendarRed from "../assets/redcalendar.png";
import recruitmentRed from "../assets/redrecruitment.png";

const NavItem = ({ to, label, icon, iconActive, onClick, hasActiveIcon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center space-x-3 font-poppins font-medium text-[17px] leading-[22px] px-5 py-2 rounded-[6px] transition-colors duration-300 ${
        isActive ? "text-[#E9374A]" : "text-gray-800"
      } hover:bg-[#E9374A] hover:text-white`
    }
    onClick={onClick}
  >
    {({ isActive }) => (
      <>
        <img
          src={hasActiveIcon && isActive ? iconActive : icon}
          alt={label}
          className="h-[20px] w-[20px]"
        />
        <p>{label}</p>
      </>
    )}
  </NavLink>
);

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";
  }, [isSidebarOpen]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Mobile Topbar */}
      <div className="md:hidden flex justify-between items-center px-4 py-3 bg-white fixed w-12 top-0 z-50">
        <h2 className="text-[20px] font-bold hidden md:block">WeHR</h2>
        <button onClick={toggleSidebar}>
          <img src={burger} alt="menu" className="w-5 h-5" />
        </button>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static z-40 top-[48px] md:top-0 -left-100 w-[220px] md:w-[220px] h-[calc(100%-48px)] md:h-full bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 px-5 pt-5 pb-6`}
      >
        {/* Logo */}
        <h2 className="text-[28px] pl-8 font-poppins font-extrabold text-center md:text-left mb-6">
          WeHR
        </h2>

        {/* Primary Navigation */}
        <div className="space-y-1">
          <NavItem
            to="/dashboard"
            label="Dashboard"
            icon={dashboard}
            iconActive={dashboardRed}
            hasActiveIcon
            onClick={() => setIsSidebarOpen(false)}
          />
          <NavItem
            to="/employee"
            label="Employee"
            icon={recruitment}
            iconActive={recruitmentRed}
            hasActiveIcon
            onClick={() => setIsSidebarOpen(false)}
          />
          <NavItem
            to="/attendance"
            label="Attendance"
            icon={calendar}
            iconActive={calendarRed}
            hasActiveIcon
            onClick={() => setIsSidebarOpen(false)}
          />
          <NavItem
            to="/payroll"
            label="Pay Roll"
            icon={employee}
            onClick={() => setIsSidebarOpen(false)}
          />
          <NavItem
            to="/task"
            label="Task"
            icon={department}
            onClick={() => setIsSidebarOpen(false)}
          />
          <NavItem
            to="/announcement"
            label="Announcement"
            icon={share}
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>

        {/* Divider */}
        <hr className="my-5 border-t border-gray-300" />

        {/* Secondary Navigation */}
        <p className="text-xs font-poppins text-gray-400 uppercase px-4 mb-2">
          Other
        </p>
        <div className="space-y-1">
          <NavItem
            to="/support"
            label="Support"
            icon={support}
            onClick={() => setIsSidebarOpen(false)}
          />
          <NavItem
            to="/settings"
            label="Settings"
            icon={setting}
            onClick={() => setIsSidebarOpen(false)}
          />
        </div>
      </div>
    </>
  );
};

export default SideBar;
