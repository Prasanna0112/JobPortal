import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exist={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto my-20"
    >
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top </span>Job Openings
      </h1>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exist={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-3 gap-4 my-5"
      >
        {allJobs.length <= 0 ? (
          <span>No JOb Available</span>
        ) : (
          allJobs
            .slice(0, 6)
            .map((job) => <LatestJobCards key={job?._id} job={job} />)
        )}
      </motion.div>
    </motion.div>
  );
};

export default LatestJobs;
