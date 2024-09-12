import React, { useState } from "react";
import { vegIcon, nonVegIcon, closedIcon } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import AddToCart from "./AddToCart";
import { toggleDiffRes } from "../utils/toggleSlice";

// resInfo: Contains information about the current restaurant selected by the user.
// cartData: Retrieves the existing cart data from localStorage, which stores the current cart's restaurant info.(resInfo value is populated under certain condition)
// handleDifRes: A function to toggle the display of a prompt when a user tries to add items from a different restaurant.
// DeleteCart: Clears the current cart data from both the Redux store and localStorage, allowing the user to start a fresh cart.
// addFoodItem: Adds a selected food item to the cart if the restaurant matches, otherwise prompts the user with the option to clear the cart.

function DetailMenuCard({ info }) {
  // Destructuring properties from the info object
  const {
    name,
    price,
    defaultPrice,
    itemAttribute: { vegClassifier } = " ",
    ratings: {
      aggregatedRating: { rating, ratingCountV2 },
    },
    description = " ",
    imageId,
  } = info;

  // State for toggling full description view and different restaurant alert
  const [isMore, setIsMore] = useState(false);
  const isDiffRes = useSelector((state) => state.toggle.isDiffRes);
  const dispatch = useDispatch();

  // Trimmed description for display if it's too long
  let trimDescription = description?.substring(0, 138) + "...";

  const handleDifRes = () => {
    dispatch(toggleDiffRes());
  };

  const DeleteCart = () => {
    dispatch(clearCart()); // Clear the cart items from Redux store
    localStorage.removeItem("CARTDATA"); // Remove cart data from localStorage
    handleDifRes(); // Close the different restaurant alert
  };

  return (
    <>
      {/* Main card container */}
      <div className="flex w-full justify-between min-h-[172px] relative">
        <div className=" w-[55%] md:w-[70%] px-0 md:px-5">
          {/* Food classification icon */}
          <img
            className="w-5 rounded-md"
            src={vegClassifier === "VEG" ? vegIcon : nonVegIcon}
            alt="Food Classification"
          />
          {/* Item name */}
          <h2 className="font-bold text-lg">{name}</h2>
          {/* Item price */}
          <p className="font-semibold text-lg">
            ₹{defaultPrice / 100 || price / 100}
          </p>
          {/* Item rating */}
          <p className="flex gap-2 ">
            <i className="fi fi-ss-star mt-[2px]"></i>
            {rating && ratingCountV2 ? (
              <>
                <span>{rating}</span>
                <span> ({ratingCountV2})</span>
              </>
            ) : (
              <span> (0)</span>
            )}
          </p>
          {/* Description with toggle for more/less */}
          {description?.length > 140 ? (
            <div className="flex flex-wrap">
              <p className="text-slate-600 line-clamp-2 md:line-clamp-none">
                {isMore ? description : trimDescription}
              </p>
              <button
                className="font-bold ml-1 underline text-orange-300 hidden md:block"
                onClick={() => setIsMore(!isMore)}
              >
                {isMore ? "less" : "more"}
              </button>
            </div>
          ) : (
            <p className="text-slate-600">{description}</p>
          )}
        </div>
        <div className="w-[35%] md:w-[20%] relative h-full">
          {/* Item image or closed icon */}
          {imageId ? (
            <img
              className="w-auto md:w-[170px] h-auto md:h-[170px] rounded-md"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              alt="Food Item"
            />
          ) : (
            <img src={closedIcon} />
          )}
          <AddToCart info={info} handleDifRes={handleDifRes} />
        </div>
      </div>

      {/* Separator line */}
      <hr className="my-8" />

      {/* Different restaurant alert */}
      {isDiffRes && (
        <div className=" w-[280px] h-auto md:w-[520px] md:h-[220px] border-2 shadow-inner fixed bottom-0 left-[13%] md:left-[17%] lg:left-[26%] bg-white p-4 md:p-8 flex flex-col gap-3 z-50">
          <h1 className="text-sm md:text-lg font-semibold">
            Items already in cart
          </h1>
          <p className="text-sm md:text-lg text-zinc-600">
            Your cart contains items from another restaurant. Would you like to
            reset your cart for adding items from this restaurant?
          </p>
          <div className="flex justify-between w-full gap-3 ">
            <button
              className="border-2 w-1/2 p-1 md:p-2 border-green-600 text-green-600 text-xs md:text-base hover:shadow-lg hover:scale-95"
              onClick={() => handleDifRes()}
            >
              No
            </button>
            <button
              className="w-1/2 p-1 md:p-2 bg-green-600 text-white text-xs md:text-base hover:shadow-lg hover:scale-95"
              onClick={() => DeleteCart()}
            >
              YES, START AFRESH
            </button>
          </div>
        </div>
      )}
    </>
  );
}

// Component to render a list of menu items
function DetailMenu({ itemCards }) {
  return (
    <div className="my-5">
      {/* Render DetailMenuCard for each item */}
      {itemCards.map(({ card: { info } }, index) => (
        <DetailMenuCard key={index} info={info} />
      ))}
    </div>
  );
}

export default DetailMenu;
