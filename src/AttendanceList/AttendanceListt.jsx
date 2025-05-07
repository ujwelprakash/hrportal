import React, { useState } from "react";
import { MoreVertical } from "lucide-react";

const dummyData = [
  {
    name: "MAGHESH",
    email: "magesh@Dotcod.in",
    joinDate: "6/3/22",
    designation: "Software Engineer",
    status: "Confirmed",
  },
  {
    name: "Tesla",
    email: "Rsahul1@Dotcod.in",
    joinDate: "12/2/22",
    designation: "Software Engineer",
    status: "Probation",
  },
  {
    name: "GM",
    email: "gm@Dotcod.in",
    joinDate: "4/19/23",
    designation: "Software Engineer",
    status: "Confirmed",
  },
  {
    name: "AARP",
    email: "aarp@Dotcod.in",
    joinDate: "1/2/23",
    designation: "Software Engineer",
    status: "Probation",
  },
  {
    name: "Disney",
    email: "@Dotcod.in",
    joinDate: "9/4/23",
    designation: "Software Engineer",
    status: "Confirmed",
  },
  {
    name: "Prime Therapeutics",
    email: "@Dotcod.in",
    joinDate: "6/3/22",
    designation: "Software Engineer",
    status: "Probation",
  },
  {
    name: "Match.com",
    email: "CODE@Dotcod.in",
    joinDate: "12/2/22",
    designation: "Software Engineer",
    status: "Confirmed",
  },
  {
    name: "Chevy",
    email: "@Dotcod.in",
    joinDate: "4/19/23",
    designation: "Software Engineer",
    status: "Probation",
  },
];

const AttendanceListt = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(dummyData);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6 bg-white rounded-xl shadow-sm w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-3">
        <h2 className="text-xl md:text-2xl font-semibold text-black">
          Attendances
        </h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-black text-sm rounded-md">
            + Import Excel
          </button>
          <button className="px-4 py-2 bg-black text-white text-sm rounded-md">
            + Add Employee
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search employee..."
          className="w-full p-2 pl-4 border border-gray-300 rounded-md text-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] table-auto border-collapse">
          <thead className="bg-gray-100 text-gray-600 text-left text-sm">
            <tr>
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Join Date</th>
              <th className="py-2 px-3">Designation</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3 text-right">Options</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-3">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.email}</div>
                </td>
                <td className="py-3 px-3">{item.joinDate}</td>
                <td className="py-3 px-3">{item.designation}</td>
                <td className="py-3 px-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-3 text-right">
                  <MoreVertical className="text-gray-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-4 text-sm text-gray-600">
        Total: {filteredData.length} Employees
      </div>
    </div>
  );
};

export default AttendanceListt;
