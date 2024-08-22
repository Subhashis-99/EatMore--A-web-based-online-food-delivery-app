const Availability = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png"
        className="w-60 p-10"
        alt="Location unserviceable"
      />
      <h1 className="font-semibold">
        Due to Operational exigencies, We are temporarily unserviceable
      </h1>
      <p>
        Some restaurants around you are not serviceable due to Operational
        exigencies. Please bear with us.
      </p>
    </div>
  );
};

export default Availability;
