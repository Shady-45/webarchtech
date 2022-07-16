import React from "react";

const Footer = () => {
  return (
    <div className=" bg-black text-white  lg:h-[110vh] sm:bg-black md:text-white sm:text-white lg:text-white lg:w-[100%] md:bg-black md:w-[100%]  lg:bg-black">
      <div className="footer-first text-center  ">
        <img
          className=" h-[15rem] pl-[10rem]     sm:h-[15rem] sm:ml-[2em] sm:m-auto lg:h-40  md:h-40 md:m-auto lg:m-auto"
          src="/footer-img.png"
          alt=""
        />
        <h1 className=" pt-[4rem] sm:text-4xl sm:font-semibold sm:pt-[3rem] sm:pb-[3rem]  md:text-4xl md:font-semibold md:pt-[3rem] md:pb-[3rem]    lg:text-4xl lg:font-semibold lg:pt-[9rem] lg:pb-[3rem]">
          Sounds Good?
        </h1>
        <p className=" sm:text-2xl sm:font-normal sm:w-[74%] sm:m-auto sm:px-1  md:text-2xl md:font-normal md:w-[74%] md:m-auto md:px-1 lg:text-2xl lg:font-normal lg:w-[44%] lg:m-auto lg:px-1">
          Get to know our hiring process before you apply or find answers to any
          lingering questions, right here, right now.
        </p>
      </div>
      <div className="pl-[10rem]  pt-[2rem] pb-[4rem]  btn sm:ml-[2em] sm:pt-[3rem] md:flex md:w-[100%] md:justify-center md:gap-[5.5rem] md:mt-[3rem] lg:flex lg:w-[100%] lg:justify-center lg:m-auto lg:gap-[5.5rem] lg:pr-[10rem] lg:pt-[1rem] lg:mt-[3rem]">
        <button className="hover:bg-white p-[1em] text-white font-semibold hover:text-black border border-white hover:border-transparent rounded-[2em] sm:hover:bg-white sm:p-[1em] sm:text-white sm:font-semibold sm:hover:text-black sm:border sm:border-white sm:hover:border-transparent sm:rounded-[2em] md:hover:bg-white md:p-[1em] md:text-white md:font-semibold md:hover:text-black md:border md:border-white md:hover:border-transparent md:rounded-[2em]  lg:hover:bg-white lg:p-[1em] lg:text-white lg:font-semibold lg:hover:text-black  lg:border lg:border-white lg:hover:border-transparent lg:rounded-[2em] ">
          How we hire
        </button>
        <button className=" hover:bg-white p-[1em] text-white font-semibold hover:text-black border border-white hover:border-transparent rounded-[2em]  sm:hover:bg-white sm:p-[1em] sm:text-white sm:font-semibold sm:hover:text-black sm:border sm:border-white sm:hover:border-transparent sm:rounded-[2em]   md:hover:bg-white md:p-[1em] md:text-white md:font-semibold md:hover:text-black md:border md:border-white md:hover:border-transparent md:rounded-[2em]  lg:hover:bg-white  lg:text-white lg:font-semibold lg:hover:text-black lg:p-[1em] lg:border lg:border-white lg:hover:border-transparent lg:rounded-[2em]">
          Read our FAQ
        </button>
      </div>
      <div
        className="footer-content lg:flex hidden lg:ml-[-10rem] lg:cursor-pointer md:bg-black     gap: 10em;
    lg:m-auto lg:pl-[25em] lg:gap-[10em]
    padding-left: 16em;    lg:gap-9rem lg:bg-black"
      >
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
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
              Engineering
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
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
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:hover:text-white">
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
            <li className="lg:text-gray-400 lg: pb-[0.5rem] lg:lg:hover:text-white">
              Climate Action
            </li>
            <li className="lg:text-gray-400 lg: pb-[0.5rem] lg:lg:hover:text-white">
              Racial Equity
            </li>
            <li className="lg:text-gray-400 lg:pb-[0.5rem] lg:lg:hover:text-white">
              Social Impact
            </li>
          </ul>
        </div>
      </div>

      <div
        className="md:accordion lg:hidden md:accordion-flush"
        id="accordionFlushExample"
      >
        <div className="accordion-item md:border-t-0 md:border-l-0 md:border-r-0 md:rounded-none md:bg-black border md:border-white">
          <h2 className="md:accordion-header md:mb-0" id="flush-headingOne">
            <button
              className="accordion-button
    md:relative
    md:flex
    md:items-center
    md:w-full
    md:py-4
    md:px-5
    md:text-base text-white text-left
   md: bg-black
   md: border-0
    md:rounded-none
    md:transition
    md:focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Communities
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse border-0 collapse show"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body md:py-4 md:px-5">
              <ul>
                <li className="text-gray-400 hover:text-white">Design</li>
                <li className="text-gray-400 hover:text-white">Developers</li>
                <li className="text-gray-400 hover:text-white">Brands</li>
                <li className="text-gray-400 hover:text-white">Artists</li>
                <li className="text-gray-400 hover:text-white">Engineering</li>
                <li className="text-gray-400 hover:text-white ">Research</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item border-l-0 border-r-0 rounded-none bg-black border border-white">
          <h2 className="accordion-header mb-0" id="flush-headingTwo">
            <button
              className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-white text-left
    bg-black
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Stay Updated
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse border-0 collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              <ul>
                <li className="text-gray-400 hover:text-white">Latest</li>
                <li className="text-gray-400 hover:text-white">Instagram</li>
                <li className="text-gray-400 hover:text-white">Linkedn</li>
                <li className="text-gray-400 hover:text-white">Twitter</li>
                <li className="text-gray-400 hover:text-white">Youtube</li>
                <li className="text-gray-400 hover:text-white ">Podcast</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-black border border-white">
          <h2 className="accordion-header mb-0" id="flush-headingThree">
            <button
              className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-white text-left
    bg-black
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Carrer
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body py-4 px-5">
              <ul>
                <li className="text-gray-400 hover:text-white">Locations</li>
                <li className="text-gray-400 hover:text-white">Being Here</li>
                <li className="text-gray-400 hover:text-white">Students</li>
                <li className="text-gray-400 hover:text-white">How We Hire</li>
                <li className="text-gray-400 hover:text-white">All Jobs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-black border border-white">
          <h2 className="accordion-header mb-0" id="flush-headingThree">
            <button
              className="accordion-button
    collapsed
    relative
    flex
    items-center
    w-full
    py-4
    px-5
    text-base text-white text-left
    bg-black
    border-0
    rounded-none
    transition
    focus:outline-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Carrer
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            Diversity, Equity & Impact
            <div className="accordion-body py-4 px-5">
              <ul>
                <li className="text-gray-400 hover:text-white">
                  Mental Health
                </li>
                <li className="text-gray-400 hover:text-white">
                  Diversity,Inclusion & Belonging
                </li>
                <li className="text-gray-400 hover:text-white">
                  Climate action
                </li>
                <li className="text-gray-400 hover:text-white">
                  racial equality
                </li>
                <li className="text-gray-400 hover:text-white">
                  social impact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
