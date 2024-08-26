import { Restaurant_Title_URL } from "../../config";

export const LandingPageLoader = () => {
  return (
    <div>
      <div className="w-[95%] mx-auto flex flex-col md:flex-row bg-white mt-8 z-10 animate-pulse">
        {/* Left Section Shimmer */}
        <section className="w-full md:w-1/2 p-8 mt-5">
          <div className="space-y-3">
            <div className="bg-gray-100 h-8 w-1/4 mb-2 rounded-md"></div>
            <div className="bg-gray-200 h-10 w-2/3 mb-3 rounded-md"></div>
            <div className="bg-gray-100 h-6 w-1/2 mb-6 rounded-md"></div>
          </div>

          <div className="space-y-4 mt-4">
            <div className="bg-gray-200 h-10 w-full rounded-l-md"></div>
            <div className="bg-gray-300 h-8 w-1/2 rounded-md"></div>
          </div>
        </section>

        {/* Right Section Shimmer */}
        <section className="w-full md:w-1/2 p-20 -mt-16 hidden md:block">
          <div className="bg-gray-200 h-full w-full rounded-md"></div>
        </section>
      </div>

      <div className="w-[90%] mx-auto mt-7 mb-10 p-2 overflow-hidden animate-pulse">
        {/* Shimmer for the title */}
        <section>
          <div className="bg-gray-300 h-8 w-1/3 mb-3 rounded-md my-16"></div>
        </section>
      </div>
    </div>
  );
};

export const LocationFetchLoader = () => {
  return (
    <div className="w-full">
      <div className="w-full text-white flex justify-center items-center flex-col gap-5 h-[700px] bg-slate-900">
        <div className="relative flex item-start">
          <img
            src={Restaurant_Title_URL}
            className=" absolute rounded-xl opacity-45 w-[40px] h-[40px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          ></img>
          <span className="loader"></span>
        </div>

        <h1 className="text-3xl">Looking for great food near you....</h1>
      </div>
    </div>
  );
};

export const SearchRestaurantLoader = () => {
  return (
    <>
      <div className="res-card flex justify-center my-7">
        <div
          className="res-list flex flex-wrap m-5 ml-12"
          data-testid="shimmer"
        >
          {Array(12)
            .fill("")
            .map((_, index) => (
              <div
                className=" shimmer-card m-4 p-4 w-[250px] h-[200px] bg-gray-100 rounded-lg animate-bounce"
                key={index}
              ></div>
            ))}
        </div>
      </div>
    </>
  );
};


export const MenuLoader = () => {
  return <h1>MenuLoader</h1>;
};
