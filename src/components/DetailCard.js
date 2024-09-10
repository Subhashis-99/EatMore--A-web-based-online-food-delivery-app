import React from 'react';

const DetailCard = ({ description, imageId, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-4 rounded-lg shadow-lg z-10 w-80 max-w-full">
        {imageId && (
          <img
            className="w-full h-48 object-cover rounded-t-lg"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`}
            alt="Dish Image"
          />
        )}
        <h2 className="text-xl font-semibold mb-2 mt-2">Dish Details</h2>
        <p>{description}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default DetailCard;
