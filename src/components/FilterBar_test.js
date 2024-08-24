import usePageAnimations from "../utils/usePageAnimations";
import { useContext } from "react";

export const FilterBar_test = () => {
  const { filterBar_testRef } = usePageAnimations();

  return (
    <div ref={filterBar_testRef} className="filter-bar bg-white">
      <ul className="h-full flex justify-between gap-5 text-xl">
        <li className="px-3 py-3 hover:bg-orange-500 rounded-md">About us</li>
        <li className="px-3 py-3 hover:bg-orange-500 rounded-md">Contact</li>
        <li
          className="px-3 py-3 hover:bg-orange-500 rounded-md"
          data-testid="cart-count"
        >
          cart
        </li>
        <li className="px-3 py-3 hover:bg-orange-500 rounded-md">Instamart</li>
      </ul>

    </div>
  );
};
