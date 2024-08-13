import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Title from "./Title";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import dummy from '../assets/images/dummy.png';

const Header = () => {
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(userContext);

  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  return (
    <div className="sticky top-0 bg-white z-10 shadow-md">
      <div className="w-4/5 m-auto flex justify-between items-center">
        <Title />
        {/* <Link to="/">
          <img
            data-testid="logo"
            className="logo ml-2.5 w-[70px]"
            alt={"logo"}
            src={dummy}
          />{" "}
        </Link> */}

        <div className="nav-items flex">
          <ul className="h-full flex justify-between gap-5 text-xl">
            <li className="px-3 py-3 hover:bg-orange-500 rounded-md">
              <Link to="/">Home</Link>
            </li>
            <li className="px-3 py-3 hover:bg-orange-500 rounded-md">
              <Link to="/about"> About us </Link>
            </li>
            <li className="px-3 py-3 hover:bg-orange-500 rounded-md">
              Contact
            </li>
            <li className="px-3 py-3 hover:bg-orange-500 rounded-md" data-testid="cart-count">
              <Link to="/cart">cart- {cartItems.length}</Link>
            </li>
            <li className="px-3 py-3 hover:bg-orange-500 rounded-md">
              <Link to="/instamart">Instamart</Link>
            </li>
            <li>{user.name}</li>
            <li className="px-3 py-3 hover:bg-orange-500 rounded-md">
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
                  <span data-testid = "online-status"
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

export default Header;
