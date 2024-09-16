import { useContext, useEffect, useState } from "react";
import { SearchRestaurantLoader } from "./Shimmer";
import { LandingPageLoader } from "./Shimmer";
import { FilterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserOffline from "./UserOffline";
import LandingPage from "./LandingPage";
import FilterBar from "./FilterBar";
import { useSelector } from "react-redux";
import OnYourMind from "./OnYourMind";
import { Coordinates } from "../utils/userContext";
import { RestaurantData } from "./RestaurantData";
import Availability from "./Availability";
import { Footer } from "./Footer";


export const Home = () => {
  // State variables for managing input, restaurant data, and filters
  const [SearchText, SetSearchText] = useState("");
  const [Allrestaurants, SetAllRestaurants] = useState([]);
  const [searchedRestaurants, SetSearchedRestaurants] = useState([]);
  const [catagory, SetCatagory] = useState([]);
  const [TopResTitle, SetTopResTitle] = useState([]);
  const [unavailability, SetUnavailability] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  // Extract latitude and longitude from context
  const {
    coordinate: { lat, lng },
  } = useContext(Coordinates);

  // Fetch restaurant data when latitude or longitude changes
  useEffect(() => {
    getRestaurants();
  }, [lat, lng]);

  // Function to fetch restaurant data from the API
  async function getRestaurants() {
    try {
      const response = await fetch(
        `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      const onYourMind = json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
      const res =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      const banner = json?.data?.cards[1]?.card?.card?.header?.title;

      // Update state with fetched data
      SetUnavailability(json?.data);
      SetCatagory(onYourMind);
      SetAllRestaurants(res);
      SetTopResTitle(banner);
      SetSearchedRestaurants(res);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  }

  // Get the filter value from Redux store
  const filterVal = useSelector((store) => store.filter.filterVal);

  // Show shimmer loading effect when filter changes
  useEffect(() => {
    if (filterVal) {
      setLoadingData(true);
      setTimeout(() => {
        setLoadingData(false);
      }, 1000); // Simulate loading time
    }
  }, [filterVal]);

  // Filter restaurant data based on selected filter
  const filteredData = searchedRestaurants?.filter((item) => {
    if (!filterVal) return true;
    switch (filterVal) {
      case "Ratings 4.0+":
        return item?.info?.avgRating > 4;
      case "Offers":
        return false;
      case "Rs.300- Rs.600":
        return (
          item?.info?.costForTwo?.slice(1, 4) >= "300" &&
          item?.info?.costForTwo?.slice(1, 4) <= "600"
        );
      case "Less than Rs.300":
        return item?.info?.costForTwo?.slice(1, 4) <= "300";
      case "FastDelivery":
        return item?.info?.sla?.deliveryTime <= 25;
      case "Nearby":
        return item?.info?.sla?.lastMileTravel <= 1.5;
      default:
        return true;
    }
  });

  // Handle search functionality and display shimmer effect during search
  const handleSearch = async () => {
    setLoadingData(true); // Start SearchRestaurantLoader when searching
    const data = await FilterData(SearchText, Allrestaurants);
    SetSearchedRestaurants(data);
    setTimeout(() => {
      setLoadingData(false); // Stop SearchRestaurantLoader after search completes
    }, 1000); // Simulate loading time
  };

  // Check if the user is online, show offline message if not
  const isOnline = useOnline();
  if (!isOnline) {
    return <UserOffline />;
  }

  return Allrestaurants?.length === 0 ? (
    <LandingPageLoader />
  ) : (
    // Show initial loading shimmer if no restaurants are loaded yet
    <>
      {unavailability?.communication ? (
        <>
          {/* Show availability message if unavailability data exists */}
          <LandingPage />
            <Availability />
            <Footer />
        </>
      ) : (
        <div className="w-full  mx-auto mt-3 overflow-hidden">
          {/* Show landing page and other components when data is available */}
          <LandingPage />
          <OnYourMind catagoryList={catagory} />
          <FilterBar />

          {/* Search input and button */}
          <div className="flex justify-center items-center gap-4 my-14">
            <input
              className="search border-2  rounded-xl px-4 py-2 shadow-sm focus:outline-none w-72"
              data-testid="search-input"
              type="text"
              placeholder="Search for restaurants..."
              value={SearchText}
              onChange={(e) => {
                SetSearchText(e.target.value);
              }}
            />
            <button
              data-testid="search-btn"
              className="bg-orange-400 text-white rounded-lg px-6 py-2 font-semibold hover:bg-orange-500 transition-colors duration-300 shadow-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* Conditionally render shimmer effect during loading */}
          {loadingData ? (
            <SearchRestaurantLoader />
          ) : (
            <div
              className="res-list flex flex-wrap m-5 ml-12"
              data-testid="res-list"
            >
              {searchedRestaurants?.length === 0 ? (
                <h1 className="text-2xl text-red-600 mb-5">
                  No restaurant matching your search
                </h1>
              ) : (
                <RestaurantData
                  restaurants={filterVal ? filteredData : searchedRestaurants}
                  TopResTitle={TopResTitle}
                />
              )}
            </div>
          )}
              <Footer />
        </div>
      )}
    </>
  );
};
