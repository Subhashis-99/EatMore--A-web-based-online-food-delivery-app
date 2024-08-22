import React, { useState } from "react";

const LocationSidebar = ({ onClose, onLocationSelect }) => {
  const [locations, setLocations] = useState([
      { address: "Mumbai, Maharashtra", lat: 18.9690247, lng: 72.8205292 },
      { address: "whitefield", lat: 2.9698196, lng: 77.7499721 },
    { address: "San Francisco", lat: 37.7749, lng: -122.4194 },
    // Add more locations as needed
  ]);

  return (
    <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50">
      <button
        className="p-2 text-lg"
        onClick={onClose}
      >
        Close
      </button>
      <ul className="p-4">
        {locations.map((location) => (
          <li
            key={location.address}
            className="cursor-pointer p-2 hover:bg-gray-200"
            onClick={() => onLocationSelect(location.address, location.lat, location.lng)}
          >
            {location.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationSidebar;
