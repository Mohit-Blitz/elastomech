import React from "react";
import { Products } from "../../Data/Products";

const Description = ({ product }) => {
  const selectedProduct = Products.find((item) => item.id === product);

  return (
    <div className="border border-gray-200 shadow-sm p-6 mb-4 rounded-md bg-white">
      <h3 className="text-2xl font-bold mb-4 text-gray-900">
        {selectedProduct.title}
      </h3>
      <p className="text-gray-700 text-md font-medium">
        {selectedProduct.description}
      </p>
    </div>
  );
};

export default Description;
