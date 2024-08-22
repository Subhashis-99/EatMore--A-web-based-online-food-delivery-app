import { Resturantcard } from "./RestaurantCard";
import { Link } from "react-router-dom";

export const RestaurantData = ({ restaurants, TopResTitle }) => {
  return (
    <div>
      {restaurants?.length === 0 ? (
        <h1 className="text-xl text-red-500">
          We are currently unable to locate your preferences. Please allow us to
          assist you further.
        </h1>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold mb-4 ml-4">{TopResTitle}</h1>
          <div className="grid gap-4 grid-cols-4">
            {restaurants?.map((restaurant) => (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <Resturantcard {...restaurant.info} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
