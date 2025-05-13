import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import App from "@/App";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";

const skills = ["html", "css", "javascript", "react", "nodejs"];

const Profile = () => {

    const isResume = true;
    const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto  bg-white border border-gray-200 rounded-2xl shadow-md my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4 ">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://png.pngtree.com/png-vector/20230831/ourlarge/pngtree-man-avatar-image-for-profile-png-image_9197911.png"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className="text-right hover:bg-gray-100" variant="">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>prasanna@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>9873652254</span>
          </div>
        </div>
        <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center gap-1 my-2">

            {
               skills.length !== 0 ? skills.map((item, index) => <Badge key={index} className="bg-black text-white rounded-full">{item}</Badge>) : <span>NA</span>
            }
            </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-md font-bold">Resume</Label>
            {
                isResume ? <a href="https://youtube.com" target="blank" className="text-blue-500 hover:underline cursor-pointetr">My Resume</a>: <span>NA</span>
            }
        </div>
      </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
            <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
            <AppliedJobTable/>
        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Profile;
