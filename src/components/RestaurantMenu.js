import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Coordinates } from "../utils/userContext";
import { MenuLoader } from "./Shimmer";
import Discount from "./Discount";
import MenuCard from "./MenuCard";
import { useDispatch, useSelector } from "react-redux";
import { setResInfo } from "../utils/resInfoSlice";

const RestaurantMenu = () => {
  // Extract restaurant ID from route parameters
  const { Resid } = useParams();
  const dispatch = useDispatch();

  // State variables
  const [menuData, setMenuData] = useState([]);
  const [discountData, setDiscountData] = useState([]);
  const [topPicksData, setTopPicksData] = useState(null);
  const [loading, setLoading] = useState(true);

  const resInfo = useSelector((store) => store.resInfo.data);

  // Context for user coordinates
  const {
    coordinate: { lat, lng },
  } = useContext(Coordinates);

  // Fetch menu data from API
  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true); // Set loading state

      try {
        // API request to fetch menu data
        const response = await fetch(
          `https://cors-by-codethread-for-swiggy.vercel.app/cors/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${Resid}&catalog_qa=undefined&submitAction=ENTER`
        );
        const data = await response.json();

        // Extract relevant data from API response
        const actualMenu =
          data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (card) =>
              card?.card?.card?.itemCards || card?.card?.card?.categories
          );
        setMenuData(actualMenu);

        dispatch(setResInfo(data?.data?.cards[2]?.card?.card?.info || {}));
        setDiscountData(
          data?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.offers || []
        );
        setTopPicksData(
          data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
            (card) => card?.card?.card?.title === "Top Picks"
          ) || null
        );
      } catch (error) {
        console.error("Failed to fetch menu data:", error); // Handle errors
      } finally {
        setLoading(false); // Reset loading state
      }
    };

    fetchMenu(); // Call fetch function
  }, [Resid, lat, lng]);

  // Display loading spinner if data is still being fetched
  if (loading) {
    return <MenuLoader />;
  }

  return (
    <div className="w-[80%] sm:w-full mx-auto">
      <div className="w-[95%] md:w-[800px] mx-auto">
        {/* Breadcrumb navigation */}
        <p className="text-[12px] text-slate-400 mt-3">
          <Link to="/">
            <span className="hover:text-slate-700 hover:font-semibold hover:cursor-pointer ">
              Home
            </span>
          </Link>
          /
          <Link to="/">
            <span className="hover:text-slate-700 hover:font-semibold hover:cursor-pointer">
              {resInfo?.city}
            </span>
          </Link>
          /<span className="text-slate-700 font-semibold">{resInfo?.name}</span>
        </p>

        {/* Restaurant name */}
        <h1 className="font-bold pt-6 text-2xl">{resInfo?.name}</h1>

        {/* Restaurant info section */}
        <div className="w-full h-auto md:h-[220px] bg-gradient-to-t p-5 from-slate-200/70 rounded-[30px] mt-3">
          <div className="w-full border border-slate-200/70 rounded-[30px] h-full bg-white">
            <div className="p-4 w-full ml-3">
              {/* Rating and cost details */}
              <div className="flex items-center gap-3 font-semibold text-sm sm:text-base">
                <div className="flex items-center gap-1 min-h-[24px] align-top">
                  <i className="fi fi-ss-circle-star text-green-600 text-lg -mt-0 md:mt-1"></i>
                  <span className="leading-none -mt-1 md:mt-0">
                    {resInfo?.avgRating}
                  </span>
                </div>

                <span className="truncate text-gray-500 min-h-[24px]">
                  ({resInfo?.totalRatingsString})
                </span>
                <span className="truncate text-gray-700 min-h-[24px]">
                  {resInfo?.costForTwoMessage}
                </span>
              </div>

              {/* Cuisine types */}
              <p className="ml-1 underline font-semibold text-orange-600">
                {resInfo?.cuisines?.join(", ")}
              </p>

              {/* Outlet and delivery details */}
              <div className="flex gap-4 mt-2 ml-1">
                <div className="flex flex-col mt-[6px]">
                  <div className="w-[7px] h-[7px] rounded-full bg-gray-400"></div>
                  <div className="w-[2px] h-[25px] ml-[2px] bg-gray-400"></div>
                  <div className="w-[7px] h-[7px] rounded-full bg-gray-400"></div>
                </div>
                <div className="flex flex-col font-semibold gap-[9px] text-sm">
                  <p>
                    Outlet
                    <span className="text-gray-500 font-normal ml-2">
                      {resInfo?.locality}
                    </span>
                  </p>
                  <p>{resInfo?.sla?.slaString}</p>
                </div>
              </div>

              {/* Delivery fee and status */}
              <hr className="mt-4" />
              <div className="w-full -ml-1 my-1">
                <div className="flex items-center gap-2">
                  <img
                    className="w-6 mt-[1px]"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/${resInfo?.feeDetails?.icon}`}
                    alt="Delivery fee icon"
                  />
                  {resInfo?.feeDetails?.message ? (
                    <span className="text-gray-500 text-sm mt-[2px]">
                      {resInfo?.feeDetails?.message.replace(/<[^>]*>/g, "")}
                    </span>
                  ) : (
                    <h1>This outlet is currently closed.</h1>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discount offers */}
        <div className="flex mt-5 overflow-hidden -ml-2">
          {discountData.map((data, index) => (
            <Discount key={index} data={data} />
          ))}
        </div>

        {/* Menu heading */}
        <h2 className="text-center mt-5 leading-5">MENU</h2>

        {/* Search bar */}
        <div className="w-[90%] md:w-full mt-5 cursor-pointer">
          <div className="w-full p-3 font-semibold bg-slate-200/70 rounded-xl flex items-center justify-between">
            <span className="text-center w-full">Search for dishes</span>
            <i className="fi fi-rr-search mt-1"></i>
          </div>
        </div>

        {/* Top Picks section */}
        {topPicksData && (
          <>
            <h1 className="my-6 font-bold ml-1 text-xl underline">
              {topPicksData?.card?.card?.title}
            </h1>
            <div className="flex mt-3 gap-4 overflow-hidden">
              {topPicksData?.card?.card?.carousel.map(
                ({
                  creativeId,
                  dish: {
                    info: { defaultPrice, price },
                  },
                }) => (
                  <div
                    key={creativeId}
                    className="relative min-w-[254px] h-[255px]"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/${creativeId}`}
                      alt="Top Pick Dish"
                    />
                    <div className="flex justify-between items-center absolute bottom-2 w-full px-5 py-2">
                      <p className="text-white font-bold">
                        ₹{defaultPrice / 100 || price / 100}
                      </p>
                      <button className="bg-white font-bold border text-green-500 px-4 py-1 rounded-xl">
                        ADD
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </>
        )}

        {/* Menu list */}
        <div>
          {menuData?.map(({ card: { card } }, index) => (
            <MenuCard key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
