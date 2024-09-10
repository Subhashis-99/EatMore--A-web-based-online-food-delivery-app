import React from "react";
import { Restaurant_Title_URL } from "../../config";

const AboutSection = () => (
  <div className="relative min-h-screen flex flex-col justify-start pt-1 pb-8 px-3 lg:px-5 animate-fadeInUp">
    <div className="flex flex-col lg:flex-row lg:space-x-8 h-auto lg:h-[500px] w-full lg:justify-between gap-4 overflow-hidden rounded-lg bg-gray-100 shadow-lg border border-gray-200 mx-auto animate-fadeInUp">
      <div className="flex flex-col justify-start lg:w-[60%] p-8 lg:p-8 animate-fadeInUp">
        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 underline underline-offset-8 font-lobster animate-fadeInUp">
          About Us
        </h1>
        <p className="text-sm lg:text-lg text-gray-700 mb-4 leading-relaxed text-justify animate-fadeInUp">
          Welcome to <span className="text-blue-600 font-bold">EatMore</span>,
          where technology meets taste! Our cutting-edge food delivery app is
          designed to make your dining experience seamless and enjoyable. With a
          user-friendly interface, real-time tracking, and a curated selection
          of your favorite restaurants, we ensure that every meal is delivered
          with speed and quality. Whether you’re craving a gourmet feast or a
          quick snack, EatMore is here to satisfy your hunger with just a few
          taps.
        </p>
        <p className="text-sm lg:text-lg text-gray-700 leading-relaxed text-justify animate-fadeInUp">
          Our mission is to bring you the best food delivery experience
          possible. We are constantly working to enhance our service and make
          sure that every meal you order meets your expectations.
        </p>
      </div>
      <div className="flex items-center justify-center lg:w-[40%] animate-fadeInUp lg:mt-[-20px] p-7 lg:p-0">
        {" "}
        {/* Adjusted margin-top */}
        <img
          src={Restaurant_Title_URL}
          alt="About EatMore"
          className="object-contain rounded-2xl shadow-2xl border-2 border-gray-200 "
        />
      </div>
    </div>
  </div>
);

export default AboutSection;
