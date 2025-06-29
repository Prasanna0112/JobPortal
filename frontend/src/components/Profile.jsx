import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";
import { motion } from "framer-motion";

// const skills = ["html", "css", "javascript", "react", "nodejs"];

const Profile = () => {
  useGetAppliedJobs();
  const isResume = true;
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exist={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.3 }}
        className="max-w-4xl mx-auto  bg-white border border-gray-200 rounded-2xl shadow-md my-5 p-8"
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-4 ">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={
                  user?.profile?.profilePhoto ||
                  "https://www.pngmart.com/files/23/Profile-PNG-Photo.png"
                }
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => setOpen(true)}
            className="text-right hover:bg-gray-100"
            variant=""
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1 my-2">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge key={index} className="bg-black text-white rounded-full">
                  {item}
                </Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {user?.profile?.resume ? (
            // <a
            //   href={user?.profile?.resume.replace('/upload/', '/upload/fl_attachment:false/')}
            //   target="_blank"
            //   rel="noopener noreferrer"
            //   className="text-blue-500 hover:underline cursor-pointer"
            // >
            //   {user?.profile?.resumeOriginalName || "View Resume"}
            // </a>
            <a
              href={`https://docs.google.com/viewer?url=${encodeURIComponent(
                user.profile.resume
              )}&embedded=true`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline cursor-pointer"
            >
              {/* {user?.profile?.resumeOriginalName || "View Resume"} */}
              View Resume
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exist={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl"
      >
        <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
        <AppliedJobTable />
      </motion.div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
