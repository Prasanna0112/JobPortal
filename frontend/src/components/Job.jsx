import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {

  const navigate = useNavigate();
  const jobId = "akjsgjxasjasg";

  return (
    <div className="p-5 rounded-md shadow-lg bg-white border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-sm">2 days ago</p>
        <Button className="rounded-full size-icon cursor-pointer">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button>
          <Avatar>
            <AvatarImage src="https://static.vecteezy.com/system/resources/previews/000/403/516/original/modern-company-logo-design-vector.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-bold my-2">Job Title</h1>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
          accusamus maxime ab unde vero mollitia doloribus quia minus aliquam
          voluptatibus!
        </p>
      </div>
      <div className="flex gap-2 items-center mt-3">
              <Badge className="text-blue-700 font-bold" >12 Positions</Badge>
              <Badge className="text-[#F83082] font-bold" >Part Time</Badge>
              <Badge className="text-[#7209b7] font-bold">24LPA</Badge>
            </div>
            <div className="flex gap-4 items-center mt-3">
                <Button variant="outline" className="cursor-pointer" onClick={() => navigate(`/job/description/${jobId}`)}>Details</Button>
                <Button className="bg-[#6A38C2] text-white cursor-pointer">Save For Later</Button>
            </div>  
    </div>
  );
};

export default Job;
