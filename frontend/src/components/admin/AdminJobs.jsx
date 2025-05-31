import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import AdminJobsTable from "./AdminJobsTable";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";
import { setSearchJobByText } from "@/redux/jobSlice";
import { motion } from "framer-motion";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exist={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto my-10"
      >
        <div className="flex items-center justify-between my-5">
          <Input
            className={"w-fit"}
            placeholder="Filter by name, role"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            onClick={() => navigate("/admin/jobs/create")}
            className={
              "bg-black text-white hover:cursor-pointer hover:bg-gray-800"
            }
          >
            New Jobs
          </Button>
        </div>
        <AdminJobsTable />
      </motion.div>
    </div>
  );
};

export default AdminJobs;
