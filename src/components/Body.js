import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
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

export const Body = () => {
  const [SearchText, SetSearchText] = useState("");
  const [Allrestaurants, SetAllRestaurants] = useState([]);
  const [searchedRestaurants, SetSearchedRestaurants] = useState([]);
  const [catagory, SetCatagory] = useState([]);
  const [TopResTitle, SetTopResTitle] = useState([]);
  const [unavailability, SetUnavailability] = useState([]);

  const {
    coordinate: { lat, lng },
  } = useContext(Coordinates);

  useEffect(() => {
    getRestaurants();
  }, [lat, lng]);

  async function getRestaurants() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
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

      SetUnavailability(json?.data);
      SetCatagory(onYourMind);
      SetAllRestaurants(res);
      SetTopResTitle(banner);
      SetSearchedRestaurants(res);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  }

  const filterVal = useSelector((store) => store.filter.filterVal);

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

  const isOnline = useOnline();
  if (!isOnline) {
    return <UserOffline />;
  }

  return Allrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {unavailability?.communication ? (
        <>
          <LandingPage />
          <Availability />
        </>
      ) : (
        <>
          <LandingPage />
          <OnYourMind catagoryList={catagory} />
          <FilterBar />

          <div className="flex justify-center mt-10">
            <input
              className="search p-2 m-5 border-2"
              data-testid="search-input"
              type="text"
              placeholder="search"
              value={SearchText}
              onChange={(e) => {
                SetSearchText(e.target.value);
              }}
            />
            <button
              data-testid="search-btn"
              className="bg-orange-400 p-2 m-5 rounded-md hover:text-white"
              onClick={() => {
                const data = FilterData(SearchText, Allrestaurants);
                SetSearchedRestaurants(data);
              }}
            >
              Search
            </button>
          </div>

          <div className="res-list flex flex-wrap m-5 ml-12" data-testid="res-list">
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
        </>
      )}
    </>
  );
};
