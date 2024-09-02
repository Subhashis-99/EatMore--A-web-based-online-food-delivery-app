import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-between p-8 bg-white rounded-md shadow-md">
      <div>
        <h2 className="text-2xl font-bold mb-2">Account</h2>
        <p className="text-gray-600 mb-4">
          To place your order now, log in to your existing account or sign up.
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 border-2 border-green-500 text-green-500 font-semibold rounded-md hover:bg-green-500 hover:text-white text-center">
            <div className="block">
              <span className="text-sm">Have an account?</span>
              <span className="block font-bold">LOG IN</span>
            </div>
          </button>
          <button className="px-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 text-center">
            <div className="block">
              <span className="text-sm">New to Swiggy?</span>
              <span className="block font-bold">SIGN UP</span>
            </div>
          </button>
        </div>
      </div>
      <div className="w-32 mt-3">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
          alt="Illustration"
          className="w-full h-auto rounded-full"
        />
      </div>
    </div>
  );
};

export default Contact;
