import React from "react";

function Searchbar() {
  return (
    <div className="flex items-center relative">
      <input
        type="text"
        placeholder="Search"
        className="bg-[#121212] placeholder:text-zinc-400 placeholder:font-normal border-zinc-700 border-[.1px] py-2 px-3 rounded-l-full w-[40vw] text-[1.25vw] outline-none focus:border-blue-600 focus:w-[42vw]"
      />
      <button className="rounded-r-full bg-[#222222] border-zinc-700 border-[.1px] py-2 px-5 ml-[.1px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="26"
          viewBox="0 0 24 24"
          width="26"
          focusable="false"
          fill="#fff"
        >
          <path d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"></path>
        </svg>
      </button>
      <div className="flex items-center justify-center rounded-full bg-[#222222] py-2 px-2 ml-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="26"
          viewBox="0 0 24 24"
          width="26"
          focusable="false"
          fill="#fff"
        >
          <path d="M12 3c-1.66 0-3 1.37-3 3.07v5.86c0 1.7 1.34 3.07 3 3.07s3-1.37 3-3.07V6.07C15 4.37 13.66 3 12 3zm6.5 9h-1c0 3.03-2.47 5.5-5.5 5.5S6.5 15.03 6.5 12h-1c0 3.24 2.39 5.93 5.5 6.41V21h2v-2.59c3.11-.48 5.5-3.17 5.5-6.41z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Searchbar;
