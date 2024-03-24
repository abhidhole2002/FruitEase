import React from "react";
import Productcard from "./Productcard";
import { Icon } from "../../assets/assets";

const Product = () => {
  return (
    <div>
      <div className=" mt-2 w-1/2 mx-auto text-center p-6">
        <h1 className="text-3xl font-bold py-10">
          <span className="text-orange-600">Our</span> Products
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          fuga quas itaque eveniet beatae optio.
        </p>
      </div>
      <div className="flex py-6 justify-center gap-20 sm:flex-col items-center">
        <Productcard img={Icon.product1} name="Apple" price="20$" />
        <Productcard img={Icon.product2} name="Berry" price="40$" />
        <Productcard img={Icon.product3} name="Stawberry" price="30$" />
      </div>
    </div>
  );
};

export default Product;
