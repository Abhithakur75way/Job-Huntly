import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg"; 

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center bg-[#F8F8FD] justify-between py-4 px-20 w-full">
      {/* Logo and Navigation Section */}
      <div className="flex items-center space-x-2">
        <LogoIcon className="h-8 w-8" /> {/* Using SVG as a React Component */}
        <h1 className="text-xl font-redhatdisplay font-semibold text-[#25324B]">Job Huntly</h1>
        <div className="flex space-x-6 ml-20 text-[#515B6F] -mt-2">
          <a href="#" className="hover:text-[#4640DE]">Find Jobs</a>
          <a href="#" className="hover:text-[#4640DE]">Browse Companies</a>
        </div>
      </div>

      {/* Authentication Section (right side) */}
      <div className="flex items-center space-x-4">
        <a 
          href="#" 
          className="text-[#4640DE] px-4 py-2 text-base font-bold hover:text-[#3A34B4]"
        >
          Login
        </a>
        <div className="h-6 w-px bg-[#D6DDEB]"></div>
        <a 
          href="#" 
          className="px-4 py-2 bg-[#4640DE] text-[#FFFFFF] text-base font-bold hover:bg-[#3A34B4] transition"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
