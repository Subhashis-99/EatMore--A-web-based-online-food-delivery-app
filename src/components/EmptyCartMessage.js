import React from "react";
import { Link } from "react-router-dom";
import { cartEmptyIcon } from "../../config";

const EmptyCartMessage = () => {
  return (
    <div className=" min-h-screen">
      <div className="flex flex-col justify-center items-center mt-9 gap-4">
        <img
          src={cartEmptyIcon}  alt="Empty Cart Illustration"
          className="w-64 h-64" // Added margin-bottom to move image up
        />
        {/* Cart Empty Text */}
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
        <p className="text-gray-500 ">
          You can go to the home page to view more restaurants
        </p>

        {/* Button */}
        <Link to="/">
          <button className="bg-orange-500 text-white font-bold py-3 px-6 mt-4 rounded-md hover:bg-orange-600 transition">
            SEE RESTAURANTS NEAR YOU
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCartMessage;
