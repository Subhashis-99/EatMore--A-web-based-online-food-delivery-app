import usePageAnimations from "../utils/usePageAnimations";
const Shimmer = () => {
  const { ShimmerRef } = usePageAnimations();

  return (
    <>
      <div
        ref={ShimmerRef}
        className="search-functionality flex justify-center"
      >
        <input
          type="text"
          placeholder="search"
          className="search p-2 m-5 border-2 hover:bg-orange-100 "
        />
        <button className="bg-orange-600 p-2 m-5 rounded-md hover:text-white">
          Search
        </button>
      </div>

      <div className="res-card flex justify-center">
        <div
          className="res-list flex flex-wrap m-5 ml-12"
          data-testid="shimmer"
        >
          {Array(12)
            .fill("")
            .map((_, index) => (
              <div
                className=" shimmer-card m-4 p-4 w-[250px] h-[200px] bg-gray-100 rounded-lg"
                key={index}
              ></div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Shimmer;
