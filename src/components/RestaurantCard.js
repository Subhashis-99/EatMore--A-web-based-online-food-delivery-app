import { IMG_CDN_URL } from "../../config";

export const Resturantcard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  costForTwo,
  avgRating,
  sla,
}) => {
  return (
    <>
      <div className="m-4 p-4 w-full sm:w-[250px] bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 hover:scale-95 duration-500">
        <img
          className="w-full h-[170px] rounded-lg mx-auto object-cover"
          src={IMG_CDN_URL + cloudinaryImageId}
        />
        <h2 className="font-bold text-lg py-2 truncate">{name}</h2>
        <h4>
          <i className="fa-solid fa-star"></i>
          <span className="bg-green-600 text-white px-2 py-1 rounded-lg">
            {avgRating}
          </span>
          ⏱️{sla.slaString}
        </h4>
        <h5 className="truncate">{cuisines.join(", ")}</h5>
        <h4>{areaName}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </>
  );
};
