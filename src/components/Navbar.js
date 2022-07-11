import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex mt-[2rem] ml-[2rem] text-2xl">
        <p>Web Arch</p>
        <ul className=" flex w-[80%] justify-end gap-[5.75rem]">
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
