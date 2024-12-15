import { useState, useEffect } from "react";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import background1 from "../Assets/images/blitz.png";

const Slide1 = ({ isActive }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-1000 ${
      isActive ? "opacity-100" : "opacity-0"
    }`}
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${background1})`,
      }}
    />
    {/* Content */}
    <div className="relative h-full flex items-center justify-end">
      <div className="container mx-auto px-4 md:px-6 w-full flex justify-end">
        <div className="max-w-3xl space-y-6 text-left">
          <h1 className="text-[70px] md:text-6xl font-[800] text-[#010d14] leading-[75px] font-playfair">
            About Us
          </h1>
          <p className="md:text-xl text-[#333] max-w-2xl leading-[28px] text-2xl font-semibold">
            Elastomech, a pioneer in the manufacturing of customized industrial
            rubber and metal safety components, dedicated to crafting solutions
            that enhance safety, prevent injuries, and minimize operational
            downtime. With nearly four decades of expertise, we specialize in
            creating a diverse range of products, including Dock Bumpers, Dock
            Fenders, Cable Protectors, Wheel Chocks, Metal Wheel Guides, Wall
            Guards, Tipper Pads, Bushes, Mud Flaps and more, building a
            portfolio of over 500 parts for both export and domestic markets. As
            an ISO 9001:2015 certified organization, we take pride in upholding
            world-class manufacturing, testing, and administrative standards,
            ensuring excellence at every stage. By combining advanced technology
            with a client-focused approach, we strive to exceed expectations and
            foster long-term partnerships with customers worldwide. At
            Elastomech, our vision is to provide high-quality, reliable, and
            life-saving solutions to industries across the globe.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const Slide2 = ({ isActive }) => (
  <div
    className={`absolute inset-0 transition-opacity duration-1000 ${
      isActive ? "opacity-100" : "opacity-0"
    }`}
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(https://konstruk.rstheme.com/assets/h1-1-CNAuOS_Z.jpg)`,
      }}
    />
    {/* Content */}
    <div className="relative h-full flex items-center justify-start">
      <div className="container mx-auto px-4 md:px-6 w-full flex justify-start">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-[70px] md:text-6xl font-[800] text-[#010d14] leading-[75px] font-playfair">
            What We Bring to the Table
          </h1>
          <div className="flex flex-col gap-2">
            <div>
              <h2 className="text-2xl font-bold">• Part Development</h2>
              <p className="md:text-xl text-[#333] font-[500] max-w-2xl leading-[28px ml-3">
                We specialize in developing high-performance parts using
                cutting-edge elastomeric materials, delivering innovative
                solutions for industries seeking reliability and durability.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold">
                • Part Development Consultancy
              </h2>
              <p className="md:text-xl text-[#333] font-[500] max-w-2xl leading-[28px] ml-3">
                At Elastomech, we provide expert Part Development Consultancy,
                leveraging advanced elastomer and mechanical engineering to
                create tailored solutions that drive innovation and performance.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold leading-[28px]">
                • Part Manufacturing
              </h2>
              <p className="md:text-xl text-[#333] font-[500] max-w-2xl leading-[28px] ml-3">
                Elastomech excels in precision part manufacturing, using
                state-of-the-art facilities and the highest quality elastomeric
                materials to ensure products that meet the toughest industry
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FullPageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 2;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 10000); // 8 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div className="relative min-h-[calc(100vh-155px)] w-full overflow-hidden">
      {/* Slides */}
      <Slide1 isActive={currentSlide === 0} />
      <Slide2 isActive={currentSlide === 1} />

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors  w-[60px] h-[60px]"
        aria-label="Previous slide"
      >
        <ChevronLeftRoundedIcon className="!text-[28px]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-colors w-[60px] h-[60px]"
        aria-label="Next slide"
      >
        <ChevronRightRoundedIcon className="!text-[28px]" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-[#ffda31]" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullPageSlider;
