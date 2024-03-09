import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, SetSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggetions, SetShowSuggetions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timmer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugestion();
      }
    }, 200);
    return () => {
      clearTimeout(timmer);
    };
  }, [searchQuery]);

  const getSearchSugestion = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-9 cursor-pointer"
          alt="hamburger-logo"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <a href="/">
          <img
            className="h-7 mx-2"
            alt="youtube-logo"
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full text-black"
            type="text"
            value={searchQuery}
            onChange={(e) => SetSearchQuery(e.target.value)}
            onFocus={() => SetShowSuggetions(true)}
            onBlur={() => SetShowSuggetions(false)}
          />
          <button className=" border border-gray-400 px-5 py-2 rounded-r-full hover:bg-gray-100">
            Search
          </button>
        </div>
        {showSuggetions && (
          <div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-9"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
