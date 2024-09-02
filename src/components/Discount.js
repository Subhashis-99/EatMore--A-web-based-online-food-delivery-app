const Discount = ({
  data: {
    info: { header, offerLogo, couponCode },
  },
}) => {
  return (
    <div className="flex min-w-[328px] border p-3 h-[76px] rounded-2xl">
      {/* Display the offer logo image */}
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/" +
          offerLogo
        }
        alt="Offer Logo"
      />
      <div>
        {/* Display the offer header */}
        <h2 className="font-bold">{header}</h2>
        {/* Conditionally render the coupon code or a fallback message */}
        {couponCode ? (
          <p className="text-gray-500">{couponCode}</p>
        ) : (
          <p className="text-gray-500">No coupon Code available</p>
        )}
      </div>
    </div>
  );
};

export default Discount;
