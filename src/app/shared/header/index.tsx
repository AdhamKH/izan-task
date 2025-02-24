import React from "react";
import { Logo } from "../../../../public/assets/logo";
import SearchInput from "../atoms/searchInput";
import { HomeIcon } from "../../../../public/assets/icons/home";
import { JobsIcon } from "../../../../public/assets/icons/jobs";
import { EmployersIcon } from "../../../../public/assets/icons/employers";
import { NotificationIcon } from "../../../../public/assets/icons/notification";
import { MessagesIcon } from "../../../../public/assets/icons/messages";
import ProfileDropdown from "../profileDropDown";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 md:py-[1.01rem] md:px-[5.5rem] bg-[#161616] w-full">
      <div className="flex items-center">
        <ul className="flex items-center gap-4 md:gap-[46px]">
          <li>
            <Logo />
          </li>
          <li className="hidden xl2:inline">
            <SearchInput
              name="id"
              placeholder="Search by name, job title, ..."
            />
          </li>
        </ul>
      </div>
      <div className="md:flex items-center gap-4 lg:gap-[3.9rem]">
        <div>
          <ul className="flex items-center gap-4 lg:gap-[3.9rem] text-white">
            <li className="hidden xl2:inline">
              <div className="flex items-center justify-center flex-col gap-[2px] text-white text-[16px] md:text-[18px] leading-[27px]">
                <HomeIcon />
                Home
              </div>
            </li>
            <li className="hidden xl2:inline">
              <div className="flex items-center justify-center flex-col gap-[2px] text-white text-[16px] md:text-[18px] leading-[27px]">
                <JobsIcon />
                Jobs
              </div>
            </li>
            <li className="hidden xl2:inline">
              <div className="flex items-center justify-center flex-col gap-[2px] text-white text-[16px] md:text-[18px] leading-[27px]">
                <EmployersIcon />
                Employers
              </div>
            </li>
          </ul>
        </div>
        <div className="bg-[#D6D6D699] w-[1px] h-[4rem] hidden xl2:inline"></div>
        <div>
          <ul className="flex items-center gap-4 lg:gap-[3.9rem] text-white">
            <li className="hidden xl2:inline">
              <div className="flex items-center justify-center flex-col gap-[2px] text-white text-[16px] md:text-[18px] leading-[27px]">
                <NotificationIcon />
                Notifications
              </div>
            </li>
            <li className="hidden xl2:inline">
              <div className="flex items-center justify-center flex-col gap-[2px] text-white text-[16px] md:text-[18px] leading-[27px]">
                <MessagesIcon />
                Messaging
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center flex-col gap-[2px] text-white text-[16px] md:text-[18px] leading-[27px]">
                <ProfileDropdown />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
