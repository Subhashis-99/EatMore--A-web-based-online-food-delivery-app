import React, { useEffect, useState, useContext } from "react";
import { Coordinates } from "../utils/userContext";
import Dishes from "./Dishes";
import SearchRestaurant from "./SearchRestaurant";
import { SearchResLoader } from "./Shimmer";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [item, setItem] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const [loading, setLoading] = useState(false);

  const filterOption = ["Restaurants", "Dishes"];
  const [activeBtn, setActiveBtn] = useState("Dishes");

  // Extract latitude and longitude from context
  const {
    coordinate: { lat, lng },
  } = useContext(Coordinates);

  const handleFilterBtn = (filtername) => {
    setActiveBtn(filtername);
  };

  const handleSearchQuery = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(e.target.value);
    }
  };

  const fetchDishes = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchQuery}&trackingId=undefined&submitAction=ENTER&queryUniqueId=b01eeaf5-62d3-dbac-7e73-adb7b3a41998`
      );
      const json = await data.json();
      const FinalData =
        json?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards?.filter(
          (data) => data?.card?.card?.info
        );
      setItem(FinalData || []);
    } catch (error) {
      console.error('Error fetching dishes:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRestaurantData = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchQuery}&trackingId=undefined&submitAction=ENTER&queryUniqueId=755e0464-fbda-277b-fc1b-63cf88ad4875&selectedPLTab=RESTAURANT`
      );
      const json = await data.json();
      const FinalData =
        json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.filter(
          (data) => data?.card?.card?.info
        );
      setRestaurantData(FinalData || []);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    fetchDishes();
    fetchRestaurantData();
  }, [searchQuery]);

  return (
    <div className="flex justify-center pt-14 min-h-screen p-5 bg-[#f4f5f7]">
      <div className="w-full max-w-[700px] mx-auto">
        <div className="w-full relative">
          <i className="fi fi-rr-angle-left absolute top-[41%] -translate-y-1/2 ml-2"></i>
          <input
            onKeyDown={handleSearchQuery}
            className="border px-10 py-3 w-full mb-4 rounded-md focus:outline-none"
            type="text"
            placeholder="Search for restaurants and food....."
          />
          <i className="fi fi-rs-search absolute top-[41%] -translate-y-1/2 right-0 mr-5"></i>
        </div>

        <div className="my-3 flex gap-5 justify-start ml-1">
          {filterOption.map((filtername, index) => (
            <button
              key={index}
              onClick={() => handleFilterBtn(filtername)}
              className={
                "filterbtn flex gap-2 " +
                (activeBtn === filtername ? "active" : "")
              }
            >
              <p>{filtername}</p>
            </button>
          ))}
        </div>
        
        {loading ? (
          <SearchResLoader />
        ) : (
          <div className="w-full bg-[#f4f5f7] grid grid-cols-1 md:grid-cols-2 gap-5 my-2">
            {activeBtn === "Dishes" && item.length > 0 ? (
              item.map((data) => (
                <Dishes data={data} key={data.card.card.info.id} />
              ))
            ) : activeBtn === "Restaurants" && restaurantData.length > 0 ? (
              restaurantData.map((data) => (
                <SearchRestaurant data={data} key={data.card.card.info.id} />
              ))
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
