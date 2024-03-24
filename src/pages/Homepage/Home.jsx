import React from "react";
import Navbar from "../../components/Navbar";
import { Icon } from "../../assets/assets";
import Connect from "../connec/Connect";

const Home = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `Url(${Icon.homeimg})`,
        }}
        className="bg-cover bg-center h-screen relative top-0 "
      >
        <Navbar />
        <div className="text-white  w-1/3 mx-auto text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <h1 className="text-md text-orange-600  font-semibold tracking-widest leading-8">
            FRESH & ORGANIC
          </h1>
          <h1 className=" mt-5 text-5xl font-bold tracking-widest">
            Delicious Seasonal Fruits
          </h1>
          <div className="flex mt-8 justify-center py-5 gap-3">
            <button className="bg-orange-600 w-40 py-1 rounded-3xl">
              Fruit Collection
            </button>
            <button className="border-2 border-orange-600 w-40 py-1 rounded-3xl hover:bg-orange-600">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <Connect />
    </div>
  );
};

export default Home;
