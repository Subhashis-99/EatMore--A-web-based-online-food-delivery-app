import { useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Title from "./Title";
import { useSelector } from "react-redux";
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
      <div className="w-[90%] m-auto flex justify-between items-center">
        {/* Logo on the left */}
        <Title className="flex-shrink-0" />

        {/* Address on larger screens */}
        <span className="truncate text-green-600 underline w-36 hidden lg:block">
          {address}
        </span>

        {/* Desktop Navigation items */}
        <div className="hidden md:flex items-center space-x-5">
          <ul
            ref={navRef}
            className="flex justify-between items-center gap-5 text-lg"
          >
            <li className="hover-navbar">
              <Link to="/">
                <p className="hidden md:inline">Home</p>
              </Link>
            </li>
            <li className="hover-navbar">
              <Link to="/search">
                <div className="flex items-center gap-3">
                  <i className="fi fi-rs-search mt-2 text-xl"></i>
                  <p className="hidden md:inline">Search</p>
                </div>
              </Link>
            </li>
            <li className="hover-navbar">
              <Link to="/quickBasket">QuickBasket</Link>
            </li>
            <li className="hover-navbar">
              <Link to="/info">
                <div className="flex items-center gap-1">
                  <i className="fi fi-rs-info mt-1 text-xl"></i>
                  <p className="hidden md:inline">Info</p>
                </div>
              </Link>
            </li>
            <li className="hover-navbar" data-testid="cart-count">
              <Link to="/cart">
                <div className="flex items-center gap-2">
                  <i className="fi fi-rr-shopping-bag text-xl"></i>
                  <p className="bg-green-300 rounded-md w-6 h-6 flex items-center justify-center text-sm font-thin">
                    {cartItems.length}
                  </p>
                </div>
              </Link>
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
                    <p className="hidden md:block hover:text-orange-500">
                      {AuthUserData.name.split(" ")[0]}
                    </p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <i className="fi fi-rr-user text-xl"></i>
                    <div
                      data-testid="online-status"
                      className={`text-lg ${
                        isOnline ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      ●
                    </div>
                  </div>
                )}
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation items */}
        <div className="md:hidden flex items-center gap-6">
          <Link to="/">
            <div className="mt-1">
              <i className="fi fi-rr-home text-xl hover-navbar"></i>
            </div>
          </Link>
          <Link to="/search">
            <div className="mt-2">
              <i className="fi fi-rs-search text-xl hover-navbar"></i>
            </div>
          </Link>
          <Link to="/cart">
            <div className="flex items-center gap-2 mt-1">
              <i className="fi fi-rr-shopping-bag text-xl  hover-navbar"></i>
            </div>
          </Link>
          <Link to="/signIn" className="flex items-center">
            {AuthUserData ? (
              <img
                src={AuthUserData.photo}
                alt="welcome"
                className="h-6 w-6 rounded-full object-cover"
              />
            ) : (
              <div className="mt-[5px]">
                <i className="fi fi-rr-user text-xl  hover-navbar"></i>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};
