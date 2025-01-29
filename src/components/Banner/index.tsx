import React from "react";
import { ReactComponent as BannerScribble } from "../../assets/banner-scribble.svg"; // Import your SVG
import SearchBar from "../SearchBar";

const Banner: React.FC = () => {
  return (
    <div className="bg-[#F8F8FD] py-12 px-20 w-full">
      <div className="max-w-3xl  text-left">
        {/* Heading Section */}
        <div className="space-y-2 leading-18">
          <h6 className="text-[72px]   font-semibold text-[#25324B]">Discover</h6>
          <h6 className="text-[72px]  font-semibold text-[#25324B]">more than</h6>
          <h6 className="text-[72px]  font-semibold text-[#26A4FF]">5000+ Jobs</h6>
        </div>

        {/* SVG Icon */}
        <div className="">
          <BannerScribble className="h-24 w-96" />
        </div>

        {/* Paragraph Text */}
        <div className="mt-2 text-lg font-epilogue font-normal text-[#515B6F] opacity-70">
          <p>Great platform for the job seeker that searching for new career heights and passionate about startups.</p>
        </div>
        <div className="mt-8">
            < SearchBar />
        </div>
        <div className="mt-4">
          <p className="text-[#202430] font-normal text-base">Popular: <span className="font-medium">UI Designer, UX Researcher, Android, Admin</span></p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
