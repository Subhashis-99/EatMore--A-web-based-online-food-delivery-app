import React from "react";
import { Link } from "react-router-dom";
function SearchRestaurant({
  data: {
    card: {
      card: {
        info: {
          id,
          cloudinaryImageId,
          cuisines,
          costForTwoMessage,
          aggregatedDiscountInfoV3 = {},
          promoted = false,
          name,
          avgRating,
          sla: { slaString },
        },
      },
    },
  },
}) {
  return (
    <div className="bg-white m-4 p-4 flex gap-5 items-center md:mx-w-fit">
      <div className="w-[30%]">
        <img
          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`}
          className="aspect-square rounded-lg"
        />
      </div>
      <div className="w-[60%]">
        <Link to={`/restaurant/${id}`}>
          <p className="font-bold line-clamp-1">By {name}</p>
        </Link>
        <div className="my-2 flex items-center gap-2">
          <i className="fi fi-rr-square-star mt-1"></i>
          <span>
            {avgRating} · {costForTwoMessage.toLowerCase()}
          </span>
        </div>
        <p className="line-clamp-1 text-slate-500 text-sm">{cuisines.join(" ,")}</p>
      </div>
    </div>
  );
}

export default SearchRestaurant;
