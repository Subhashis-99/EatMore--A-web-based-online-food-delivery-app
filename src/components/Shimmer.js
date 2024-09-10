import { Restaurant_Title_URL } from "../../config";

export const LandingPageLoader = () => {
  return (
    <div>
      <div className="w-[95%] h-[100%] mx-auto flex flex-col md:flex-row bg-white mt-8 z-10 animate-pulse">
        {/* Left Section Shimmer */}
        <section className="w-full md:w-1/2 p-8 mt-5">
          <div className="space-y-3">
            <div className="bg-gray-100 h-8 w-1/4 mb-2 rounded-md"></div>
            <div className="bg-gray-200 h-10 w-2/3 mb-3 rounded-md"></div>
            <div className="bg-gray-100 h-6 w-1/2 mb-6 rounded-md"></div>
          </div>

          <div className="space-y-4 mt-4">
            <div className="bg-gray-200 h-10 w-full rounded-l-md"></div>
            <div className="bg-gray-300 h-8 w-1/2 rounded-md"></div>
          </div>
        </section>

        {/* Right Section Shimmer */}
        <section className="w-full md:w-1/2 p-20 -mt-16 hidden md:block">
          <div className="bg-gray-200 h-full w-full rounded-md"></div>
        </section>
      </div>

      <div className="w-[90%] mx-auto mt-7 mb-10  overflow-hidden animate-pulse">
        {/* Shimmer for the title */}
        <section>
          <div className="bg-gray-300 h-8 w-1/3 mb-3 rounded-md my-1"></div>
          <div className="flex justify-between items-center gap-7 bg-gray-100 p-9 my-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="w-28 h-28 rounded-full bg-gray-300 animate-pulse"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export const LocationFetchLoader = () => {
  return (
    <div className="w-full">
      <div className="w-full text-white flex justify-center items-center flex-col gap-5 h-[700px] bg-slate-900">
        <div className="relative flex item-start">
          <img
            src={Restaurant_Title_URL}
            className=" absolute rounded-xl opacity-45 w-[40px] h-[40px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          ></img>
          <span className="loader"></span>
        </div>

        <h1 className="text-3xl">Looking for great food near you....</h1>
      </div>
    </div>
  );
};

export const SearchRestaurantLoader = () => {
  return (
    <>
      <div className="res-card flex justify-center my-7">
        <div
          className="res-list flex flex-wrap m-5 ml-12"
          data-testid="shimmer"
        >
          {Array(12)
            .fill("")
            .map((_, index) => (
              <div
                className=" shimmer-card m-4 p-4 w-[250px] h-[200px] bg-gray-100 rounded-lg animate-bounce"
                key={index}
              ></div>
            ))}
        </div>
      </div>
    </>
  );
};


export const MenuLoader = () => {
  return (
    <div className="w-full lg:w-[60%] mx-auto mt-10">
      <div className="w-full h-52 bg-gray-200  rounded-xl animate-pulse"></div>
      <div className="w-full flex mt-5 justify-between">
        <div className="w-[45%] h-10 rounded-xl bg-gray-200 animate-pulse"></div>
        <div className="w-[45%] h-10 rounded-xl bg-gray-200 animate-pulse"></div>
      </div>
      <div className="w-full mt-10">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div className="w-full h-40 flex justify-between my-3" key={index}>
              <div className="w-[60%] flex flex-col gap-5 h-full">
                <div className="w-[100%] bg-gray-200 h-5 animate-pulse"></div>
                <div className="w-[50%] bg-gray-200 h-5 animate-pulse"></div>
                <div className="w-[30%] bg-gray-200 h-5 animate-pulse"></div>
              </div>
              <div className="w-[30%] h-full bg-gray-200 animate-pulse"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

import React from "react";

export const SearchResLoader = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-9 p-3'>
    {Array(10).fill("").map((_, index) => (
      <div
        key={index}
        className="bg-white p-2 rounded-lg h-full animate-pulse"
      >
        <div className="relative bg-white mb-2 rounded-lg p-2 h-full">
          <div className="flex justify-between text-sm opacity-50 mb-1">
            <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
            <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
          </div>
          <hr className="border border-dotted" />
          <div className="my-2 flex justify-between">
            <div className="w-[50%] flex flex-col gap-1">
              <div className="w-5 h-5 bg-gray-200 rounded-full mt-1 mb-1"></div>
              <div className="h-6 bg-gray-200 rounded mb-1 w-3/4"></div>
              <div className="h-6 bg-gray-200 rounded mb-1 w-1/4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="w-[40%] h-[130px] bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    ))}
  </div>
  );
};




