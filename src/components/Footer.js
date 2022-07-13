import React from "react";

const Footer = () => {
  return (
    <div className="h-[110vh] text-white bg-black">
      <div className="footer-first text-center  ">
        <img className="h-40 m-auto" src="/footer-img.png" alt="" />
        <h1 className="text-4xl font-semibold pt-[3rem] pb-[3rem]">
          Sounds Good?
        </h1>
        <p className=" text-2xl font-normal w-[44%] m-auto px-1">
          Get to know our hiring process before you apply or find answers to any
          lingering questions, right here, right now.
        </p>
      </div>
      <div className="btn flex w-[100%] justify-center gap-[6.5rem] mt-[3rem]">
        <button className=" hover:bg-white p-[1em] text-white font-semibold hover:text-black  border border-white hover:border-transparent rounded-[2em] ">
          How we hire
        </button>
        <button className=" hover:bg-white  text-white font-semibold hover:text-black p-[1em] border border-white hover:border-transparent rounded-[2em]">
          Read our FAQ
        </button>
      </div>
      <div className="footer-content flex cursor-pointer ml-[5rem] gap-64 bg-black">
        <div className="footer-content-1 mt-[4rem]">
          <ul>
            <li>
              <h1 className="text-[1.4rem] pb-[1rem]">Communities</h1>
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Design
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Developers
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Brands
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Artist
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Engineering
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Research
            </li>
          </ul>
        </div>

        <div className="footer-content-1 mt-[4rem]">
          <ul>
            <li>
              <h1 className="text-[1.4rem] pb-[1rem]">Stay updated</h1>
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Latest
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Instagram
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Twitter
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Linkden
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Youtube
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Podcast
            </li>
          </ul>
        </div>

        <div className="footer-content-1 mt-[4rem]">
          <ul>
            <li>
              <h1 className="text-[1.4rem] pb-[1rem]">Career</h1>
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Location
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Being Here
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Students
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              How we hire
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              All jobs
            </li>
          </ul>
        </div>
        <div className="footer-content-1 mt-[4rem]">
          <ul>
            <li>
              <h1 className="text-[1.4rem] pb-[1rem]">
                Diversity,Equity & Impact
              </h1>
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Mental health
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Diversity, Inclusion & belonging
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Climate Action
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Racial Equity
            </li>
            <li className="text-gray-400 pb-[0.5rem] hover:text-white">
              Social Impact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
