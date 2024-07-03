import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="h-auto mx-40 py-4">
      <div className=" flex items-center justify-between">
        <div className="flex items-center py-4">
          <Image
            src="/assets/logo.svg"
            alt="logo"
            width={60}
            height={60}
            className="mr-4"
          />
          <div className="font-bold text-5xl text-blue-800">
            Unlimi<span className="text-red-400">.</span>
          </div>

          <div className="flex items-center rounded-lg py-3 w-80 px-4 border ml-28">
            <Image
              src="/assets/search.svg"
              alt="search image"
              width={20}
              height={20}
            />
            <input
              type="text"
              placeholder="Search by patients..."
              className="pl-4 outline-none"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-gray-100 bg-gray-100">
            <Image
              src="assets/bell.svg"
              alt="bell icon"
              width={25}
              height={25}
            />
          </div>
          <div className="">
            <Image
              src="assets/doctor.svg"
              alt="doctor image"
              height={36}
              width={37}
              className="rounded-full w-14 h-14  bg-gray-100"
            />
          </div>
          <h1 className="font-medium">Deko</h1>
          <Image
            src="assets/downarrow.svg"
            alt="arrow"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  );
}
