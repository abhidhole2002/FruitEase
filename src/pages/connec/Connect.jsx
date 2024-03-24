import React from "react";
import { Icon } from "../../assets/assets";

const Connect = () => {
  return (
    <div className="bg-gray-200 flex justify-center w-full gap-48 py-24 sm:flex-col sm:items-center ">
      <div className="flex gap-2 items-center justify-center ">
        <div className="border-2 border-dashed border-orange-600 p-3 rounded-full">
          <Icon.CiDeliveryTruck className="text-3xl text-orange-600" />
        </div>
        <div>
          <h1 className="text-lg font-bold">Free Shipping</h1>
          <h1 className="text-sm font-semibold text-gray-600">When order over $75</h1>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="border-2 border-dashed border-orange-600 p-3 rounded-full">
          <Icon.CiDeliveryTruck className="text-3xl text-orange-600" />
        </div>
        <div>
          <h1 className="text-lg font-bold">24/7 Support</h1>
          <h1 className="text-sm font-semibold text-gray-600">Get support all day</h1>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="border-2 border-dashed border-orange-600 p-3 rounded-full">
          <Icon.CiDeliveryTruck className="text-3xl text-orange-600" />
        </div>
        <div>
          <h1 className="text-lg font-bold">Refund</h1>
          <h1 className="text-sm font-semibold text-gray-600">Get refund within 3 days!</h1>
        </div>
      </div>
    </div>
  );
};

export default Connect;
