import { IMG_CDN_URL } from "../../config";

export const Fooditem = ({ name, imageId, description, price }) => {
  return (
 
      <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 transition-all shadow-md ">
        <img
          className="w-[200px] h-[170px] rounded-lg"
          src={IMG_CDN_URL + imageId}
        />
        <h2 className="font-bold text-lg py-2 truncate">{name}</h2>
        <h4>{description}</h4>
        <h4> ₹{price / 100}</h4>
      </div>

  );
};
