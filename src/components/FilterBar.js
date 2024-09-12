import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilterValue } from "../utils/filterSlice";

const FilterBar = () => {
  const filterOption = [
    "Ratings 4.0+",
    "Offers",
    "Rs.300- Rs.600",
    "Less than Rs.300",
    "FastDelivery",
    "Nearby",
  ];

  const [activeBtn, setActiveBtn] = useState();
  const dispatch = useDispatch();

  const handleFilterBtn = (filtername) => {
    // console.log(filtername);
    setActiveBtn(activeBtn === filtername ? null : filtername);
  };
  useEffect(() => {
    dispatch(setFilterValue(activeBtn));// Dispatch the filter value to Redux store
  }, [activeBtn, dispatch]);

  return (
    <>
      <div className="my-2 flex flex-wrap gap-5 justify-center">
        {filterOption.map((filtername,index) => {
          return (
            <button
              key={index}
              onClick={() => handleFilterBtn(filtername)}
              className={
                "filterbtn flex gap-2 " +
                (activeBtn === filtername ? "active" : "")
              }
            >
              <p>{filtername}</p>
              <i className="fi fi-br-cross mt-1 text-sm hidden"></i>
            </button>
          );
        })}
      </div>
    </>
  );
};
export default FilterBar;
