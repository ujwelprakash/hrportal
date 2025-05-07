import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import groupImg from "../assets/Group.png";
import notificationImg from "../assets/ic_round-notifications.jpg";
import unsplash from "../assets/unsplash.png";
import scrolls from "../assets/scrolls.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef();
  const mobileDropdownRef = useRef();
  const navigate = useNavigate();

  const userSession = sessionStorage.getItem("user");
  const user =
    typeof userSession === "string" && userSession !== "true"
      ? JSON.parse(userSession)?.company || "Admin"
      : "Admin";

  useEffect(() => {
    function handleClickOutside(event) {
      const isClickOutsideDesktop =
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target);
      const isClickOutsideMobile =
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target);

      if (isClickOutsideDesktop && isClickOutsideMobile) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    sessionStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  const renderDropdown = () => (
    <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-50">
      <ul className="text-sm font-poppins">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
        <li
          onClick={handleSignOut}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        >
          Sign Out
        </li>
      </ul>
    </div>
  );

  return (
    <div className="w-full max-w-screen-xl px-2 sm:px-4 md:px-6 py-2 sm:py-3 flex items-center justify-between bg-white relative">
      {/* Left Section (Search Bar) */}
      <div className="flex items-center">
        <div className="relative w-[120px] sm:w-[160px] md:w-[200px]">
          <input
            type="text"
            placeholder="Search..."
            className="h-[32px] w-full pl-3 pr-12 border border-gray-300 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ml-12 sm:ml-0"
          />
          <svg
            className="hidden sm:block absolute right-4 sm:right-6 md:right-8 lg:right-10 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </div>
      </div>

      {/* Right Section (Icons + Avatar + Dropdown) */}
      <div
        className="flex items-center space-x-2 sm:space-x-3 relative"
        ref={desktopDropdownRef}
      >
        <img
          src={notificationImg}
          alt="Notifications"
          className="h-4 w-4 sm:h-5 sm:w-5"
        />
        <img src={groupImg} alt="Group" className="h-4 w-4 sm:h-5 sm:w-5" />
        <img
          src={unsplash}
          alt="User Avatar"
          className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
        />
        <p className="font-poppins font-medium text-xs sm:text-sm hidden lg:block">
          {user}
        </p>
        <img
          src={scrolls}
          alt="Dropdown"
          className="h-5 w-5 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
        />
        {isDropdownOpen && renderDropdown()}
      </div>
    </div>
  );
};

export default Header;
