import React, { useState } from "react";
import DetailMenu from "./DetailMenu";

function MenuCard({ card }) {
  // Set the initial state of the dropdown based on the presence of '@type' in the card
  let open = false;
  if (card["@type"]) {
    open = true;
  }
  const [isOpen, setIsOpen] = useState(open);

  // Function to toggle the dropdown menu visibility
  function toggleDropDown() {
    setIsOpen((prev) => !prev);
  }

  // Check if the card has 'itemCards' property
  if (card?.itemCards) {
    const { title, itemCards } = card;
    return (
      <>
        <div className="mt-7">
          <div className="flex justify-between ">
            {/* Display title with dynamic font size based on '@type' */}
            <h1 className={"font-bold text-" + (card["@type"] ? "xl" : "base")}>
              {title} ({itemCards.length})
            </h1>
            {/* Icon to toggle the dropdown menu */}
            <i
              className={
                "text-2xl fi fi-rr-angle-small-" + (isOpen ? "up" : "down")
              }
              onClick={toggleDropDown}
            ></i>
          </div>
          {/* Conditionally render DetailMenu component if dropdown is open */}
          {isOpen && <DetailMenu itemCards={itemCards} />}
        </div>
        {/* Divider with dynamic border thickness based on '@type' */}
        <hr className={"my-5 border-" + (card["@type"] ? "8" : "[2px]")} />
      </>
    );
  } else {
    const { title, categories } = card;
    return (
      <div>
        {/* Display title for categories */}
        <h1 className="font-bold text-xl">{title}</h1>
        {/* Recursively render MenuCard for each category */}
        {categories.map((data, index) => (
          <MenuCard key={index} card={data} />
        ))}
      </div>
    );
  }
}

export default MenuCard;
