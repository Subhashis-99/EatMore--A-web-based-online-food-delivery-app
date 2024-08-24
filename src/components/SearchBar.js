import { useContext } from "react";
import userContext from "../utils/userContext";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [SearchText, SetSearchText] = useState("");
  const { user, setUser } = useContext(userContext);
  // console.log(user);
  return (
    <>
      <div className="flex justify-center">
        <input
          className="search p-2 m-5 border-2 hover:bg-orange-100"
          data-testid="search-input"
          type="text"
          placeholder="search"
          value={SearchText}
          onChange={(e) => {
            SetSearchText(e.target.value);
          }}
        />
        <button
          data-testid="search-btn"
          className="bg-orange-600 p-2 m-5 rounded-md hover:text-white"
          onClick={onSearch}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value,
            })
          }
        />
        <input
          value={user.email}
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value,
            })
          }
        />
      </div>
    </>
  );
};
export default SearchBar;
