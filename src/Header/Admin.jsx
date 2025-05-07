// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import groupImg from "../assets/Group.png";
// import notificationImg from "../assets/ic_round-notifications.jpg";
// import unsplash from "../assets/unsplash.png";
// import frameten from "../assets/frameten.png";

// const Admin = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef();
//   const navigate = useNavigate();

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleSignOut = () => {
//     // Clear authentication from sessionStorage
//     sessionStorage.removeItem("token"); // Clear sessionStorage token
//     // Optionally, you can also clear user information or other session data if needed.
//     sessionStorage.removeItem("user"); // or any other relevant session data
//     // Redirect to sign in page
//     navigate("/");
//   };

//   return (
//     <div className="relative flex items-center space-x-6">
//       <img src={notificationImg} alt="Notifications" className="h-5 w-5" />
//       <img src={groupImg} alt="Group" className="h-5 w-5" />
//       <img src={unsplash} alt="unsplash" className="h-8 w-8 rounded-2xl" />
//       <p className="font-poppins font-medium text-[16px] leading-[24px] tracking-[0] -ml-4">
//         Admirra John
//       </p>

//       {/* Profile dropdown trigger */}
//       <div ref={dropdownRef} className="relative -ml-4">
//         <img
//           src={frameten}
//           alt="frame"
//           className="h-6 w-6 cursor-pointer"
//           onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//         />

//         {isDropdownOpen && (
//           <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-50">
//             <ul className="text-sm font-poppins">
//               <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
//                 Profile
//               </li>
//               <li
//                 onClick={handleSignOut}
//                 className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//               >
//                 Sign Out
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Admin;
