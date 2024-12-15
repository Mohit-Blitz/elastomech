import React from "react";
import { Products } from "../../Data/Products"; // Make sure the path is correct

const SideBar = (props) => {
  return (
    <div className="w-[15%] h-full border-r p-4">
      {Products.map((product) => (
        <div
          key={product.id}
          className="mb-4 text-gray-700 font-medium cursor-pointer"
          onClick={() => props.handleProductChange(product.id)}
        >
          {product.title}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
