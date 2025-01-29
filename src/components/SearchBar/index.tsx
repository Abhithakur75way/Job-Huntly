import React from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa"; 

const SearchBar: React.FC = () => {
  return (
    <div className="bg-white p-4  shadow-sm flex items-center space-x-6 w-full">
      {/* Search Section */}
      <div className="flex items-center space-x-2 flex-1">
        <FaSearch className="text-[#515B6F]" />
        <input
          type="text"
          placeholder="Job title or keyword"
          className="py-2 pl-3 pr-3 border-b-2 border-[#D6DDEB] focus:outline-none w-full"
        />
      </div>

      {/* City Section (Dropdown) */}
      <div className="flex items-center space-x-2 flex-1">
        <FaMapMarkerAlt className="text-[#515B6F]" />
        <select
          className="py-2 pl-3 pr-3 border-b-2 border-[#D6DDEB] text-[#515B6F]  focus:outline-none w-full"
          defaultValue=""
        >
          <option value="" disabled>
            Select a city
          </option>
          <option value="new-york">New York</option>
          <option value="los-angeles">Los Angeles</option>
          <option value="chicago">Chicago</option>
          <option value="san-francisco">San Francisco</option>
        </select>
      </div>

      {/* Search Button Section */}
      <div className="flex items-center">
        <button className="px-10 py-3 bg-[#4640DE] text-white text-lg font-semibold  hover:bg-[#3A34B4] transition">
          Search my Job
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
