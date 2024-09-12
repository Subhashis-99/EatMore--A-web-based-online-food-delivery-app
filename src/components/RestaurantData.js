import { Resturantcard } from "./RestaurantCard";
import { Link } from "react-router-dom";

export const RestaurantData = ({ restaurants, TopResTitle }) => {
  return (
    <div>
      {restaurants?.length === 0 ? (
        <h1 className="text-xl text-red-500 text-center">
          We are currently unable to locate your preferences. Please allow us to
          assist you further.
        </h1>
      ) : (
        <div>
          <h1 className="text-2xl font-semibold mb-4 ml-4 text-center">
            {TopResTitle}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  sm:gap-1 md:gap-2 lg:gap-3">
            {restaurants?.map((restaurant) => (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
                className="flex justify-center"
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
