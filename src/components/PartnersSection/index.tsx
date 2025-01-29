import React from "react";
import { ReactComponent as AMD } from "../../assets/amd-logo-1.svg";
import { ReactComponent as Intel } from "../../assets/intel.svg";
import { ReactComponent as Talkit } from "../../assets/talkit.svg";
import { ReactComponent as Tesla } from "../../assets/tesla.svg";
import { ReactComponent as Vodafone } from "../../assets/vodafone-logo.svg";
type Props = {};

 const PartnerSection = (props: Props) => {
  return (
    <div className="px-20 mb-10 mt-10 mx-auto flex flex-col gap-y-6  epilogue-400 text-gray-500">
      <p>Companies we helped grow</p>
      <div className="flex justify-between items-center ">
        <Vodafone />
        <Intel />
        <Tesla />
        <AMD />
        <Talkit />
      </div>
    </div>
  );
};
export default PartnerSection;