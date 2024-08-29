import { useParams, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Coordinates } from "../utils/userContext";

const RestaurantMenu = () => {
  const { Resid } = useParams();
  const [ResInfo, setResInfo] = useState([]);
  const [MenuData, setMenuData] = useState([]);
  const [DiscountData, setDiscountData] = useState([]);

  const {
    coordinate: { lat, lng },
  } = useContext(Coordinates);

  async function FetchMenu() {
    let data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${Resid}&catalog_qa=undefined&submitAction=ENTER`
    );

    let res = await data.json();
    console.log(ResInfo)
    setMenuData(res?.data?.cards[0]?.card?.card?.text);
    setResInfo(res?.data?.cards[2]?.card?.card?.info);
    setDiscountData(
      res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers
    );
 
   
  }

  useEffect(() => {
    FetchMenu();
  }, []);

  return (
    <div className="w-full">
      <div className="w-[800px] mx-auto">
        {/* path */}
        <p className="text-[12px] text-slate-500 mt-3">
          <Link to={"/"}>
            <span className=" hover:text-slate-700 hover:cursor-pointer">
              Home
            </span>
            /
          </Link>
          <Link to={"/"}>
            <span className="hover:text-slate-700 hover:cursor-pointer">
              {ResInfo.city}
            </span>
            /<span className="text-slate-700">{ResInfo.name}</span>
          </Link>
        </p>

        <h1 className="font-bold pt-6 text-2xl">{ResInfo.name}</h1>
        <div className="w-full h-[220px] bg-gradient-to-t p-5 from-slate-200/70  rounded-[30px] mt-3">
          <div className="w-full border border-slate-200/70 rounded-[30px] h-full bg-white ">
            <div className="p-4 w-full ml-3">
              {/* heading part */}
              <div className="flex item-center gap-1 font-semibold ">
                <i className="fi fi-ss-circle-star text-green-600 text-lg"></i>
                <span>{ResInfo?.avgRating}</span>
                <span>({ResInfo?.totalRatingsString})</span>.
                <span className="mt-[1px]">{ResInfo?.costForTwoMessage}</span>
              </div>
              {/* cusine part */}
              <p className=" ml-1  underline font-semibold text-orange-600">
                {ResInfo?.cuisines?.join(", ")}
              </p>

              <div className="flex gap-4 mt-2 ml-1">
                {/* left gola */}
                <div className=" flex flex-col mt-[6px]">
                  <div className="w-[7px] h-[7px] rounded-full bg-gray-400"></div>
                  <div className="w-[2px] h-[25px] ml-[2px] bg-gray-400"></div>
                  <div className="w-[7px] h-[7px] rounded-full bg-gray-400"></div>
                </div>
                {/* right part */}
                <div className="flex flex-col font-semibold gap-2 text-sm">
                  <p>
                    Outlet
                    <span className="text-gray-500 font-normal ml-2">
                      {ResInfo?.locality}
                    </span>
                  </p>{" "}
                  <p>{ResInfo?.sla?.slaString}</p>
                </div>
              </div>
              {/* separator part */}
              <hr className="mt-4" />
              {/* cycle part */}
              <div className="w-full -ml-2 my-1">
                <div className="flex item-center gap-2">
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/" +
                      ResInfo.feeDetails?.icon
                    }
                    className="w-6"
                  />
                  {ResInfo?.expectationNotifiers?.[0]?.enrichedText
  ? ResInfo.expectationNotifiers[0].enrichedText.replace(/<[^>]*>/g, "")
  : "Quick delivery"}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Restaurant id: {Resid} </h1>
    </div>
  );
};

export default RestaurantMenu;
