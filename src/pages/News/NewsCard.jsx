import React from "react";
import { Icon } from "../../assets/assets";

const NewsCard = () => {
  return (
    <div className="w-64 rounded-md shadow-2xl hover:shadow-none transform hover:-translate-y-4 duration-100 delay-100 ">
      <div>
        <img src={Icon.product1} alt="" className="rounded-md w-full h-56" />
      </div>
      <div className="p-3">
        <h1 className="font-bold">
          You will vainly look for fruit on it in autumn.
        </h1>
        <div className="flex gap-4 py-2">
          <div className="flex gap-3 items-center">
            <Icon.FaUser className="text-xs" />
            <h1 className="text-xs">Admin</h1>
          </div>
          <div className="flex gap-3 items-center ">
            <Icon.FaRegCalendarAlt className="text-xs" />
            <h1 className="text-xs">27 December, 2045</h1>
          </div>
        </div>
        <p className="text-xs py-1">
          Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi.
          Praesent vitae mattis nunc, egestas viverra eros.
        </p>
        <button className="bg-black text-white text-sm py-1 px-2 mt-4">
          Read more
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
