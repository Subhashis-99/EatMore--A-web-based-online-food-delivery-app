import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { additem, clearCart } from "../utils/cartSlice";
import toast from "react-hot-toast";

function AddToCart({ info, handleDifRes }) {
  const resInfo = useSelector((store) => store.resInfo.data);
  const dispatch = useDispatch();

  const addFoodItem = () => {
    const cartData = JSON.parse(localStorage.getItem("CARTDATA")) || [];

    const isSameRestaurant =
      cartData.length === 0 || cartData.name === resInfo.name;

    if (isSameRestaurant) {
      localStorage.setItem("CARTDATA", JSON.stringify(resInfo));
      dispatch(additem(info));
      toast.success("Item added!");
    } else {
      handleDifRes();
    }
  };

  return (
    <button
      className="bg-white border px-3 md:px-8 py-2 drop-shadow rounded-xl text-lg font-bold text-green-500 absolute bottom-[-20px] left-1/2 -translate-x-1/2"
      onClick={addFoodItem}
    >
      ADD
    </button>
  );
}

export default AddToCart;
