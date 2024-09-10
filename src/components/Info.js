import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Info = () => {
  const location = useLocation();

  return (
    <div className="p-5">
      <div className="flex justify-center space-x-2 md:space-x-4 mb-6 lg:mb-8 mt-3">
        <Link
          to="about"
          className={`${
            location.pathname.endsWith("about") ? "active" : ""
          } border border-gray-300 px-4 md:px-6 py-2 md:py-2 rounded-3xl`}
        >
          About
        </Link>
        <Link
          to="contact"
          className={`${
            location.pathname.endsWith("contact") ? "active" : ""
          } border border-gray-300 px-4 md:px-6 py-2 md:py-2 rounded-3xl`}
        >
          Contact
        </Link>
        <Link
          to="services"
          className={`${
            location.pathname.endsWith("services") ? "active" : ""
          } border border-gray-300 px-4 md:px-6 py-2 md:py-2 rounded-3xl`}
        >
          Services
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Info;
