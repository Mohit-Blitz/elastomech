import Button from "@mui/material/Button";
import clientLogo from "../../Assets/images/logo.png";

const NavBar = () => {
  return (
    <>
      <div className="flex h-[12%] mx-[15%] items-center justify-between">
        <div className="h-full flex ">
          <img src={clientLogo} alt="logo" className="h-[90%]" />
        </div>
        <ul className="flex items-center gap-3">
          <li>Products</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>
            <Button variant="contained">Find Distrubutor</Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
