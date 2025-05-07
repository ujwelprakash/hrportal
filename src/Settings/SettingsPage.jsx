import React from 'react'
import Header from "../Header/Header";
import SideBar from "../sideBar/SideBar";


const SettingsPage = () => {
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
        <div className="p-6 h-full w-full flex items-center justify-center bg-gray-50">
          <div className="bg-white rounded-xl shadow-lg p-10 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              SettingsPage
            </h1>
            <p className="text-gray-600 text-lg">
              This page is coming soon. We're working on something awesome!
            </p>
            <div className="mt-6">
              <span className="inline-block animate-pulse text-sm text-gray-400">
                Loading content...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage
