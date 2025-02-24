import React from "react";
import { SearchIcon } from "../../../../../public/assets/icons/search";

type props = {
  placeholder: string;
  name: string;
  prefix?: React.ReactNode;
};

const SearchInput = (props: props) => {
  const { placeholder, name, prefix } = props;
  return (
    <div className="flex relative items-center">
      <input
        placeholder={placeholder}
        name={name}
        id={name}
        className="rounded-full h-[61px] w-full md:w-[451px] pl-16 placeholder-[#C4C3C3] text-[20px] tracking-[1px] pt-1"
      />
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#48A74C] rounded-full flex items-center justify-center w-12 h-12">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchInput;
