import React from "react";
import { Badge } from "./ui/badge";

const LatestJobCards = () => {
  return (
    <div className="flex flex-col gap-4 shadow-lg border border-gray-100 p-5 rounded-lg cursor-pointer hover:shadow-xl transition-all duration-300">
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quaerat?Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex gap-2 items-center mt-3">
        <Badge className="text-blue-700 font-bold" >12 Positions</Badge>
        <Badge className="text-[#F83082] font-bold" >Part Time</Badge>
        <Badge className="text-[#7209b7] font-bold">24LPA</Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
