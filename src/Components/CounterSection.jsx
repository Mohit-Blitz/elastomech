import React from "react";
import Button from '@mui/material/Button';

const CounterSection = () => {
  return (
    <div
      className="bg-cover bg-center pt-20 pb-16 md:pt-16 md:pb-16 bg2"

    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          {/* Left Section */}
          <div className="text-left mb-10 lg:mb-0 lg:w-1/2">
            <span className="text-[#ffda31] font-semibold text-lg">Number Talks</span>
            <h2 className="text-white text-4xl font-bold leading-tight mb-4">
              Konstruk will help you get <br /> things complete reality.
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Konstruk will help you get things complete reality.
            </p>

            <Button
              variant="contained"
              className="!bg-[#ffda31] uppercase !text-[#010d14]  !font-[600] !px-[23px] !py-[17px] h-auto !text-[15px] !shadow-none hover:!bg-[#fff] !rounded-none"
            >
              Contact Now
            </Button>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 max-[600px]:grid-cols-1 grid grid-cols-2 gap-6 p-[6rem] max-[1000px]:p-0">
            {/* Counter Item */}
            <div
              className="bg-[#ffda31] bg-opacity-20 rounded-md text-center text-white max-[600px]:w-[100%]"
              style={{
                padding: `28px 35px 40px`,
                clipPath: `polygon(15% 0%, 100% 0, 100% 20%, 100% 74%, 85% 100%, 0 100%, 0% 80%, 0% 25%)`
              }}
            >      <div className="text-4xl font-bold mb-2 text-[#ffda31]">
                341<span className="prefix">+</span>
              </div>
              <span className="title">Completed Projects</span>
            </div>

            <div className="bg-[#ffda31] bg-opacity-20  rounded-md text-center text-white"
              style={{
                padding: `28px 35px 40px`,
                clipPath: `polygon(15% 0%, 100% 0, 100% 20%, 100% 74%, 85% 100%, 0 100%, 0% 80%, 0% 25%)`
              }}>
              <div className="text-4xl font-bold mb-2 text-[#ffda31]">
                302<span className="prefix">+</span>
              </div>
              <span className="title">Happy Clients</span>
            </div>

            <div className="bg-[#ffda31] bg-opacity-20 p-6 rounded-md text-center text-white"
              style={{
                padding: `28px 35px 40px`,
                clipPath: `polygon(15% 0%, 100% 0, 100% 20%, 100% 74%, 85% 100%, 0 100%, 0% 80%, 0% 25%)`
              }}
            >
              <div className="text-4xl font-bold mb-2 text-[#ffda31]">
                153<span className="prefix">+</span>
              </div>
              <span className="title">Qualified Engineers</span>
            </div>

            <div className="bg-[#ffda31] bg-opacity-20 p-6 rounded-md text-center text-white"
              style={{
                padding: `28px 35px 40px`,
                clipPath: `polygon(15% 0%, 100% 0, 100% 20%, 100% 74%, 85% 100%, 0 100%, 0% 80%, 0% 25%)`
              }}
            >
              <div className="text-4xl font-bold mb-2 text-[#ffda31]">
                32<span className="prefix">+</span>
              </div>
              <span className="title">Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default CounterSection;