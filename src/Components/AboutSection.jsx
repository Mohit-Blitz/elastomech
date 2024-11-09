import Button from "@mui/material/Button";

const AboutSection = () => {
  return (
    <div className="bg1 pt-[120px] pb-[120px]">
      <div className="container mx-auto flex flex-wrap items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 ">
          <div className="flex justify-center">
            <img
              src="https://konstruk.rstheme.com/assets/about-3Cx81yRJ.png"
              alt="About"
              className="rounded-none !shadow-none"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 lg:pl-12 px-5">
          <div className="space-y-5">
            <span className="text-base font-medium leading-tight text-[#010d14] uppercase font-roboto mb-2 block">
              <span className="mr-2">Who We Are</span>
            </span>
            <h2 className="text-[42px] font-bold leading-[53px] text-[#010d14] mt-0">
              Construction solutions focused future ready
            </h2>
            <p className="text-gray-600">
              Leverage agile frameworks to provide a robust synopsis for
              high-level overviews. Iterative approaches to corporate strategy
              data foster collaborative thinking and empowerment.
            </p>

            {/* Bullet Points */}
            <div className="flex items-start space-x-4">
              <img
                src="https://konstruk.rstheme.com/assets/abzt-C6VUWWj4.jpg"
                alt="About Image"
                className="w-32 h-32 object-cover rounded-none shadow-lg"
              />
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <i className="ri-checkbox-circle-fill text-yellow-500 mr-2"></i>
                  Pre-construction services
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-checkbox-circle-fill text-yellow-500 mr-2"></i>
                  Industrial manufacturing
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="ri-checkbox-circle-fill text-yellow-500 mr-2"></i>
                  Building and construction
                </li>
              </ul>
            </div>

            {/* Button and Signature */}
            <div className="flex flex-wrap items-center mt-8 space-x-8">
              <Button
                variant="contained"
                className="!bg-[#ffb703]  text-[#010d14] !font-[600] !px-[23px] !py-[17px] h-auto !text-[15px] !shadow-none hover:!bg-black !rounded-none"
              >
                KNOW MORE
              </Button>
              <img
                src="/assets/signeture1-DvfNCxHd.png"
                alt="Signature"
                className="h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
