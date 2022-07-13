import React from "react";

const Navbar = () => {
  return (
    <div className="lg:bg-[rgba(243, 240, 250, 0.8)]">
      <nav className="lg:flex  lg:mt-[2rem] lg:ml-[2rem] lg:text-2xl">
        <div className="title">
          <div className="lg:first lg:flex lg:flex-row">
            <p className="lg:font-extrabold">WEB</p>
            <p className="lg:h-2 lg:w-2 lg:mt-5  lg:bg-green-500 lg:border-solid lg:border-green-500 lg:rounded-2xl"></p>
          </div>
          <div className="second">
            <p className="lg:font-bold lg:text-[16px] lg:mt-[-16px] lg:ml-[2px]">
              ARCH
            </p>
          </div>
        </div>
        <ul className=" lg:flex lg:w-[80%] lg:justify-end lg:gap-[5.75rem] lg:font-semibold">
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
