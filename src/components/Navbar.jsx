import React from "react";
import { Icon } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="w-full text-white fixed top-0">
      <div className="flex justify-around py-4 items-center">
        <div>
          <img
            src={Icon.logo}
            alt=""
            className="w-10 filter invert-100 h-10 rounded-full"
          />
        </div>
        <div>
          <nav className="flex gap-7 list-none">
            <li className="text-lg font-semibold cursor-pointer hover:text-orange-400">Home</li>
            <li className="text-lg font-semibold cursor-pointer hover:text-orange-400">About</li>
            <li className="text-lg font-semibold cursor-pointer hover:text-orange-400">News</li>
            <li className="text-lg font-semibold cursor-pointer hover:text-orange-400">Contact</li>
            <li className="text-lg font-semibold cursor-pointer hover:text-orange-400">Shop</li>
          </nav>
        </div>
        <div className="flex gap-5">
          <Icon.FaCartPlus  className="text-lg cursor-pointer"/>
          <Icon.FaSearch  className="text-lg cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
