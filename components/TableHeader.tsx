import React from "react";

interface TableHeaderProps {
  headers: string[];
}

export default function TableHeader({ headers }: TableHeaderProps) {
  return (
    <div className="overflow-x-auto rounded-xl  bg-customBlue">
      <table className="min-w-full divide-y">
        <thead className="bg-customBlue">
          <tr>
            <th className="px-2 py-4 text-left text-sm font-medium capitalize">
              <input type="checkbox" />
            </th>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-2 py-4 text-left text-sm font-medium  capitalize"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
      </table>
    </div>
  );
}
