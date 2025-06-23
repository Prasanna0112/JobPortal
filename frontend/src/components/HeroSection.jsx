import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exist={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
      className="text-center "
    >
      <div className="flex flex-col gap-4 my-5">
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]">Dream Job</span>
        </h1>
        <p className="font-medium text-black-500 text-md max-w-2xl mx-auto">
          Find, apply, and land your dream job – all in one place. Your career journey starts here with the No.1 job hunt platform.
        </p>
      </div>
      <div className="flex w-[40%] shadow-lg border boder-gary-200 pl-3 rounded-full items-center gap-4 mx-auto">
        <input
          type="text"
          placeholder="Find your dream job"
          onChange={(e) => setQuery(e.target.value)}
          className="outline-none border-none w-full "
        />
        <Button
          onClick={searchJobHandler}
          className="cursor-pointer rounded-r-full bg-[#6A38C2] text-white hover:bg-[#5b38a6]"
        >
          <Search className="h-5 w-5 " />
        </Button>
      </div>
    </motion.div>
  );
};

export default HeroSection;
