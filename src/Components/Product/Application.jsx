import React from "react";
import { Products } from "../../Data/Products";

const Application = ({ product }) => {
  const selectedProduct = Products.find((item) => item.id === product);

  return (
    <>
      <div className="border p-3 mx-5 my-2 rounded">
        <h3 className="text-lg font-semibold mb-2">Applications:</h3>
        <ul className="list-disc list-inside text-gray-700">
          {selectedProduct.application.map((app, index) => (
            <li key={index} className="mb-1">
              {app}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Application;
