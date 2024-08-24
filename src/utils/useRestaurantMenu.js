import { useState, useEffect } from "react";
import { RestaurantMenu_API_URL } from "../components/Config";

const useRestaurantMenu = (resid) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getRestaurantInfo();
  }, [resid]);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(RestaurantMenu_API_URL + resid);
      const json = await data.json();

      // Set restaurant data
      const restaurantData = json?.data?.cards
        ?.map((x) => x.card)
        ?.find(
          (x) =>
            x &&
            x.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      )?.card?.info;
      console.log(restaurantData)

      setRestaurant(restaurantData);

      // Set menu item data
      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter(
            (x) =>
              x["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          )
          .map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });

      setMenuItems(uniqueMenuItems);
    } catch (error) {
      console.error("Failed to fetch restaurant data:", error);
    }
  }

  return [restaurant, menuItems];
};
export default useRestaurantMenu;
