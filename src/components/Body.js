import { Resturantcard } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { restaurantList_API_URL } from "./Config";
import { FilterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useOffline from "./UserOffline";
import UserOffline from "./UserOffline";
import userContext from "../utils/userContext";

export const Body = () => {
  const [SearchText, SetSearchText] = useState([]);
  const [Allrestaurants, SetAllRestaurants] = useState([]);
  const [FilteredRestaurants, SetFilteredRestaurants] = useState([]);
  const { user, setUser } = useContext(userContext);
  console.log(user);

  useEffect(() => {
    getRestaurants();
  }, []);

  // console.log("initial render");

  async function getRestaurants() {
    const data = await fetch(restaurantList_API_URL);
    const json = await data.json();
    // console.log(
    //   json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    // );
    SetAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    SetFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  console.log("initial render");
  const isOnline = useOnline(); // it receives either true or false
  const isOffline = useOffline(); // it receives either true or false

  if (!isOnline) {
    return <UserOffline />;
  }

  return Allrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center">
        <input
          className=" search p-2 m-5 border-2 hover:bg-orange-100"
          data-testid="search-input"
          type="text"
          placeholder="search"
          value={SearchText}
          onChange={(e) => {
            SetSearchText(e.target.value);
          }}
        ></input>
        <button
          data-testid="search-btn"
          className="bg-orange-600 p-2 m-5 rounded-md hover:text-white"
          onClick={() => {
            const data = FilterData(SearchText, Allrestaurants);
            SetFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        ></input>

        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        ></input>
      </div>

      <div className="res-list flex flex-wrap m-5 ml-12" data-testid="res-list">
        {FilteredRestaurants?.length === 0 ? (
          <h1>No restaurant matching your search</h1>
        ) : (
          FilteredRestaurants.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <Resturantcard {...restaurant.info} key={restaurant.info.id} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};
