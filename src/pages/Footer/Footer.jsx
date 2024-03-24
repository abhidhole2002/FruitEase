import React from "react";
import { Icon } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-700">
      <div className=" text-white flex justify-center gap-28 py-10 sm:flex-col items-center">
        <div>
          <h1 className="text-xl font-semibold">About us</h1>
          <p className="w-60 text-sm mt-5">
            Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae.
          </p>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Get in Touch</h1>
          <p className="text-sm mt-5 w-40">
            34/8, demo address. support@domain.com +00 111 222 3333
          </p>
        </div>

        <div>
          <h1 className="text-xl font-semibold">Subscribe</h1>
          <p className="text-sm mt-5 w-40">
            Subscribe to our mailing list to get the latest updates.
          </p>
          <div className="flex gap-2 items-center mt-4 bg-white px-3">
            <input
              type="text"
              placeholder="Email"
              className="px-4 py-1 focus:outline-none
              text-black"
            />
            <Icon.IoIosSend className="text-black " />
          </div>
        </div>
      </div>

      <hr className="mx-40" />
      <h1 className=" text-white text-center text-sm mx-auto py-3">Copyrights © 2024 , All Rights Reserved.</h1>
    </div>
  );
};

export default Footer;
