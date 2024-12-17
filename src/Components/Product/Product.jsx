import React, { useState } from "react";
import SideBar from "./SideBar";
import Variety from "./Variety";
import Technical from "./Technical";
import Description from "./Description";
import Application from "./Application";
import NavBar from "../NavBar";
import InfoTopBar from "../InfoTopBar";
import Breadcrumbs from "../Breadcrumbs";


const Product = () => {
  const [product, setProduct] = useState(1);

  const handleProductChange = (product_id) => {
    setProduct(product_id);
    console.log(product);
  };
  const page_header_details = {
    header_name: "Products",
    header_dec: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 20 years experience.",
    header_current_page_name: "Product Page"
  }
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <InfoTopBar />
        <NavBar />
        <Breadcrumbs page_header_details={page_header_details} />

        <div className="flex gap-2 h-full w-full">

          <SideBar handleProductChange={handleProductChange} />
          <div className="w-full h-full">
            <Description product={product} />
            <div className="flex gap-3">
              <Application product={product} />
              <Technical product={product} />
            </div>
            <Variety product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
