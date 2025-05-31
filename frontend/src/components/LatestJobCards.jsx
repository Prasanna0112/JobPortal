import React from "react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/job/description/${job._id}`)}
      className="flex flex-col gap-4 shadow-lg border border-gray-100 p-5 rounded-lg cursor-pointer hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div>
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </div>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex gap-2 items-center mt-3">
        <Badge className="text-blue-700 font-bold">
          {job?.position} Positions
        </Badge>
        <Badge className="text-[#F83082] font-bold">{job?.jobType}</Badge>
        <Badge className="text-[#7209b7] font-bold">{job?.salary}LPA</Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
