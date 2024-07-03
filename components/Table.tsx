import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

interface TableProps {
  headers: string[];
  data: (string | number | boolean)[][];
}

export default function Table({ headers, data }: TableProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-medium mx-60  py-8">Department List</h1>
      <div className="overflow-x-auto mx-52">
        <div className="mb-8 bg-customBlue shadow  rounded-xl">
          <TableHeader headers={headers} />
        </div>

        <TableBody data={data} />
      </div>
    </div>
  );
}
