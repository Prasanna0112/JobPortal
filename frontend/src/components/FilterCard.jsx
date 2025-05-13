import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const filterData = [
  {
    filterType: "Location",
    array: ["Dehli NCR", "Banglore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Fullstack Developer", "Data Science", "Machine Learning"],
  },
  {
    filterType: "Salary",
    array: ["2-5LPA", "5-10LPA", "10-15LPA", "15-20LPA", "20-25LPA"],
  }
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((filter, index) => (
          <div key={index}>
            <h1 className="text-lg font-bold">{filter.filterType}</h1>
           
              {filter.array.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem id={item} value={item} />
                  <Label htmlFor={item}>{item}</Label>
                </div>
              ))}
            
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
