import React from "react";
import TableHeader from "./TableHeader";

interface TableProps {
  headers: string[];
  data: (string | number | boolean)[][];
}

export default function Table({ headers, data }: TableProps) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-medium mx-60  py-8">Department List</h1>
      <div className="overflow-x-auto mx-52">
        <TableHeader headers={headers} data={data} />
      </div>
    </div>
  );
}
