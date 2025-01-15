import { Link, useLocation } from "react-router-dom";
import clientLogo from "../Assets/images/logo.png";
import ModalDesign from "./Modal";
import { useState } from "react";
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';

const NavBar = () => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="relative">
      <header className="menu-area sticky top-[-1px] bg-white shadow z-[999]">
        <div className="container mx-auto flex justify-between items-center py-6 max-[780px]:px-[20px]">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="logo-area">
              <img
                className="normal-logo h-[70px]"
                src={clientLogo}
                alt="logo"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 hidden md:flex justify-center space-x-6 text-gray-800 font-medium">
            <Link
              to="/"
              className={`text-[19px] ${isActive("/") ? "text-[#ffda31]" : "hover:text-gray-600"
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-[19px] ${isActive("/about") ? "text-[#ffda31]" : "hover:text-gray-600"
                }`}
            >
              About
            </Link>
            <Link
              to="/products"
              className={`text-[19px] ${isActive("/products") ? "text-[#ffda31]" : "hover:text-gray-600"
                }`}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`text-[19px] ${isActive("/contact") ? "text-[#ffda31]" : "hover:text-gray-600"
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Button */}
            <div
              onClick={handleOpen}
              className="!bg-[#ffda31] text-[#010d14] !font-[600] cursor-pointer !px-[40px] !py-[15px] h-auto !text-[15px] !shadow-none hover:!bg-black !rounded-none hover:text-[#fff] max-[780px]:hidden"
            >
              Find A Distributor
            </div>


            <button
              id="nav-expander"
              className="md:hidden flex items-center justify-center"
              onClick={toggleDrawer}
            >
              <NotesRoundedIcon className="!text-[2.5rem]" />
            </button>
          </div>
        </div>
      </header>
      {
        isDrawerOpen && (
          <div
            className={`fixed top-0 left-0 h-full z-[9999] w-[70%] bg-white shadow-2xl transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300`}
          >
            {/* Drawer Header */}
            <div className="p-5 bg-[#ffda31] flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Menu</h2>
              <button
                className="text-gray-800 hover:text-gray-600 text-xl"
                onClick={toggleDrawer}
              >
                ✖
              </button>
            </div>

            {/* Drawer Content */}
            <div className="p-5 space-y-6">
              <Link
                to="/"
                className={`block text-[19px] font-medium ${isActive("/") ? "text-[#ffda31]" : "hover:text-gray-600"
                  }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block text-[19px] font-medium ${isActive("/about") ? "text-[#ffda31]" : "hover:text-gray-600"
                  }`}
              >
                About
              </Link>
              <Link
                to="/products"
                className={`block text-[19px] font-medium ${isActive("/products") ? "text-[#ffda31]" : "hover:text-gray-600"
                  }`}
              >
                Products
              </Link>
              <Link
                to="/contact"
                className={`block text-[19px] font-medium ${isActive("/contact") ? "text-[#ffda31]" : "hover:text-gray-600"
                  }`}
              >
                Contact
              </Link>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 w-full p-2 bg-gray-100">
              <div onClick={() => { handleOpen(), toggleDrawer() }} className="!bg-[#ffda31] text-[#010d14] !font-[600] items-center cursor-pointer !px-[40px] !py-[15px] h-auto !text-[15px] !shadow-none hover:!bg-black !rounded-none flex justify-center hover:text-[#fff]"
              >
                Find A Distributor
              </div>
            </div>
          </div>
        )
      }

      {open && (
        <ModalDesign
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
      )}
      {isDrawerOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-[9998] !overflow-hidden"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default NavBar;
