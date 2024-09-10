import React from "react";

const ServicesSection = () => (
  <div className="p-5 lg:p-8 bg-gray-100 min-h-screen">
    <div className="max-w-full lg:max-w-4xl mx-auto animate-fadeInUp">
      <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 lg:mb-8 text-center">
        Our Services
      </h1>
      <p className="text-base lg:text-lg text-gray-700 mb-6 lg:mb-8 text-center leading-relaxed">
        At EatMore, we strive to provide a seamless and enjoyable food delivery experience. Our services include:
      </p>
      <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
        <div className="space-y-4 lg:space-y-6">
          <div className="flex items-center gap-3 transform transition duration-500 hover:scale-105">
            <img
              src="https://img.icons8.com/stickers/50/delivery-tracking.png"
              alt="Real-time tracking"
              className="w-8 lg:w-10 h-8 lg:h-10"
            />
            <span className="text-base lg:text-xl font-medium text-gray-800">
              Real-time tracking of your food delivery
            </span>
          </div>
          <div className="flex items-center gap-3 transform transition duration-500 hover:scale-105">
            <img
              src="https://img.icons8.com/fluency/50/choose.png"
              alt="Curated selection"
              className="w-8 lg:w-10 h-8 lg:h-10"
            />
            <span className="text-base lg:text-xl font-medium text-gray-800">
              Curated selection of top restaurants
            </span>
          </div>
          <div className="flex items-center gap-3 transform transition duration-500 hover:scale-105">
            <img
              src="https://img.icons8.com/color/50/easy.png"
              alt="Easy-to-use interface"
              className="w-8 lg:w-10 h-8 lg:h-10"
            />
            <span className="text-base lg:text-xl font-medium text-gray-800">
              Easy-to-use interface for ordering
            </span>
          </div>
          <div className="flex items-center gap-3 transform transition duration-500 hover:scale-105">
            <img
              src="https://img.icons8.com/external-others-pike-picture/50/external-Delivery-Service-post-others-pike-picture.png"
              alt="Fast and reliable delivery"
              className="w-8 lg:w-10 h-8 lg:h-10"
            />
            <span className="text-base lg:text-xl font-medium text-gray-800">
              Fast and reliable delivery service
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ServicesSection;
