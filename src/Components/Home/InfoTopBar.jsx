import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const InfoTopBar = () => {
  return (
    <>
      <div className="w-full text-white text-sm font-normal h-[6%] bg-[#010d14] flex items-center">
        <div className="flex w-full items-center justify-between mx-[15%]">
          <ul className="flex gap-3 ">
            <li className="flex gap-2 items-center">
              <ForwardToInboxIcon sx={{ color: "#ffd930" }} fontSize="small" />
              <a href="mailto:sales.elastomech@gmail.com">
                sales.elastomech@gmail.com
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <CallOutlinedIcon sx={{ color: "#ffd930" }} fontSize="small" />
              <a href="tel:+91 90753 58795"> +91 90753 58795 </a>
            </li>
            <li className="flex gap-2 items-center">
              <LocationOnOutlinedIcon
                sx={{ color: "#ffd930" }}
                fontSize="small"
              />
              <p>A 28, Anand Nagar, M.I.D.C Ambernath</p>
            </li>
          </ul>
          <div className="flex gap-2 items-center">
            <AccessTimeIcon sx={{ color: "#ffd930" }} fontSize="small" />
            <p> Hours: Sat-Thu: 9.00 am - 5.00 pm </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoTopBar;