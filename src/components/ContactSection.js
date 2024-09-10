import React from "react";
import { Link } from "react-router-dom";

const ContactSection = () => (
  <div className="p-5 lg:p-10 bg-gray-100 min-h-screen animate-fadeInUp">
    <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 lg:mb-9 text-center mt-3 underline underline-offset-8 animate-fadeInUp">
      Contact Us
    </h1>
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-8 p-5 lg:p-11 animate-fadeInUp">
      <div className="flex flex-col items-center justify-between gap-4 animate-fadeInUp">
        <i className="fi fi-sr-phone-rotary text-4xl lg:text-6xl text-orange-500"></i>
        <h2 className="text-base lg:text-lg font-semibold text-gray-900 tracking-[.20em] lg:tracking-[.30em] animate-fadeInUp">
          BY PHONE
        </h2>
        <p className="text-gray-600 text-sm lg:text-xl text-center animate-fadeInUp">
          Get telephone support by signing into your account.
        </p>
        <Link to="/signIn">
          <button className="bg-white text-black border border-gray-300 rounded-sm hover:bg-orange-400 hover:text-white px-8 lg:px-10 py-1 lg:py-2 animate-fadeInUp">
            LOG IN
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 animate-fadeInUp">
        <i className="fi fi-br-add-document text-4xl lg:text-6xl text-orange-500"></i>
        <h2 className="text-base lg:text-lg font-semibold text-gray-900 tracking-[.20em] lg:tracking-[.30em]  animate-fadeInUp">
          START A NEW CASE
        </h2>
        <p className="text-gray-600 text-sm lg:text-xl text-center w-full lg:w-[70%] animate-fadeInUp">
          Just send us your questions or concerns by starting a new case and we
          will give you the help you need.
        </p>
        <button className="bg-white text-black border border-gray-300 rounded-sm hover:bg-orange-400 hover:text-white px-20 lg:px-28 py-1 lg:py-2 mt-5 animate-fadeInUp">
          START HERE
        </button>
      </div>
      <div className="flex flex-col items-center justify-between gap-4 animate-fadeInUp">
        <i className="fi fi-ss-comment-sms text-4xl lg:text-6xl text-orange-500"></i>
        <h2 className="text-base lg:text-lg font-semibold text-gray-900 tracking-[.20em] lg:tracking-[.30em] animate-fadeInUp">
          LIVE CHAT
        </h2>
        <p className="text-gray-600 text-sm lg:text-xl text-center animate-fadeInUp">
          Chat with a member of our in-house team.
        </p>
        <button className="bg-white text-black border border-gray-300 rounded-sm hover:bg-orange-400 hover:text-white px-8 lg:px-10 lg:py-2 animate-fadeInUp">
          START CHAT
        </button>
      </div>
    </div>
  </div>
);

export default ContactSection;
