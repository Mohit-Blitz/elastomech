import footerImg from "../Assets/images/footer.jpg";
import clientLogo from "../Assets/images/logo-nobg.png";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Footer = () => {
  return (
    <>
      <div
        className="bg-cover bg-center py-20 pb-0  "
        style={{ backgroundImage: `url(${footerImg})` }}
      >
        <div className="h-20 mb-12 px-[300px]">
          <img
            className="normal-logo h-full w-auto"
            src={clientLogo}
            alt="logo"
          />
        </div>
        <div className="flex justify-between text-white w-full px-[300px]">
          <div className="flex flex-col">
            <div className="font-bold text-2xl mb-8">Address</div>
            <div className="w-80">
              <p>
                <LocationOnOutlinedIcon
                  sx={{ color: "#ffd930", marginRight: "8px" }}
                />
                ELASTOMECH Plot No. A, 28, Anand Nagar, Additional M.I.D.C,
                Ambernath, Maharashtra 421506
              </p>
            </div>
          </div>
          <div className="flex flex-col w-80">
            <div className="font-bold text-2xl mb-8">Products</div>
            <ul className="flex flex-col gap-1 w-full cursor-pointer">
              <li className="flex gap-2 items-center hover:text-[#ffd930]">
                <KeyboardArrowRightIcon />
                <p>Dock Fenders</p>
              </li>
              <li className="flex gap-2 items-center hover:text-[#ffd930]">
                <KeyboardArrowRightIcon />
                <p>Dock Bumpers</p>
              </li>
              <li className="flex gap-2 items-center hover:text-[#ffd930]">
                <KeyboardArrowRightIcon />
                <p>Wheel Chockers</p>
              </li>
              <li className="flex gap-2 items-center hover:text-[#ffd930]">
                <KeyboardArrowRightIcon />
                <p>Rubber Buffers</p>
              </li>
              <li className="flex gap-2 items-center hover:text-[#ffd930]">
                <KeyboardArrowRightIcon />
                <p>Cable Protectors</p>
              </li>
              <li className="flex gap-2 items-center hover:text-[#ffd930]">
                <KeyboardArrowRightIcon />
                <p>House Ramps</p>
              </li>
              <li className="flex gap-2 items-center hover:text-[#ffd930]">
                <KeyboardArrowRightIcon />
                <p>Wall / Corner Gaurds</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="font-bold text-2xl mb-8">Contact Us</div>
            <ul className="flex flex-col gap-3 ">
              <li className="flex gap-2 items-center hover:text-[#ffd930]">
                <ForwardToInboxIcon
                  sx={{ color: "#ffd930" }}
                  fontSize="small"
                />
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
        <div className="bg-[#3336] mt-10 p-6 flex items-center text-white">
          <span className="mx-auto">© ELASTOMECH, All Right Reserved.</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
