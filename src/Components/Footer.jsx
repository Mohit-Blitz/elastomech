import footerImg from "../Assets/images/footer.jpg";
import clientLogo from "../Assets/images/logo-nobg.png";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center pt-10 md:pt-20"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      {/* Logo Section */}
      <div className="flex justify-center mb-8 md:mb-12">
        <img
          className="h-16 md:h-20 w-auto"
          src={clientLogo}
          alt="logo"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row justify-between text-white w-full px-6 md:px-20 lg:px-[300px]">
        {/* Address Section */}
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="font-bold text-xl md:text-2xl mb-4">Address</div>
          <div className="md:w-80">
            <p className="flex items-start">
              <LocationOnOutlinedIcon
                sx={{ color: "#ffd930", marginRight: "8px" }}
              />
              ELASTOMECH Plot No. A, 28, Anand Nagar, Additional M.I.D.C,
              Ambernath, Maharashtra 421506
            </p>
          </div>
        </div>

        {/* Products Section */}
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="font-bold text-xl md:text-2xl mb-4">Products</div>
          <ul className="flex flex-col gap-1 w-full cursor-pointer">
            {[
              "Dock Fenders",
              "Dock Bumpers",
              "Wheel Chockers",
              "Rubber Buffers",
              "Cable Protectors",
              "House Ramps",
              "Wall / Corner Guards",
            ].map((item, index) => (
              <li
                key={index}
                className="flex gap-2 items-center text-white transition-all duration-300 text-[16px] custom-hover-effect"
              >
                <KeyboardArrowRightIcon />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col">
          <div className="font-bold text-xl md:text-2xl mb-4">Contact Us</div>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-2 items-center hover:text-[#ffd930]">
              <ForwardToInboxIcon sx={{ color: "#ffd930" }} fontSize="small" />
              <a href="mailto:sales.elastomech@gmail.com">
                sales.elastomech@gmail.com
              </a>
            </li>
            <li className="flex gap-2 items-center hover:text-[#ffd930]">
              <CallOutlinedIcon sx={{ color: "#ffd930" }} fontSize="small" />
              <a href="tel:+91 90753 58795"> +91 90753 58795 </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#3336] mt-10 p-6 flex items-center text-white">
        <span className="mx-auto text-center">
          © ELASTOMECH, All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
