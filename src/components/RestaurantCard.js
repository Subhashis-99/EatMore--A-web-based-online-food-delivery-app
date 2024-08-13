import { IMG_CDN_URL } from "../../config";
import userContext from "../utils/userContext";
import { useContext } from "react";

export const Resturantcard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  costForTwo,
  avgRating,
  sla,
}) => {
  const {user} = useContext(userContext);
  return (
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all shadow-md">
      <img
        className="w-[200px] h-[170px] rounded-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold text-lg py-2 truncate">{name}</h2>
      <h4>
        <i className="fa-solid fa-star"></i>
        {"⭐" + avgRating + " ||⏱️" + sla.slaString}
      </h4>
      <h5 className="truncate">{cuisines.join(", ")}</h5>
      <h4>{areaName}</h4>
      <h4>{costForTwo}</h4>
      <h4>{user.name}</h4>
      <h4>{user.email}</h4>
    </div>
  );
};
