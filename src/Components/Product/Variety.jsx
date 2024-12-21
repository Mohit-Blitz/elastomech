import React from "react";
import { Products } from "../../Data/Products";

const Variety = ({ product }) => {
  const selectedProduct = Products.find((item) => item.id === product);

  return (
    <>
      <div className="bg-white shadow-sm  border border-gray-200  rounded-sm p-6 w-full">
        <h3 className="text-xl font-semibold  text-gray-700 mb-4">
          Types Available
        </h3>
        <div className="border-t border-gray-200 pt-4">
          <ul className="space-y-3 flex items-center">
            {selectedProduct.variety.map((variety, index) => (
              <li
                key={index}
                className="flex flex-col items-center space-x-2 text-gray-700"
              >
                <img src={variety.image} />
                <span className="inline-block text-yellow-400 rounded-full">
                  {variety.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Variety;
