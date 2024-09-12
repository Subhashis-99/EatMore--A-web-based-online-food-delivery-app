import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { removeResInfo } from "../utils/resInfoSlice";
import { vegIcon, nonVegIcon } from "../../config";
import toast from "react-hot-toast";
import { useNavigate, Link } from "react-router-dom";
import EmptyCartMessage from "./EmptyCartMessage";

/**
 * - cartItems: Items in the cart from Redux store.(MENU)
 * - cartData:Retrieves the existing cart data from localStorage, which stores the    current cart's restaurant info.
 * - AuthUserData: Authenticated user data from Redux store.
 * - ClearItem(): Removes a specific item from the cart(imported from cartSlicer)
 * - removeResInfo(): removes information about the current restaurant selected by    the user.(Imported from resInfoSlicer)
 * - DeleteCart(): Clears all cart items and data.
 * - calculateItemTotal(): Computes total cost of items.
 * - calculateDeliveryFee(): Computes delivery fee.
 * - calculateTotalAmount(): Computes total payable amount.
 * - handlePlaceOrder(): Handles order placement, checks user authentication.
 */

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.cart.items);
  const AuthUserData = useSelector((store) => store.auth.AuthUserData);
  const cartData = JSON.parse(localStorage.getItem("CARTDATA")) || {};
    // Print cartData to the console


  const ClearItem = (index) => {
    if (cartItems.length > 1) {
      const updatedCart = cartItems.filter((_, i) => i !== index);
      dispatch(removeItem(updatedCart));
      toast.success("Item removed from cart");
    } else {
      // If only one item is left, clear the entire cart
      DeleteCart();
    }
  };

  const DeleteCart = () => {
    dispatch(clearCart());
    dispatch(removeResInfo());
    localStorage.removeItem("CARTDATA");
    toast.success("Cart has been cleared");
  };

  const calculateItemTotal = () => {
    return cartItems
      .reduce(
        (total, item) => total + (item.price || item.defaultPrice) / 100,
        0
      )
      .toFixed(2);
  };

  const calculateDeliveryFee = () => {
    return (cartData?.feeDetails?.totalFee / 100 || 0).toFixed(2);
  };

  const platformFee = 6.0;
  const gstAndCharges = 23.53;

  const calculateTotalAmount = () => {
    const itemTotal = parseFloat(calculateItemTotal());
    const deliveryFee = parseFloat(calculateDeliveryFee());
    return (itemTotal + deliveryFee + platformFee + gstAndCharges).toFixed(2);
  };

  const handlePlaceOrder = () => {
    if (!AuthUserData) {
      navigate("/signIn");
    } else {
      toast.success("Order placed successfully!");
      // Additional order placement logic can be added here
    }
  };

  if (cartItems.length === 0) {
    return <EmptyCartMessage />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Main Container */}
      <div className="bg-white w-full max-w-5xl shadow-md p-6 mt-5 md:flex">
        {/* Left Section - Delivery Address and Payment Method */}
        <div className="w-full md:w-2/3 pr-0 md:pr-6">
          {/* Delivery Address */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-2">Delivery Address</h2>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="font-semibold">Work</p>
              <p className="text-gray-600">
                {cartData?.labels?.[1]?.message || cartData?.areaName || "N/A"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {cartData?.sla?.slaString || "Delivery time not available"}
              </p>
              <button className="text-orange-500 font-bold mt-2">
                CHANGE
              </button>
            </div>
          </div>

          {/* Payment Method or Account Prompt */}
          <div className="mb-6">
            {AuthUserData ? (
              <>
                <h2 className="text-xl font-bold mb-2">
                  Choose Payment Method
                </h2>
                <button
                  className="bg-green-500 text-white w-full py-3 rounded-md font-bold text-lg my-2"
                  onClick={handlePlaceOrder}
                >
                  PROCEED TO PAY
                </button>
              </>
            ) : (
              <div className="flex items-center justify-between p-8 bg-white rounded-md shadow-md">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Account</h2>
                  <p className="text-gray-600 mb-4">
                    To place your order now, log in to your existing account or
                    sign up.
                  </p>
                  <div className="flex space-x-4">
                    <button
                      className="px-7 py-2 border-[1.5px] border-green-500 text-green-500 font-semibold rounded-md hover:shadow-lg"
                      onClick={() => navigate("/signIn")}
                    >
                      <div>
                        <span className="text-sm">Have an account?</span>
                        <span className="block font-bold">LOG IN</span>
                      </div>
                    </button>
                    <button
                      className="px-7 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600"
                      onClick={() => navigate("/signUp")}
                    >
                      <div>
                        <span className="text-sm">New to EatMore?</span>
                        <span className="block font-bold">SIGN UP</span>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="w-32 mt-3 hidden lg:block">
                  <img
                    src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
                    alt="Illustration"
                    className="w-full h-auto rounded-full"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section - Order Summary */}
        <div className="w-full md:w-1/3 bg-gray-50 p-4 rounded-md">
          {/* Restaurant Details */}
          <div className="mb-4">
            <Link to={`/restaurant/${cartData?.id}`}>
              <h3 className="font-bold text-lg hover:underline underline-offset-4">
                {cartData?.name || "Restaurant Name"}
              </h3>
            </Link>
            <p className="text-sm text-gray-500">
              {cartData?.locality || "Restaurant Locality"}
            </p>
          </div>

          {/* Cart Items */}
          {cartItems.map(
            (
              { name, price, defaultPrice, itemAttribute: { vegClassifier}=" " },
              index
            ) => (
              <div
                key={index}
                className="flex justify-between items-start mb-4"
              >
                <div className="flex flex-col items-start">
                  <div className="flex items-start">
                    <img
                      className="w-5 rounded-md object-contain mt-3"
                      src={vegClassifier === "VEG" ? vegIcon : nonVegIcon}
                      alt="Food Classification"
                    />
                    <p className="m-2 font-semibold">{name}</p>
                  </div>
                  <div className="flex gap-1">
                    <button className="border border-green-400 rounded-md px-2 drop-shadow-md text-sm">
                      Customize
                    </button>
                    <button
                      className="bg-orange-200 rounded-lg p-2"
                      onClick={() => ClearItem(index)}
                    >
                      <i className="fi fi-rs-trash mt-[8px]"></i>
                    </button>
                  </div>
                </div>
                <p className="font-bold mt-[9px]">
                  ₹{(price || defaultPrice) / 100}
                </p>
              </div>
            )
          )}

          {/* Delivery Options */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-green-500"
              />
              <span className="ml-2 text-gray-600">
                Opt in for No-contact Delivery
              </span>
            </label>
            <p className="text-xs text-gray-500 mt-1">
              Unwell or avoiding contact? Please select no-contact delivery.
              Partner will safely place the order outside your door (not for COD).
            </p>
          </div>

          {/* Coupon Section */}
          <div className="mb-4">
            <button className="bg-white border w-full py-2 text-center rounded-md font-bold text-gray-700 drop-shadow-md">
              Apply Coupon
            </button>
          </div>

          {/* Bill Details */}
          <div className="mb-4">
            <h4 className="font-bold text-lg mb-2">Bill Details</h4>
            <div className="flex justify-between text-sm text-gray-700">
              <p>Item Total</p>
              <p>₹{calculateItemTotal()}</p>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <p>Delivery Fee | {cartData?.feeDetails?.restaurantFeeMessage}</p>
              <p>₹{calculateDeliveryFee()}</p>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <p>Platform Fee</p>
              <p>₹{platformFee.toFixed(2)}</p>
            </div>
            <div className="flex justify-between text-sm text-gray-700">
              <p>GST and Restaurant Charges</p>
              <p>₹{gstAndCharges.toFixed(2)}</p>
            </div>
            <div className="flex justify-between font-bold text-lg text-gray-800 mt-2">
              <p>Total Amount</p>
              <p>₹{calculateTotalAmount()}</p>
            </div>
          </div>

          {/* Clear Cart Button */}
          <div className="mb-4">
            <button
              className="bg-red-500 text-white w-full py-3 rounded-md font-bold text-lg hover:bg-red-600"
              onClick={DeleteCart}
            >
              CLEAR CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
