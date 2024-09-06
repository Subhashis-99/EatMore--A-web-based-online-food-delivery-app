import React, { useState } from "react";
import { vegIcon, nonVegIcon, closedIcon } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { additem, clearCart } from "../utils/cartSlice"; // Combined import from cartSlice
import toast from "react-hot-toast"; // Importing toast for notifications

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
    itemAttribute: { vegClassifier} = " ",
    ratings: { aggregatedRating: { rating, ratingCountV2 } },
    description = " ",
    imageId,
  } = info;

  // State for toggling full description view and different restaurant alert
  const [isMore, setIsMore] = useState(false);
  const [isDiffRes, setIsDefRes] = useState(false);

  // Trimmed description for display if it's too long
  let trimDescription = description?.substring(0, 138) + "...";

  const resInfo = useSelector((store) => store.resInfo.data); 
  const dispatch = useDispatch(); 

  const addFoodItem = (info) => {
    const cartData = JSON.parse(localStorage.getItem("CARTDATA")) || []; 

    const isSameRestaurant =
      cartData.length === 0 || cartData.name === resInfo.name; // Check if cart is empty or from the same restaurant

    if (isSameRestaurant) {
      localStorage.setItem("CARTDATA", JSON.stringify(resInfo)); // Update localStorage with current restaurant info
      dispatch(additem(info)); 
      toast.success("Item added!"); // Show success toast
    } else {
      handleDifRes(); // Handle different restaurant scenario
    }
  };

  const handleDifRes = () => {
    setIsDefRes((prev) => !prev); // Toggle the different restaurant alert
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
        <div className="w-[70%]">
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
            <div className="flex">
              <p className="text-slate-600">
                {isMore ? description : trimDescription}
              </p>
              <button
                className="font-bold ml-1 underline text-orange-300"
                onClick={() => setIsMore(!isMore)}
              >
                {isMore ? "less" : "more"}
              </button>
            </div>
          ) : (
            <p className="text-slate-600">{description}</p>
          )}
        </div>
        <div className="w-[20%] relative h-full">
          {/* Item image or closed icon */}
          {imageId ? (
            <img
              className="w-[170px] h-[170px] object-cover rounded-md"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
              alt="Food Item"
            />
          ) : (
            <img src={closedIcon} />
          )}
          {/* ADD button */}
          <button
            className="bg-white border px-8 py-2 drop-shadow rounded-xl text-lg font-bold text-green-500 absolute bottom-[-20px] left-6"
            onClick={() => addFoodItem(info)}
          >
            ADD
          </button>
        </div>
      </div>

      {/* Separator line */}
      <hr className="my-8" />

      {/* Different restaurant alert */}
      {isDiffRes && (
        <div className="w-[520px] h-[194px] border shadow-md fixed bottom-0 left-[26%] bg-white p-8 flex flex-col gap-3 z-50">
          <h1 className="text-xl font-semibold">Items already in cart</h1>
          <p className="text-sm text-zinc-600">
            Your cart contains items from another restaurant. Would you like to
            reset your cart for adding items from this restaurant?
          </p>
          <div className="flex justify-between w-full  gap-3">
            <button
              className="border-2 w-1/2 p-2 border-green-600 text-green-600 hover:shadow-lg"
              onClick={() => handleDifRes()}
            >
              No
            </button>
            <button
              className="w-1/2 p-2 bg-green-600 text-white hover:shadow-lg"
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
