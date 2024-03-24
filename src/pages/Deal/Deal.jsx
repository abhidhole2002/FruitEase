import React from "react";
import { Icon } from "../../assets/assets";

const Deal = () => {
  return (
    <div className="flex w-full bg-gray-100 items-center px-4 py-10 mx-auto justify-center mt-24 relative sm:flex-col">
      <div>
        <img src={Icon.deal} alt="" className="sm:w-80" />
        <div className="bg-orange-400 w-24 h-24 text-center pt-4 rounded-full absolute top-24  ">
          <h1 className="font-bold">
            30%<br></br>off per kg
          </h1>
        </div>
      </div>
      <div className="p-4 w-2/5">
        <h1 className="text-4xl font-bold mb-2">
          <span className="text-orange-600">Deal </span>
          of the month
        </h1>
        <h1 className="text-lg mb-4 text-gray-700 font-semibold ">
          HIKAN STRWABERRY
        </h1>
        <p className="text-md w-2/3">
          Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam
          similique! Beatae, minima quisquam molestias facere ea. Perspiciatis
          unde omnis iste natus error sit voluptatem accusant
        </p>
        <p className="border-2 w-28 border-orange-600 p-2 my-4">Date data</p>
        <button className="bg-orange-600 flex items-center gap-2 px-3 py-2 rounded-2xl  mb-4">
          <Icon.FaCartPlus className="text-sm font-semibold text-white" />
          <h1 className="text-sm font-semibold text-white">Add to cart</h1>
        </button>
      </div>
    </div>
  );
};

export default Deal;
