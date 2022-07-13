import React from "react";

const Footer = () => {
  return (
    <div className="lg:h-[110vh] lg:text-white lg:w-[100%] lg:bg-black">
      <div className="footer-first text-center  ">
        <img className="lg:h-40 lg:m-auto" src="/footer-img.png" alt="" />
        <h1 className="lg:text-4xl lg:font-semibold lg:pt-[3rem] lg:pb-[3rem]">
          Sounds Good?
        </h1>
        <p className=" lg:text-2xl lg:font-normal lg:w-[44%] lg:m-auto lg:px-1">
          Get to know our hiring process before you apply or find answers to any
          lingering questions, right here, right now.
        </p>
      </div>
      <div className="btn lg:flex lg:w-[100%] lg:justify-center lg:gap-[6.5rem] lg:mt-[3rem]">
        <button className=" lg:hover:bg-white lg:p-[1em] lg:text-white lg:font-semibold lg:hover:text-black  lg:border lg:border-white lg:hover:border-transparent lg:rounded-[2em] ">
          How we hire
        </button>
        <button className=" lg:hover:bg-white  lg:text-white lg:font-semibold lg:hover:text-black lg:p-[1em] lg:border lg:border-white lg:hover:border-transparent lg:rounded-[2em]">
          Read our FAQ
        </button>
      </div>
      <div className="footer-content lg:flex lg:cursor-pointer    lg:ml-[5rem] lg:gap-64 lg:bg-black">
        <div className="footer-content-1 lg:mt-[4rem]">
          <ul>
            <li>
              <h1 className="lg:text-[1.4rem] lg:pb-[1rem]">Communities</h1>
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Design
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Developers
            </li>
            <li className="lg:text-gray-400 pb-[0.5rem] lg:hover:text-white">
              Brands
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Artist
            </li>
            <li className="lg:-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Engineering
            </li>
            <li className="lg:-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Research
            </li>
          </ul>
        </div>

        <div className="footer-content-1 lg:mt-[4rem]">
          <ul>
            <li>
              <h1 className="lg:-[1.4rem] lg:pb-[1rem]">Stay updated</h1>
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Latest
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Instagram
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Twitter
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Linkden
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Youtube
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Podcast
            </li>
          </ul>
        </div>

        <div className="footer-content-1 lg:mt-[4rem]">
          <ul>
            <li>
              <h1 className="lg:text-[1.4rem] lg:pb-[1rem]">Career</h1>
            </li>
            <li className="lg:-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Location
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Being Here
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Students
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              How we hire
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              All jobs
            </li>
          </ul>
        </div>
        <div className="footer-content-1lg: mt-[4rem]">
          <ul>
            <li>
              <h1 className="lg:text-[1.4rem] lg:pb-[1rem]">
                Diversity,Equity & Impact
              </h1>
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:lg:hover:text-white">
              Mental health
            </li>
            <li className="lg:text-gray-400 pb-[0.5rem] lg:lg:hover:text-white">
              Diversity, Inclusion & belonging
            </li>
            <li className="lg:text-gray-400lg: pb-[0.5rem] lg:lg:hover:text-white">
              Climate Action
            </li>
            <li className="lg:text-gray-400lg: pb-[0.5rem] lg:lg:hover:text-white">
              Racial Equity
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:lg:hover:text-white">
              Social Impact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
