import React from "react";

const StatCard = ({ title, value, menCount, womenCount, trend }) => {
  return (
    <div className="w-[360px] h-[200px] p-6 rounded-[12px] border border-gray-200 shadow-sm bg-white flex flex-col justify-between">
      {/* Title */}
      <p className="text-lg font-semibold text-[#1E1E1E]">{title}</p>

      {/* Value */}
      <p className="text-4xl font-bold text-[#1E1E1E]">{value}</p>

      {/* Breakdown */}
      <div className="text-sm text-[#6B7280]">
        <p>{menCount} Men</p>
        <p>{womenCount} Women</p>
      </div>

      {/* Trend Line & Info */}
      <div className="flex justify-between items-end">
        <div className="h-12 w-24 relative">
          {/* Dummy curved upward line */}
          <svg className="w-full h-full" viewBox="0 0 100 50">
            <path
              d="M0,40 Q25,10 50,25 T100,10"
              fill="none"
              stroke="#EF4444"
              strokeWidth="2"
            />
          </svg>
          {/* Trend percentage above the line */}
          <p className="absolute top-[-12px] right-1 text-xs text-red-500 font-semibold">
            +{trend?.value}%
          </p>
        </div>

        {/* Period */}
        <div className="bg-[#FCE7E7] text-red-600 px-3 py-1 text-xs font-medium rounded-md">
          +{trend?.value}% {trend?.period}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
