import { Button, Fab } from "@mui/material";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  backgroundColor: "#fff", // Use 'backgroundColor' instead of 'bgcolor' for a standard 'div'
  boxShadow: 24,
  padding: "20px",
  borderRadius: "10px",
};

const ModalDesign = ({ handleClose, handleOpen, open }) => {
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div style={style}>
          <div className="flex items-center justify-between w-full my-3">
            <div className="text-2xl font-bold ">Find A Distributor</div>
            <Fab
              size="small"
              color="#92a19a"
              aria-label="add"
              onClick={handleClose}
            >
              <CloseIcon />
            </Fab>
          </div>
          <span className="text-sm mb-5">
            Feel free to reach out to us with any questions or inquiries. We
            will get back to you as soon as possible!
          </span>
          <form id="contact-form">
            <div className="flex flex-wrap -mx-2 md:-mx-3 mt-5">
              <div className="w-full md:w-1/2 px-2 md:px-3 mb-3">
                <input
                  className="form-control w-full p-2 md:p-3 border border-gray-300 rounded focus:border-yellow-500"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2 md:px-3 mb-3">
                <input
                  className="form-control w-full p-2 md:p-3 border border-gray-300 rounded focus:border-yellow-500"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-Mail"
                  required
                />
              </div>
              <div className="w-full px-2 md:px-3 mb-3">
                <select
                  className="form-control w-full p-2 md:p-3 border border-gray-300 rounded focus:border-yellow-500"
                  id="phone"
                  name="phone"
                  placeholder="Select Your Locality"
                  required
                >
                  <option value="">Select Your Locality</option>{" "}
                  <option value="india">India</option>
                  <option value="europe">Europe</option>
                  <option value="africa">Africa</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="netherlands">Netherlands</option>
                  <option value="uk">United Kingdom</option>
                </select>
              </div>
              <div className="w-full px-2 md:px-3 mb-3">
                <textarea
                  className="form-control w-full p-2 md:p-3 border border-gray-300 rounded focus:border-yellow-500"
                  id="message"
                  name="message"
                  placeholder="Your Message Here"
                  required
                ></textarea>
              </div>
            </div>
            <Button
              variant="contained"
              className="!bg-[#ffda31]  !text-black !font-[600] !px-[23px] !py-[17px] h-auto !text-[15px] !shadow-none hover:!bg-black hover:!text-white !rounded-none"
            >
              Submit Now
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ModalDesign;
