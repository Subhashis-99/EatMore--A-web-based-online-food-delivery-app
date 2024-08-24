import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Title from "./Title";
import { useSelector } from "react-redux";
import dummy from "../assets/images/dummy.png";
import usePageAnimations from "../utils/usePageAnimations";
import { Coordinates } from "../utils/userContext";

export const Header = () => {
  const { navRef, oldNavbarRef } = usePageAnimations();

  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  const {coordinate: { address },} = useContext(Coordinates);


  return (
    <div ref={oldNavbarRef} className="  bg-white  shadow-md">
      <div className="w-4/5 m-auto flex justify-between items-center">
        <Title />
        <span className=" truncate text-green-600 underline w-36 ">
          {address}
        </span>
        <div className="nav-items flex">
          <ul
            ref={navRef}
            className="h-full flex justify-between gap-5 text-xl"
          >
            <li className="hover-navbar">
              <Link to="/">Home</Link>
            </li>

            <li className="hover-navbar">
              <Link to="/about"> About us </Link>
            </li>
            <li className="hover-navbar">Contact</li>
            <li className="hover-navbar" data-testid="cart-count">
              <Link to="/cart">
                <div className="flex gap-2 mt-[2px] ">
                  <i className="fi fi-rr-shopping-bag "></i>
                  <p className="bg-orange-200 rounded-md w-6 h-6 flex items-center justify-center text-sm">
                    {cartItems.length}
                  </p>
                </div>
              </Link>
            </li>
            <li className="hover-navbar">
              <Link to="/instamart">QuickBasket</Link>
            </li>
            <li className="hover-navbar">
              {isLoggedIn ? (
                <button onClick={() => SetIsLoggedIn(false)}>
                  Log out
                  <span
                    className={isOnline ? "text-green-600" : "text-red-600"}
                  >
                    {" "}
                    ●
                  </span>
                </button>
              ) : (
                <button onClick={() => SetIsLoggedIn(true)}>
                  Log In
                  <span
                    data-testid="online-status"
                    className={isOnline ? "text-green-600" : "text-red-600"}
                  >
                    {" "}
                    ●
                  </span>
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
