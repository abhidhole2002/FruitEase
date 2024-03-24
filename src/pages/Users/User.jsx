import React from "react";
import { Icon } from "../../assets/assets";

const User = () => {
  return (
    <div className="py-10 flex flex-col items-center text-center">
      <div>
        <div className="border border-black flex justify-center rounded-full py-5">
          <Icon.FaUser className="text-3xl" />
        </div>
        <h1 className="text-lg font-bold">User</h1>
        <h1 className="text-md ">Local Shop owner</h1>
      </div>
      <div className=" text-gray-500 w-1/2 mt-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          omnis dolore error nemo optio perferendis, accusamus quas consectetur,
          blanditiis vel vero voluptatibus aliquid magnam ut velit itaque quos
          fuga veniam dignissimos delectus consequuntur. Nam, reiciendis!
          Tempore nobis fuga accusantium deserunt.
        </p>
      </div>
    </div>
  );
};

export default User;
