"use client";
import Image from "next/image";
import { jobs } from "./utils/helpers/staticData";
import { DateIcon } from "../../public/assets/icons/date";
import { LocationIcon } from "../../public/assets/icons/location";
import { HeartIcon } from "../../public/assets/icons/heart";
import { SlideNav } from "../../public/assets/icons/slideNav";
import { useState } from "react";
import Sidebar from "./shared/sideBar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <main className="px-4">
        <div className="flex items-stretch justify-between gap-2">
          <div className="text-lg text-white font-bold mb-4 bg-[#3D8E41] p-7 basis-[100] w-full">
            UI Designer in Egypt
          </div>
          <button
            className="bg-white p-7 border border-gray-200 rounded mb-4 hidden max-xl2:inline"
            onClick={toggleSidebar}
          >
            <SlideNav className="basis-1/7" />
          </button>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded shadow  flex items-center justify-between hover:bg-[#f3fdf4] cursor-pointer"
            >
              <div className="w-full">
                <div className="p-8">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col ">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-5">
                          <Image
                            src={job.icon}
                            alt=""
                            className="h-10 w-10 rounded-full"
                            width={70}
                            height={70}
                          />
                          <div className="flex flex-col">
                            <div className="font-bold">{job.title}</div>
                            <div className="text-sm text-[#14A077]">
                              {job.company}
                            </div>
                          </div>
                        </div>
                        <div>
                          <HeartIcon />
                        </div>
                      </div>

                      <div className="flex items-center gap-4 pt-5">
                        <div className="text-sm text-[#707070] flex items-center gap-1">
                          <LocationIcon /> {job.location}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-[#707070]">
                          <DateIcon /> {job.posted}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-5 ">
                    <div className="text-sm bg-[#F7F7F7] px-4 py-1">
                      {job.experience}
                    </div>
                    <div className="text-sm bg-[#F7F7F7] px-4 py-1">
                      {job.type}
                    </div>
                    <div className="text-sm bg-[#F7F7F7] px-4 py-1">
                      {job.mode}
                    </div>
                  </div>
                </div>
                <hr />
                <div className="text-[#707070] text-[17px] px-8 py-5">
                  {job.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}
