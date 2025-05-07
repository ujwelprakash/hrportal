import React, { useState, useEffect, useRef } from "react";
import { Check, X, Eye } from "lucide-react";

// Dropdown component for actions
const ActionDropdown = ({ onApprove, onReject, onView }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="text-gray-500 hover:text-black px-2"
      >
        ⋮
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border rounded shadow-lg z-50">
          <ul className="text-sm">
            <li
              onClick={onApprove}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-green-600 flex items-center gap-2"
            >
              <Check className="w-4 h-4" /> Approve Leave
            </li>
            <li
              onClick={onReject}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600 flex items-center gap-2"
            >
              <X className="w-4 h-4" /> Reject Leave
            </li>
            <li
              onClick={onView}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 flex items-center gap-2"
            >
              <Eye className="w-4 h-4" /> View Details
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

// Card summary data
const cards = [
  {
    label: "Casual Leave",
    count: "04",
    info: "+2% Jan month",
    bg: "bg-orange-100",
  },
  {
    label: "Emergency Leave",
    count: "06",
    info: "+2% Jan month",
    bg: "bg-pink-100",
  },
  {
    label: "Total Leave Jan",
    count: "10",
    info: "+2% Jan month",
    bg: "bg-blue-100",
  },
  {
    label: "Today Leave",
    count: "02",
    info: "23/01 Monday",
    bg: "bg-purple-100",
  },
];

// Initial leave request list
const initialLeaves = [
  {
    name: "MAGHESH",
    email: "magesh@dotcod.in",
    date: "6/3/22",
    type: "Casual Leave",
    reason: "Not Well",
    days: "01",
    status: "Pending",
  },
  {
    name: "Tesla",
    email: "Rsahull@dotcod.in",
    date: "12/2/22 - 16/02/22",
    type: "Sick Leave",
    reason: "Not Well",
    days: "04",
    status: "Approved",
  },
  {
    name: "GM",
    email: "gm@dotcod.in",
    date: "4/19/23",
    type: "Casual Leave",
    reason: "Sick leave",
    days: "01",
    status: "Approved",
  },
  {
    name: "AARP",
    email: "aarp@dotcod.in",
    date: "1/2/23",
    type: "Sick Leave",
    reason: "Marriage Function",
    days: "01",
    status: "Pending",
  },
  {
    name: "Disney",
    email: "@dotcod.in",
    date: "9/4/23",
    type: "Sick Leave",
    reason: "Marriage Function",
    days: "01",
    status: "Approved",
  },
  {
    name: "Prime Therapeutics",
    email: "@dotcod.in",
    date: "12/2/22 - 16/02/22",
    type: "Sick Leave",
    reason: "Marriage Function",
    days: "03",
    status: "Approved",
  },
];

const AttendanceRequest = () => {
  const [leaves, setLeaves] = useState(initialLeaves);
  const [searchTerm, setSearchTerm] = useState("");

  const handleApprove = (name) => {
    setLeaves((prev) =>
      prev.map((l) => (l.name === name ? { ...l, status: "Approved" } : l))
    );
  };

  const handleReject = (name) => {
    setLeaves((prev) =>
      prev.map((l) => (l.name === name ? { ...l, status: "Rejected" } : l))
    );
  };

  const handleView = (name) => {
    const leave = leaves.find((l) => l.name === name);
    alert(
      `Name: ${leave.name}\nType: ${leave.type}\nReason: ${leave.reason}\nDays: ${leave.days}`
    );
  };

  const filteredLeaves = leaves
    .filter((leave) =>
      leave.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-gray-50 min-h-screen space-y-6">
      {/* Cards */}
      <div className="flex flex-wrap gap-4 justify-start">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`w-full sm:w-[200px] p-4 rounded-xl shadow-sm ${card.bg} flex flex-col`}
          >
            <h3 className="text-base font-medium">{card.label}</h3>
            <p className="text-3xl font-bold mt-2">{card.count}</p>
            <span className="text-xs text-gray-600 mt-2">{card.info}</span>
          </div>
        ))}
      </div>

      {/* Leave Requests Table */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
          <h2 className="text-lg font-semibold">
            Leave Requests{" "}
            <span className="text-gray-400">({filteredLeaves.length})</span>
          </h2>
          <input
            type="text"
            placeholder="Search name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-3 py-2 text-sm w-full sm:w-60"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Request Date</th>
                <th className="p-3">Leave Type</th>
                <th className="p-3">Reason</th>
                <th className="p-3">Days</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeaves.map((leave, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <div className="font-medium">{leave.name}</div>
                    <div className="text-xs text-gray-500">{leave.email}</div>
                  </td>
                  <td className="p-3">{leave.date}</td>
                  <td className="p-3">{leave.type}</td>
                  <td className="p-3 truncate max-w-xs">{leave.reason}</td>
                  <td className="p-3">{leave.days}</td>
                  <td className="p-3">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${
                        leave.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : leave.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {leave.status === "Approved" && (
                        <Check className="w-3 h-3" />
                      )}
                      {leave.status === "Rejected" && <X className="w-3 h-3" />}
                      {leave.status === "Pending" && (
                        <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                      )}
                      {leave.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <ActionDropdown
                      onApprove={() => handleApprove(leave.name)}
                      onReject={() => handleReject(leave.name)}
                      onView={() => handleView(leave.name)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AttendanceRequest;
