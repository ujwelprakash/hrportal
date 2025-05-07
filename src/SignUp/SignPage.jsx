import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import sign from "../assets/sign.jpg";
import logo from "../assets/frame.svg";
import companyIcon from "../assets/briefcase.jpg";
import passwordIcon from "../assets/lock.jpg";

function SignPage() {
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("user") === "true";
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (company.trim() && password.trim()) {
      sessionStorage.setItem("user", "true");
      navigate("/dashboard");
    } else {
      setError("Please enter both company and password");
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left: Login Form */}
      <div className="bg-[#F6F6F6] w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 py-8">
        <div className="mb-6 sm:mb-8 text-left w-full max-w-md">
          <img src={logo} alt="Logo" className="mb-8 h-12 sm:h-16 md:h-20" />
          <p className="font-poppins font-bold leading-tight text-3xl sm:text-4xl md:text-5xl">
            Sign into
            <br />
            <span className="text-lg sm:text-xl md:text-2xl font-normal">
              Your Account
            </span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
          <div className="relative">
            <img
              src={companyIcon}
              alt="Company Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
            />
            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="w-full pl-10 p-2 border border-gray-300 rounded bg-white"
            />
          </div>

          <div className="relative">
            <img
              src={passwordIcon}
              alt="Password Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full pl-10 p-2 border border-gray-300 rounded bg-white"
            />
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              id="remember"
              className="mr-2"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#E9374A] text-white py-2 rounded hover:bg-red-600 transition"
            disabled={!isChecked}
          >
            Sign in
          </button>

          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 h-[300px] md:h-full">
        <img src={sign} alt="Sign In" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default SignPage;
