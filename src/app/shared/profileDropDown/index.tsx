"use client";
import Image from "next/image";
import { useState } from "react";
import profilePic from "../../../../public/assets/profile/profile.png";
import { DonwArrowIcon } from "../../../../public/assets/icons/donwArrow";
import { RightArrowIcon } from "../../../../public/assets/icons/rightArrow";
function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col items-center justify-center rounded-lg shadow-md gap-[4px]"
      >
        <Image
          src={profilePic}
          alt="Ahmed Amaar"
          className="h-[30px] w-[30px] rounded-full"
        />
        <div className="flex items-center gap-[6px]">
          <span className="text-white text-[18px] leading-[27px]">Profile</span>
          <DonwArrowIcon />
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-5 w-[17rem] bg-white rounded-md   z-50">
          <div className="flex items-center justify-between  gap-4 p-4">
            <div className="flex items-center gap-4">
              <Image
                src={profilePic}
                alt="Ahmed Amaar"
                className="h-17 w-17 rounded-full"
              />
              <div>
                <h1 className="text-[#161616] text-[19px] font-bold-[500] ">
                  Ahmed Amaar
                </h1>
                <h2 className="text-[#707070] text-[15px] font-bold-[400] ">
                  UX UI designer
                </h2>
              </div>
            </div>

            <RightArrowIcon />
          </div>
          <div>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Settings and privacy
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Language
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Help
            </a>
          </div>
          <div>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
