import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Domain",
    array: [
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
      "Data Science",
      "Machine Learning",
    ],
  },
  {
    filterType: "Location",
    array: ["Dehli", "Banglore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Company",
    array: ["Google", "Microsoft", "Amazon", "Meta", "Apple"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup onValueChange={changeHandler} value={selectedValue}>
        {filterData.map((filter, index) => (
          <div key={index}>
            <h1 className="text-lg font-bold">{filter.filterType}</h1>

            {filter.array.map((item, idx) => {
              const itemId = `id${index} - ${idx}`;
              return (
                <div key={itemId} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem id={itemId} value={item} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
