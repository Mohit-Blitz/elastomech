import React from 'react'
import { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import InfoTopBar from "../Components/InfoTopBar";
import Footer from "../Components/Footer";
import Breadcrumbs from "../Components/Breadcrumbs";

const About = () => {
    const [showButton, setShowButton] = useState(false);

    // Handle scroll event to toggle button visibility
    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300); // Show button after scrolling down 300px
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const page_header_details = {
        header_name: "About Us",
        header_dec: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 20 years experience.",
        header_current_page_name: "About Us"
    }
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <InfoTopBar />
                <NavBar />
                <div>
                    <Breadcrumbs page_header_details={page_header_details} />
                    <div className="flex flex-col md:flex-row items-center justify-center bg-white  pt-[120px] pb-[120px] px-[120px]">
                        {/* Image Section */}
                        <div className="flex-1 relative">
                            <div className="relative rounded-lg overflow-hidden image-about">
                                <img
                                    src="https://elastomech.in/img/company%20image.jpg" // Replace with the actual image URL
                                    alt="Engineer with clipboard"
                                    className="w-full h-auto object-cover rounded-lg"
                                />

                            </div>
                            <div className='background_color_image'></div>
                        </div>

                        {/* Text Content Section */}
                        <div className="flex-1 mt-8 md:mt-0 md:ml-8 lg:ml-12 sec-title">
                            <h2 className="text-4xl title title7 pb-30 font-bold text-brown-900 mb-4">
                                Committed to quality, innovation, and excellence since 1985.
                            </h2>
                            <p className="text-[#333] leading-relaxed mb-1">
                                Established in 1985, our ISO 9001-2015 certified organization has been dedicated to manufacturing specialty molding and specialized conveyor belts. With a commitment to perfect systems in manufacturing, testing, and administration standards, we have steadily grown to intrude the export and local markets.
                            </p>
                            <p className="text-[#333] leading-relaxed">
                                Our company is well known for its commitment to excellence in quality, focusing equally on any new development to render the best services to our local and international clients. Over the years, we have expanded our offerings by developing a wide range of safety parts such as Dock Bumpers, Hose Ramps, Fenders, Kerbs, and gaskets, among others. With a range of 500+ parts developed for exports and local markets, we continue to prioritize quality, innovation, and customer satisfaction in all our endeavors
                            </p>
                        </div>
                    </div>

                </div>
                <Footer />
                {/* Scroll to Top Button */}
                {showButton && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-4 right-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full p-3 shadow-lg"
                        aria-label="Scroll to top"
                    >
                        ↑
                    </button>
                )}
            </div>
        </>
    )
}

export default About