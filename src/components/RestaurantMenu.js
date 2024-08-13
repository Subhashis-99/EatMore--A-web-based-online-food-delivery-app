import { useParams } from "react-router-dom";
import IMG_CDN_URL from "./Config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { additem } from "../utils/Cartslice";

const RestaurantMenu = () => {
  const { Resid } = useParams();
  const [restaurant, menuItems] = useRestaurantMenu(Resid);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(additem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu flex">
      <div className="res-info">
        <img
          className="res-img"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        ></img>
        <h1>{restaurant?.name} </h1>
        <h1>Restaurant id: {Resid} </h1>
        <h2>{restaurant?.area}</h2>
        <h2>{restaurant?.city}</h2>
        <h4>{restaurant?.avgRating + " stars"}</h4>
      </div>

      <div className="menu-list">
        <h1 className="text-2xl">Menu</h1>
        <ul data-testid="menu">
          {Object.values(menuItems)?.map((item) => (
            <li key={item.id}>
              {" "}
              {item?.name}{" "}
              <button
                className="p-1 ml-3 bg-orange-100 rounded-md"
                data-testid="add-btn"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;



