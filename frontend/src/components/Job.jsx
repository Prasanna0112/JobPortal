import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({job}) => {

  const navigate = useNavigate();
  // const jobId = "akjsgjxasjasg";
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference/ (1000*24*60*60))
  }

  return (
    <div className="p-5 rounded-md shadow-lg bg-white border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between ">
        <p className="text-gray-500 text-sm">{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)} days ago`}</p>
        {/* <Button className="rounded-full size-icon cursor-pointer"><Bookmark /></Button> */}
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button>
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-bold my-2">{job?.title}</h1>
        <p className="text-gray-600 text-sm">
          {job?.description}
        </p>
      </div>
      <div className="flex gap-2 items-center mt-3">
              <Badge className="text-blue-700 font-bold" >{job?.position} Positions</Badge>
              <Badge className="text-[#F83082] font-bold" >{job?.jobType}</Badge>
              <Badge className="text-[#7209b7] font-bold">{job?.salary}LPA</Badge>
            </div>
            <div className="flex gap-4 items-center mt-3">
                <Button variant="outline" className="bg-[#6A38C2] text-white cursor-pointer w-full" onClick={() => navigate(`/job/description/${job?._id}`)}>Details</Button>
            </div>  
    </div>
  );
};

export default Job;
