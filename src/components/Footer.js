import React from "react";
import {
  Restaurant_Title_URL,
  googleplayImg,
  AppstoreImg,
  fbIcon,
  twitterIcon,
  InstaIcon,
  LinkedInIcon,
} from "../../config";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 mt-20 ">
      {/* Download App Section */}
      <div className="flex flex-col md:flex-row justify-evenly items-center bg-gray-100 py-10 md:py-14 px-6 md:px-8 shadow-lg">
        <div className="text-center mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-2xl md:text-3xl text-gray-700 font-bold mb-2">
            Get the EatMore App
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            Download now for a better experience
          </p>
        </div>
        <div className="flex flex-wrap gap-2 md:gap-6 items-center justify-center">
          <img
            src={googleplayImg}
            alt="Download on Google Play"
            className="h-[64px] md:h-[96px] object-contain"
          />
          <img
            src={AppstoreImg}
            alt="Download on the App Store"
            className="h-[48px] md:h-[68px] object-contain"
          />
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="bg-[#0a0c1b] text-slate-200 pt-3 md:pt-10 pb-6 md:pb-4 px-6 md:px-8 lg:px-14 shadow-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About EatMore */}
          <div className="hidden md:block">
            <h3 className="text-base md:text-lg font-bold mb-4">
              About EatMore
            </h3>
            <p className="text-sm leading-relaxed">
              EatMore is your go-to food delivery service, offering a wide
              variety of cuisines right at your doorstep. Our mission is to
              bring delicious food to you quickly and conveniently.
            </p>
            <Link to="/info/about">
              <div className="text-orange-500 hover:underline mt-4 inline-block">
                Learn More
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h3 className="text-base md:text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm hover:underline">
                  FAQs
                </Link>
              </li>
              <Link to="/info/contact">
                <li className="text-sm hover:underline"> Contact Us</li>
              </Link>
              <li className="text-sm hover:underline">Terms & Conditions</li>
              <li>
                <a href="/privacy-policy" className="text-sm hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 hidden md:block">
              Follow Us
            </h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="https://facebook.com" aria-label="Facebook">
                <img src={fbIcon} alt="Facebook" className="h-9 md:h-12 object-contain" />
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <img src={twitterIcon} alt="Twitter" className="h-9 md:h-12 object-contain" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <img src={InstaIcon} alt="Instagram" className="h-9 md:h-12 object-contain" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <img
                  src={LinkedInIcon}
                  alt="LinkedIn"
                  className="h-9 md:h-12 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Subscribe to Newsletter */}
          <div className="hidden md:block">
            <h3 className="text-base md:text-lg font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm mb-4">
              Stay updated with the latest offers and updates from EatMore.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 rounded text-black placeholder-gray-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-2 sm:mt-10 flex flex-row justify-start gap-6 items-center border-t border-gray-700 p-2 sm:p-4">
          <img
            src={Restaurant_Title_URL}
            alt="EatMore Logo"
            className="h-12 w-auto mb-4 sm:mb-0 hidden md:block"
          />
          <div className="text-center sm:text-left">
            <p className="text-sm">
              &copy; {year} EatMore. All rights reserved.
            </p>
            <p className="text-sm ">
              Mobile: +91-8117865709 | Email:{" "}
              <a
                href="mailto:support@eatmore.com"
                className="text-orange-500 hover:underline"
              >
                support@eatmore.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
