import React, { useState } from "react";
import { vegIcon, nonVegIcon } from "../../config";
import { Link } from "react-router-dom";
import DetailCard from "./DetailCard";
const Dishes = ({
  data: {
    card: {
      card: {
        info,
        restaurant: {
          info: {
            id,
            name: resName,
            avgRating,
            sla: { slaString },
          },
        },
      },
    },
  },
}) => {
  const [showDescription, setShowDescription] = useState(false);
  let { imageId = "", name, description, price, isVeg = 0 } = info;

  const handleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="relative bg-white m-4 rounded-2xl px-5 py-2 h-full">
      {showDescription && (
        <DetailCard
          description={description}
          imageId={imageId}
          onClose={() => setShowDescription(false)}
        />
      )}
      <div
        className={`transition-all duration-300 ${
          showDescription ? "blur-sm" : ""
        }`}
      >
        <div className="flex justify-between text-sm opacity-50">
          <div>
            <Link to={`/restaurant/${id}`}>
              <p className="font-bold hover:underline line-clamp-1">By {resName}</p>
            </Link>
            <div className="my-2 flex items-center gap-2">
              <i className="fi fi-rr-square-star mt-1"></i>
              <span>
                {avgRating} · {slaString.toLowerCase()}
              </span>
            </div>
          </div>
          <i className="fi fi-rr-arrow-small-right text-2xl"></i>
        </div>
        <hr className="border border-dotted" />
        <div className="my-3 max-w-fit flex justify-between">
          <div className="w-[50%]">
            <div className="w-5 h-5 mt-1">
              {isVeg ? (
                <img src={vegIcon} alt="Veg Icon" />
              ) : (
                <img src={nonVegIcon} alt="Non-Veg Icon" />
              )}
            </div>

            <p className="text-lg font-semibold">{name}</p>

            <div className="flex gap-1">
              <i className="fi fi-tr-indian-rupee-sign text-sm mt-[6px]"></i>
              <p className="text-lg font-semibold">{price / 100}</p>
            </div>
            <button
              className="flex items-center gap-1 px-2 border-2 rounded-2xl mt-2"
              onClick={handleDescription}
            >
              <h2>{showDescription ? "Hide Details" : "More Details"}</h2>
              <i className="fi fi-rr-angle-small-right mt-2"></i>
            </button>
          </div>
          <div className="w-[40%] md:w-[40%] relative h-full">
            {imageId ? (
              <img
                className="w-[270px] h-[130px] object-cover rounded-md"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
                alt="Food Item"
              />
            ) : (
              <img
                className="w-[270px] h-[130px] object-cover rounded-md"
                src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/05/Skipping-Dinner.jpg?quality=82&strip=1"
                alt="Food Item"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dishes;
