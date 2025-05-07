import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignPage from "./SignUp/SignPage";
import Dash from "./Dashboard/Dash";
import PayrollPage from "./Payroll/PayrollPage";
import TaskPage from "./Task/TaskPage";
import AnnouncementPage from "./Announcement/AnnouncementPage";
import SupportPage from "./Support/SupportPage";
import SettingsPage from "./Settings/SettingsPage";
import PrivateRoute from "./components/privateRoutes";
import AddEmployee from "./EmployeeCreate/AddEmployee";

// New components
import EmployeeList from "./EmployeeList/EmployeeList";
import EmployeeCreate from "./EmployeeCreate/EmployeeCreate";
import EmployeePage from "./Employee/EmployeePage";

import AttendancePage from "./Attendance/AttendancePage";
import Attendanceleave from "./Attendanceleave/Attendanceleave";
import AttendanceList from "./AttendanceList/AttendanceList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignPage />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dash />
          </PrivateRoute>
        }
      />
      <Route
        path="/employee"
        element={
          <PrivateRoute>
            <EmployeePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/employee/List"
        element={
          <PrivateRoute>
            <EmployeeList />
          </PrivateRoute>
        }
      />
      <Route
        path="/employee/Create"
        element={
          <PrivateRoute>
            <EmployeeCreate />
          </PrivateRoute>
        }
      />
      <Route
        path="/add-employee"
        element={
          <PrivateRoute>
            <AddEmployee />
          </PrivateRoute>
        }
      />
      <Route
        path="/edit-employee/:id"
        element={
          <PrivateRoute>
            <EmployeeCreate />
          </PrivateRoute>
        }
      />
      <Route
        path="/attendance"
        element={
          <PrivateRoute>
            <AttendancePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/attendance/Leave"
        element={
          <PrivateRoute>
            <Attendanceleave />
          </PrivateRoute>
        }
      />
      <Route
        path="/attendance/List"
        element={
          <PrivateRoute>
            <AttendanceList />
          </PrivateRoute>
        }
      />
      <Route
        path="/payroll"
        element={
          <PrivateRoute>
            <PayrollPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/task"
        element={
          <PrivateRoute>
            <TaskPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/announcement"
        element={
          <PrivateRoute>
            <AnnouncementPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/support"
        element={
          <PrivateRoute>
            <SupportPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <SettingsPage />
          </PrivateRoute>
        }
      />

      {/* Redirect unknown routes to login */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
