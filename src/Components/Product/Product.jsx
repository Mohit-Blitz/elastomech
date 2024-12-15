import React, { useState } from "react";
import SideBar from "./SideBar";
import Variety from "./Variety";
import Technical from "./Technical";
import Description from "./Description";
import Application from "./Application";

const Product = () => {
  const [product, setProduct] = useState(1);

  const handleProductChange = (product_id) => {
    setProduct(product_id);
    console.log(product);
  };

  return (
    <>
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
    </>
  );
};

export default Product;
