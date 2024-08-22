import { useState, useContext, useEffect } from "react";
import { useLottie } from "lottie-react";
import animation from "../assets/images/animation.json";
import usePageAnimations from "../utils/usePageAnimations";
import { Coordinates } from "../utils/userContext";

const LandingPage = () => {
  // Lottie animation options
  const options = { animationData: animation, loop: true };
  const { View } = useLottie(options);

  // GSAP animations
  const { textRef, formRef, animationRef } = usePageAnimations();

  // State management
  const [visible, setVisible] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const {
    coordinate: { address },
    setCoordinate,
  } = useContext(Coordinates);

  // Local state for the input value
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    // Update the input value whenever the address in context changes
    setInputValue(address);
  }, [address]);

  // Toggle search sidebar visibility
  const handleSearchFunctionality = () => setVisible(true);
  const handleVisibility = () => setVisible(false);

  // Fetch search results
  const SearchResultFunc = async (val) => {
    if (!val) return;
    const res = await fetch(
      `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${val}`
    );
    const data = await res.json();
    setSearchResult(data?.data);
  };

  // Fetch location data and update context
  const fetchLatAndLong = async (L_id) => {
    if (!L_id) return;
    handleVisibility();
    const res = await fetch(
      `https://www.swiggy.com/dapi/misc/address-recommend?place_id=${L_id}`
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
      {/* Sidebar: Appears when 'visible' is true */}
      <div
        className={`bg-white w-[48%] h-full z-50 absolute transition-all duration-500 opacity-95 ${
          visible ? "left-0" : "-left-[100%]"
        }`}
      >
        <div className="flex flex-col w-[90%] ml-4 gap-2">
          <i className="fi fi-br-cross" onClick={handleVisibility}></i>
          {/* Input box inside the sidebar for location search */}
          <input
            type="text"
            className="border p-3 focus:outline-none focus:shadow-lg"
            placeholder="Where's the feast going? Type your address!"
            onChange={(e) => SearchResultFunc(e.target.value)}
          />
          <div className="p-2 border">
            {/* Location search results will be rendered here */}
            <ul className="ml-2 ">
              {searchResult?.map((data, index) => (
                <div
                  className="my-2 p-1 hover:bg-orange-100"
                  key={data.place_id}
                >
                  <div className="flex gap-5">
                    <i className="fi fi-rr-marker mt-1"></i>
                    <li onClick={() => fetchLatAndLong(data.place_id)}>
                      {data.structured_formatting.main_text}
                      <p className="text-sm">
                        {data.structured_formatting.secondary_text}
                      </p>
                    </li>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main content with the left and right sections */}
      <div className="w-[95%] mx-auto flex flex-col md:flex-row bg-white mt-8 z-10">
        {/* Left Section */}
        <section className="w-full md:w-1/2 p-8 mt-5">
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
                value={inputValue} // Bind the address to the input value
                onClick={handleSearchFunctionality}
              />
              <button className="bg-green-500 text-white p-3 rounded-r-md hover:bg-green-600">
                Discover
              </button>
            </div>

            <p className="text-gray-500">
              Already a member of our community?{" "}
              <a href="#" className="text-red-500 font-semibold">
                Sign in
              </a>
            </p>
          </div>
        </section>

        {/* Right Section */}
        <section
          ref={animationRef}
          className="w-full md:w-1/2 p-20 -mt-16 hidden md:block"
        >
          {View}
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
