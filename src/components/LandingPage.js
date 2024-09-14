import { useState, useContext, useEffect } from "react";
import { useLottie } from "lottie-react";
import animation from "../assets/images/animation.json";
import usePageAnimations from "../utils/usePageAnimations";
import { Coordinates } from "../utils/userContext";
import SideBar from "./SideBar";
import { LocationFetchLoader } from "./Shimmer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  // Lottie animation settings
  const options = { animationData: animation, loop: true };
  const { View } = useLottie(options);

  const navigate = useNavigate();

  // GSAP animation refs
  const { textRef, formRef, animationRef } = usePageAnimations();

  // State hooks
  const [visible, setVisible] = useState(false); // Sidebar visibility
  const [searchResult, setSearchResult] = useState([]); // Search results
  const {
    coordinate: { address },
    setCoordinate,
  } = useContext(Coordinates); // Context values

  const [inputValue, setInputValue] = useState(""); // Input field value
  const [showShimmer, setShowShimmer] = useState(false); // Shimmer loader visibility

  useEffect(() => {
    if (address) {
      setInputValue(address); // Sync input with context address if available
    }
  }, [address]);

  // Toggle sidebar visibility
  const handleSearchFunctionality = () => setVisible(true);
  const handleVisibility = () => setVisible(false);

  // Fetch search results
  const SearchResultFunc = async (val) => {
    if (!val) return;
    const res = await fetch(
      `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/misc/place-autocomplete?input=${val}`
    );
    const data = await res.json();
    setSearchResult(data?.data);
  };

  // Handle location selection
  const selectLocation = async (place_id) => {
    handleVisibility(); // Hide sidebar
    setShowShimmer(true); // Show shimmer loader
    await fetchLatAndLong(place_id); // Fetch location data
    setTimeout(() => setShowShimmer(false), 1000); // Hide shimmer after delay
  };

  // Fetch location data
  const fetchLatAndLong = async (place_id) => {
    const res = await fetch(
      `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/misc/address-recommend?place_id=${place_id}`
    );
    const data = await res.json();
    const location = data?.data[0]?.geometry?.location;
    setCoordinate({
      lat: location?.lat,
      lng: location?.lng,
      address: data?.data[0]?.formatted_address,
    });
  };

  return (
    <div className="relative w-full">
      {/* Overlay shimmer loader */}
      {showShimmer && (
        <div className="absolute inset-0 z-50">
          <LocationFetchLoader />
        </div>
      )}

      {/* Main content */}
      <div
        className={
          showShimmer
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        {/* Sidebar */}
        <SideBar
          visible={visible}
          handleVisibility={handleVisibility}
          SearchResultFunc={SearchResultFunc}
          searchResult={searchResult}
          selectLocation={selectLocation}
        />

        {/* Main sections */}
        <div className="w-[95%] mx-auto flex flex-col md:flex-row flex-wrap bg-white  z-10">
          {/* Left section */}
          <section className="w-full md:w-full lg:w-1/2 p-8 mt-12">
            <div ref={textRef}>
              <h2 className="text-orange-500 font-bold text-4xl mb-2 font-custom">
                Hungry?
              </h2>
              <h1 className="font-bold text-5xl mb-3">
                Wait a minute for <span className="block">delicious.</span>
              </h1>
              <p className="text-gray-600 mb-6">
                Why Wait? Hot, Tasty Food Delivered in 20 Minutes!
              </p>
            </div>

            <div ref={formRef}>
              <div className="flex mb-4">
                <input
                  type="text"
                  placeholder="Enter your delivery location"
                  className="border-2 border-gray-300 p-3 rounded-l-md focus:outline-none flex-grow"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onClick={handleSearchFunctionality}
                />
                <button className="bg-green-500 text-white p-3 rounded-r-md hover:bg-green-600">
                  Discover
                </button>
              </div>

              <div className="text-gray-500 flex gap-2 flex-col md:flex-row flex-wrap">
                <p>Already a member of our community? </p>
                <p
                  className="text-red-500 font-semibold cursor-pointer"
                  onClick={() => navigate("/signIn")}
                >
                  Sign in
                </p>
              </div>
            </div>
          </section>

          {/* Right section with Lottie animation */}
          <section
            ref={animationRef}
            className="w-full lg:w-1/2 p-16 -mt-11 hidden lg:block"
          >
            {View}
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
