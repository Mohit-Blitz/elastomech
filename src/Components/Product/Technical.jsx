import React from "react";
import { Products } from "../../Data/Products";

const Technical = ({ product }) => {
  const selectedProduct = Products.find((item) => item.id === product);

  return (
    <>
      <div className="border p-3 mx-5 my-2 rounded">
        <h3 className="text-lg font-semibold mb-2">Technical Information:</h3>
        <ul className="text-gray-700 space-y-1">
          <li>
            <strong>Material:</strong> {selectedProduct.technicals[0]}
          </li>
          <li>
            <strong>Colour:</strong> {selectedProduct.technicals[1]}
          </li>
          <li>
            <strong>Hardness:</strong> {selectedProduct.technicals[2]}
          </li>
          <li>
            <strong>Tensile Strength:</strong> {selectedProduct.technicals[3]}
          </li>
          <li>
            <strong>Load Bearing Capacity:</strong>{" "}
            {selectedProduct.technicals[4]}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Technical;
