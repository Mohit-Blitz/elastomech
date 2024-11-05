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
                        <span className="text-[#ffb703] font-semibold text-lg">Number Talks</span>
                        <h2 className="text-white text-4xl font-bold leading-tight mb-4">
                            Konstruk will help you get <br /> things complete reality.
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Konstruk will help you get things complete reality.
                        </p>

                        <Button
                            variant="contained"
                            className="!bg-[#ffb703] uppercase !text-[#010d14]  !font-[600] !px-[23px] !py-[17px] h-auto !text-[15px] !shadow-none hover:!bg-[#fff] !rounded-none"
                        >
                            Contact Now
                        </Button>
                    </div>

                    {/* Right Section */}
                    <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                        {/* Counter Item */}
                        <div className="bg-yellow-600 bg-opacity-20 p-6 rounded-md text-center text-white">
                            <div className="text-4xl font-bold mb-2">
                                341<span className="text-lg font-normal">+</span>
                            </div>
                            <span className="text-lg">Completed Projects</span>
                        </div>

                        <div className="bg-yellow-600 bg-opacity-20 p-6 rounded-md text-center text-white">
                            <div className="text-4xl font-bold mb-2">
                                302<span className="text-lg font-normal">+</span>
                            </div>
                            <span className="text-lg">Happy Clients</span>
                        </div>

                        <div className="bg-yellow-600 bg-opacity-20 p-6 rounded-md text-center text-white">
                            <div className="text-4xl font-bold mb-2">
                                153<span className="text-lg font-normal">+</span>
                            </div>
                            <span className="text-lg">Qualified Engineers</span>
                        </div>

                        <div className="bg-yellow-600 bg-opacity-20 p-6 rounded-md text-center text-white">
                            <div className="text-4xl font-bold mb-2">
                                32<span className="text-lg font-normal">+</span>
                            </div>
                            <span className="text-lg">Years Experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
