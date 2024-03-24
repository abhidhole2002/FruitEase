import React from "react";
import { Icon } from "../../assets/assets";

const Productcard = ({ img, name, price }) => {
  return (
    <div className="w-60 p-3 bg-white-300 shadow-2xl rounded-md hover:bg-gray-100">
      <div className="flex justify-center">
        <img src={img} alt="" className="h-44 w-52" />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold pt-3">{name}</h1>
        <h1 className="text-sm text-gray-600 pb-3 ">Per Kg</h1>
        <h1 className="text-2xl font-bold mb-3">{price}</h1>
        <button className="bg-orange-600 flex items-center gap-2 px-3 py-2 rounded-2xl mx-auto mb-4">
          <Icon.FaCartPlus className="text-sm font-semibold text-white" />
          <h1 className="text-sm font-semibold text-white">Add to cart</h1>
        </button>
      </div>
    </div>
  );
};

export default Productcard;
