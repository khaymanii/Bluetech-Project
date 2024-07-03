import React from "react";

interface TableBodyProps {
  data: (string | number | boolean)[][];
}

export default function TableBody({ data }: TableBodyProps) {
  return (
    <div className="overflow-x-auto rounded-xl">
      <table className="min-w-full divide-y bg-customBlue">
        <tbody className="bg-white divide-y">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                <input type="checkbox" />
              </td>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium"
                >
                  {typeof cell === "boolean" ? (
                    <input type="checkbox" checked={cell} readOnly />
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
