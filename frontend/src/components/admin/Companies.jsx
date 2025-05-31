import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CompaniesTable from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/companySlice";
import { motion } from "framer-motion";

const Companies = () => {
  useGetAllCompanies();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
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
            placeholder="Filter by name"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            onClick={() => navigate("/admin/companies/create")}
            className={
              "bg-black text-white hover:cursor-pointer hover:bg-gray-800"
            }
          >
            New Company
          </Button>
        </div>
        <CompaniesTable />
      </motion.div>
    </div>
  );
};

export default Companies;
