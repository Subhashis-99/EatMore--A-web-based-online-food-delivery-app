import React from "react";

function OnYourMind({ catagoryList }) {
  return (
    <>
      <div className="w-[90%] mx-auto mt-7 mb-10 p-2 overflow-hidden ">
        <div>
          <h1 className="font-bold text-3xl">What's on your mind?</h1>
        </div>
        <hr className="mt-3" />
        <div className="flex ">
          {catagoryList?.map((item) => {
            return (
              <img
                className="w-32"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
                alt="onyourmind"
                key={item.imageId}
              />
            );
          })}
        </div>
        <hr className="mt-4" />
      </div>
    </>
  );
}

export default OnYourMind;
