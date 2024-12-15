import React from "react";
import { Products } from "../../Data/Products";

const Description = ({ product }) => {
  const selectedProduct = Products.find((item) => item.id === product);

  return (
    <>
      <div className="border p-3 mx-5 my-2 rounded">
        <h3 className="text-lg font-semibold mb-2">{selectedProduct.title}:</h3>
        <div>{selectedProduct.description}</div>
      </div>
    </>
  );
};

export default Description;
