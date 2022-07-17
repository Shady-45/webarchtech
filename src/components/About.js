import React from "react";

const About = () => {
  return (
    <div className="about  font-sans">
      <div className="abt-1 flex flex-col text-4xl ml-[1rem] mr-[2rem] font-extrabold sm:text-6xl sm:font-extrabold sm:ml-8 sm:mt-8 md:text-7xl lg:text-8xl lg:ml-[11rem] sm:h-[80vh] md:h-[70vh] lg:h-[120vh] 2xl:h-[135vh] lg:mt-[6rem] 2xl:text-[10rem] 2xl:ml-[11rem] 2xl:mt-[6rem]">
        <h1 className="sm:ml-16">GROW YOUR</h1>
        <h1 className="  ml-[7rem] sm:mt-[1rem] sm:ml-[10rem] md:ml-[15rem] lg:mt-[3rem] lg:ml-[20rem] 2xl:ml-[30rem]">
          BUSINESS
        </h1>
        <h1 className="sm:mt-[1rem] sm:ml-[4rem]">WITH US</h1>
      </div>
      <section>
        <p className="font-bold  text-[2rem] mt-[2rem] sm:mt-[-18rem] md:mt-[-12rem] 2xl:ml-8 lg:mt-[-29rem] 2xl:mt-[-5rem]">
          what we do
        </p>
        <div className="details mt-[-5rem] flex flex-col lg:flex lg:flex-row 2xl:flex 2xl:flex-row ">
          <img className="mt-[7rem]" src="/online-dress.png" alt="" />
          <div className="details-1">
            <ol className="h-[80vh] mt-40 ml-48">
              <li className="w-[97%]">
                <hr className="bg-black sm:bg-black  md:hidden lg:hidden 2xl:hidden " />
                <p className="2xl:text-2xl 2xl:font-medium">
                  <span className="font-bold text-2xl 2xl:text-4xl 2xl:font-bold">
                    1
                  </span>{" "}
                  We create products that revolve around people. Our unique
                  approach is called Arch design
                </p>
              </li>
              <hr className="bg-black sm:bg-black  md:hidden lg:hidden 2xl:hidden " />
              <li>
                <p className="2xl:text-2xl 2xl:font-medium">
                  <span className="font-bold text-2xl 2xl:text-4xl 2xl:font-bold">
                    2
                  </span>{" "}
                  We adapt our services to the problem we’re solving.
                </p>
              </li>
              <hr className="bg-black sm:bg-black  md:hidden lg:hidden 2xl:hidden " />
              <li>
                <p className="2xl:text-2xl 2xl:font-normal">
                  <span className="font-bold text-2xl 2xl:text-4xl 2xl:font-bold">
                    3
                  </span>{" "}
                  And we design in constant cycles of iteration, until we arrive
                  at the best possible solution.
                </p>
              </li>
              <hr className="bg-black sm:bg-black  md:hidden lg:hidden 2xl:hidden " />
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
