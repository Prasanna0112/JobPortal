import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const appliedJobs = [1, 2, 3, 4];

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow className="border-none shadow-sm">
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
            {
                appliedJobs.map((item, index) => {
                    return (
                        <TableRow key={index} className="hover:bg-gray-100 border-gray-200 h-12">
                            <TableCell>17-07-2024</TableCell>
                            <TableCell>Frontend Developer</TableCell>
                            <TableCell>Google</TableCell>
                            <TableCell className="text-right"><Badge className="bg-black text-white rounded-full">Selected</Badge></TableCell>
                        </TableRow>
                    )
                })
            }
        </TableBody>
      </Table>
      
    </div>
  );
};

export default AppliedJobTable;
