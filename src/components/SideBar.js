import React from "react";

/**
 * SideBar component - Displays a sidebar for location search with results
 *
 * @param {boolean} visible - Determines if the sidebar is visible
 * @param {function} handleVisibility - Function to toggle sidebar visibility
 * @param {function} SearchResultFunc - Function to fetch search results based on input
 * @param {Array} searchResult - Array of search results to be displayed
 * @param {function} selectLocation - Function to handle selection of a location
 */

const SideBar = ({
  visible,
  handleVisibility,
  SearchResultFunc,
  searchResult,
  selectLocation,
}) => {
  return (
    // Sidebar container with dynamic positioning based on visibility
    <div
      className={`bg-white w-full md:w-[53%] h-full z-50 absolute transition-all duration-500 opacity-95 ${
        visible ? "left-0" : "-left-[100%]"
      }`}
    >
      <div className="flex flex-col w-auto ml-4 gap-2">
        {/* Close button to hide the sidebar */}
        <i className="fi fi-br-cross" onClick={handleVisibility}></i>

        {/* Input box for location search */}
        <input
          type="text"
          className="border p-3 focus:outline-none focus:shadow-lg"
          placeholder="Where's the feast going? Type your address!"
          onChange={(e) => SearchResultFunc(e.target.value)}
        />

        {/* Container for search results */}
        <div className="p-2 border">
          <ul className="ml-2">
            {searchResult?.map((data, index) => (
              <div
                className="my-2 p-1 hover:bg-orange-100"
                key={data.place_id}
                onClick={() => selectLocation(data.place_id)}
              >
                <div className="flex gap-5">
                  {/* Icon for location marker */}
                  <i className="fi fi-rr-marker mt-1"></i>

                  {/* List item displaying search result; triggers location selection */}
                  <li /*onClick={() => selectLocation(data.place_id)} */>
                    {data.structured_formatting.main_text}
                    <p className="text-sm">
                      {data.structured_formatting.secondary_text}
                    </p>
                  </li>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
