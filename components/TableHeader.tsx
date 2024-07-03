import React from "react";

interface TableHeaderProps {
  headers: string[];
}

export default function TableHeader({ headers }: TableHeaderProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y bg-customBlue">
        <thead className="bg-customBlue">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-medium capitalize tracking-wider">
              <input type="checkbox" />
            </th>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-6 py-4 text-left text-sm font-medium  capitalize tracking-wider"
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
