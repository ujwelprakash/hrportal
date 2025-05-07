import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus, ChevronDown, MoreHorizontal } from "lucide-react";
import * as XLSX from "xlsx";

const Data = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [importedEmployees, setImportedEmployees] = useState([]);
  const [sessionEmployees, setSessionEmployees] = useState([]);
  const [sortByDateAsc, setSortByDateAsc] = useState(true);
  const [sortedEmployees, setSortedEmployees] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(sessionStorage.getItem("employees")) || [];
    setSessionEmployees(saved);
  }, []);

  const initialEmployees = [
    {
      id: "11D001",
      name: "MAGHESH",
      email: "maghesh@Dotcod.in",
      joinDate: "3/12/23",
      designation: "Software Engineer",
      status: "Confirmed",
    },
    {
      id: "11D002",
      name: "Tesla",
      email: "Rsahul@Dotcod.in",
      joinDate: "1/12/23",
      designation: "Software Engineer",
      status: "Probation",
    },
    {
      id: "11D003",
      name: "GM",
      email: "gm@Dotcod.in",
      joinDate: "2/12/23",
      designation: "Software Engineer",
      status: "Confirmed",
    },
  ];

  const allEmployees = [
    ...initialEmployees,
    ...importedEmployees,
    ...sessionEmployees,
  ];

  useEffect(() => {
    setSortedEmployees(allEmployees);
  }, [searchQuery, importedEmployees, sessionEmployees]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortByDate = () => {
    const sorted = [...sortedEmployees].sort((a, b) => {
      const dateA = new Date(a.joinDate);
      const dateB = new Date(b.joinDate);
      return sortByDateAsc ? dateA - dateB : dateB - dateA;
    });
    setSortedEmployees(sorted);
    setSortByDateAsc(!sortByDateAsc);
  };

  const filteredEmployees = sortedEmployees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);

      const formatted = data.map((item, index) => ({
        id: item.ID || `11D00${index + 4}`,
        name: item.Name || "-",
        email: item.Email || "-",
        joinDate: item["Join Date"] || "-",
        designation: item.Designation || "-",
        status: item.Status || "Pending",
      }));

      setImportedEmployees(formatted);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div className="p-4 md:p-10 bg-gray-50 min-h-screen">
      {/* Heading and Buttons */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-xl font-semibold">Employee</h2>

        <div className="flex gap-2 items-center flex-wrap">
          <label className="flex items-center border border-black px-4 py-2 rounded text-black hover:bg-gray-100 cursor-pointer">
            <Plus size={16} className="mr-2" />
            Import Excel
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleExcelUpload}
              className="hidden"
            />
          </label>

          <Link
            to="/employee/Create"
            className="flex items-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            <Plus size={16} className="mr-2" />
            Add Employee
          </Link>
        </div>
      </div>

      {/* Main Box */}
      <div className="w-full border border-gray-300 rounded-[20px] bg-white p-4 md:p-6">
        <div className="p-4 md:p-6 bg-white rounded-xl border border-gray-200">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h2 className="text-xl font-semibold">
              Employee{" "}
              <span className="text-gray-500">{filteredEmployees.length}</span>
            </h2>
            <input
              type="text"
              placeholder="Search by name or email..."
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none w-full md:w-80"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* Table Header & Body */}
          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div className="grid grid-cols-6 gap-4 px-4 py-2 border-b font-medium text-sm text-gray-600">
                <div className="col-span-1">
                  <input type="checkbox" />
                </div>
                <div className="flex items-center gap-2">Name</div>
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={handleSortByDate}
                >
                  Join Date <ChevronDown size={14} />
                </div>
                <div className="flex items-center gap-2">Designation</div>
                <div className="flex items-center gap-2">Status</div>
                <div className="flex items-center gap-2">Options</div>
              </div>

              {/* Table Body */}
              {filteredEmployees.map((emp, index) => (
                <div
                  key={index}
                  className="grid grid-cols-6 gap-4 px-4 py-3 border-b items-center text-sm"
                >
                  <div className="col-span-1">
                    <input type="checkbox" />
                  </div>
                  <div>
                    <p className="font-semibold">{emp.name}</p>
                    <p className="text-gray-500 text-xs">{emp.email}</p>
                  </div>
                  <div>{emp.joinDate}</div>
                  <div>{emp.designation}</div>
                  <div>{emp.status}</div>
                  <div className="text-right">
                    <MoreHorizontal className="cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
