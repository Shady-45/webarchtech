import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[rgba(243, 240, 250, 0.8)]">
      <nav className="flex  mt-[2rem] ml-[2rem] text-2xl">
        <div className="title">
          <div className="first flex flex-row">
            <p className="font-extrabold">WEB</p>
            <p className="h-2 w-2 mt-5  bg-green-500 border-solid border-green-500 rounded-2xl"></p>
          </div>
          <div className="second">
            <p className="font-bold text-[16px] mt-[-14px] ml-[2px]">ARCH</p>
          </div>
        </div>
        <ul className=" flex w-[80%] justify-end gap-[5.75rem] font-semibold">
          <li>about</li>
          <li>works</li>
          <li>pricing</li>
          <li>contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
