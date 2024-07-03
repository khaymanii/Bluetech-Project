import React from "react";
import TableHeader from "./TableHeader";

interface TableProps {
  headers: string[];
  data: (string | number | boolean)[][];
}

export default function Table({ headers, data }: TableProps) {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <h1 className="text-2xl md:text-2xl font-medium mx-4 sm:mx-36 md:mx-32 py-8 text-center sm:text-left">
        Department List
      </h1>
      <div className="overflow-x-auto mx-4 sm:mx-32 md:mx-28">
        <TableHeader headers={headers} data={data} />
      </div>
    </div>
  );
}
