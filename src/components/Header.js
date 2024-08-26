import { useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Title from "./Title";
import { useSelector } from "react-redux";
import dummy from "../assets/images/dummy.png";
import usePageAnimations from "../utils/usePageAnimations";
import { Coordinates } from "../utils/userContext";

export const Header = () => {
  const { navRef, oldNavbarRef } = usePageAnimations();

  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);
  const AuthUserData = useSelector((store) => store.auth.AuthUserData);

  const {
    coordinate: { address },
  } = useContext(Coordinates);

  return (
    <div ref={oldNavbarRef} className="bg-white shadow-md">
      <div className="w-4/5 m-auto flex justify-between items-center">
        <Title />
        <span className="truncate text-green-600 underline w-36">
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
              <Link to="/instamart">QuickBasket</Link>
            </li>
            <li className="hover-navbar" data-testid="cart-count">
              <Link to="/cart">
                <div className="flex gap-2 mt-[2px]">
                  <i className="fi fi-rr-shopping-bag"></i>
                  <p className="bg-green-300 rounded-md w-6 h-6 flex items-center justify-center text-sm font-thin">
                    {cartItems.length}
                  </p>
                </div>
              </Link>
            </li>

            <li className="hover-navbar">
              <Link to="/about">About us</Link>
            </li>
            <li className="hover-navbar">
              <Link to="/contact-us">Contact</Link>
            </li>

            <li className="flex items-center gap-2">
              <Link to="/signIn" className="flex items-center">
                {AuthUserData ? (
                  <div className="flex items-center gap-2">
                    <img
                      src={AuthUserData.photo}
                      alt="welcome"
                      className="h-6 w-6 rounded-xl object-contain"
                    />
                    <p className=" hover:text-orange-500">
                      {AuthUserData.name.split(" ")[0]}
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="bg-blue-400 text-white px-3 py-1 rounded">
                      Sign In
                    </p>
                    <div
                      data-testid="online-status"
                      className={`text-lg px-1  ${
                        isOnline ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      ●{" "}
                    </div>
                  </>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
