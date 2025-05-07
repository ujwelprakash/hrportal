import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "11D012",
    name: "",
    email: "",
    mobile: "",
    joinDate: "",
    status: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    isChallenged: "Yes",
    bloodGroup: "O+",
    personalEmail: "",
    department: "",
    designation: "",
  });

  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);

  const departmentData = [
    { id: 1, name: "Engineering" },
    { id: 2, name: "Marketing" },
    { id: 3, name: "HR" },
  ];

  const designationData = {
    Engineering: ["Software Engineer", "QA Engineer", "DevOps Engineer"],
    Marketing: ["Marketing Executive", "Content Strategist"],
    HR: ["HR Manager", "Recruiter"],
  };

  useEffect(() => {
    setDepartments(departmentData);
  }, []);

  useEffect(() => {
    if (formData.department) {
      setDesignations(designationData[formData.department] || []);
    } else {
      setDesignations([]);
    }
  }, [formData.department]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "department" && { designation: "" }),
    }));
  };

  const handleSave = () => {
    const requiredFields = [
      "name",
      "email",
      "mobile",
      "joinDate",
      "status",
      "dob",
      "gender",
      "maritalStatus",
      "personalEmail",
      "department",
      "designation",
    ];

    const isValid = requiredFields.every((field) => formData[field]);

    if (!isValid) {
      alert("Please fill out all required fields before saving.");
      return;
    }

    const existing = JSON.parse(sessionStorage.getItem("employees")) || [];
    const newEmployee = {
      id: formData.id,
      name: formData.name,
      email: formData.email,
      joinDate: formData.joinDate,
      mobile: formData.mobile,
      designation: formData.designation,
      department: formData.department,
      status: formData.status,
    };
    existing.push(newEmployee);
    sessionStorage.setItem("employees", JSON.stringify(existing));
    navigate("/employee/List");
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen text-sm">
      <h2 className="text-lg font-semibold mb-4">Add details of an employee</h2>

      {/* Employee Info Card */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Name */}
          <div>
            <label className="block font-medium mb-1">
              Employee Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Employee Name"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          {/* ID */}
          <div>
            <label className="block font-medium mb-1">Employee Number</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              readOnly
              className="w-full border px-3 py-2 rounded bg-gray-100"
            />
          </div>
          {/* Join Date */}
          <div>
            <label className="block font-medium mb-1">
              Date of Joining <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="joinDate"
              value={formData.joinDate}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block font-medium mb-1">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          {/* Mobile */}
          <div>
            <label className="block font-medium mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          {/* Status */}
          <div>
            <label className="block font-medium mb-1">
              Employee Status <span className="text-red-500">*</span>
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select Status</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Probation">Probation</option>
            </select>
          </div>
        </div>
      </div>

      {/* Personal Details */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-200">
        <h3 className="text-base font-semibold mb-3">Personal Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium mb-1">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">
              Marital Status <span className="text-red-500">*</span>
            </label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select Status</option>
              <option value="Married">Married</option>
              <option value="Single">Single</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">
              Is Physically Challenged
            </label>
            <select
              name="isChallenged"
              value={formData.isChallenged}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Blood Group</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="O+">O+</option>
              <option value="A+">A+</option>
              <option value="B+">B+</option>
              <option value="AB+">AB+</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">
              Personal Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="personalEmail"
              value={formData.personalEmail}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        </div>
      </div>

      {/* Department & Designation */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">
              Department <span className="text-red-500">*</span>
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.id} value={dept.name}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">
              Designation <span className="text-red-500">*</span>
            </label>
            <select
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="">Select Designation</option>
              {designations.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-3">
        <button
          onClick={() => navigate("/")}
          className="border border-gray-300 px-4 py-2 rounded w-full sm:w-auto"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-black text-white px-4 py-2 rounded w-full sm:w-auto"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;
