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
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-md font-bold">
          No.1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]">Dream Job</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          voluptas quod labore beatae reprehenderit obcaecati.
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
