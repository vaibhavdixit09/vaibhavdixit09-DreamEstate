import React from "react";
import { Link } from "react-router-dom"; // Make sure to adjust this import based on your router setup

const Footer = () => {
  return (
    <footer className=" bg-slate-100 py-3  border-t-2 border-slate-200">
      <div className=" text-xs sm:text-base px-4 sm:px-10  mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex items-center">
          <span className="sm:text-base  text-xs text-slate-500  font-bold">
            Dream<span className=" text-slate-700">Estate</span>
          </span>
        </div>

        {/* Links on the right */}
        <div className="flex space-x-4 text-gray-500 justify-between">
          <p className="hover:text-gray-600">
            Copyrights &copy; vaibhav dixit 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
