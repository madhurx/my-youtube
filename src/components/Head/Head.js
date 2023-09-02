import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/images/youtubeLongLogo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { toggleMenu } from "../../utils/Slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";
import { cacheResults } from "../../utils/Slices/searchSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [sugg, setSugg] = useState([]);
  const [showSugg, setShowSugg] = useState(true);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSugg(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 350);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await res.json();
    setSugg(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col p-2 mb-1 shadow-lg shadow-gray-200">
      <div className="flex col-span-1">
        <div className="pt-1">
          <MenuIcon
            fontSize="large"
            onClick={() => toggleMenuHandler()}
            className="cursor-pointer"
          />
        </div>
        <a href="/">
          <img src={Logo} alt="Youtube Logo" className="h-11" />
        </a>
      </div>

      <div className=" grid col-span-8">
        <div className=" px-1 text-center relative">
          <input
            type="text"
            className="w-1/2 border border-gray-400 border-e-gray-100 p-2 px-5 rounded-l-full "
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSugg(true)}
            onBlur={() => setShowSugg(false)}
          />
          <button className="border border-gray-400 rounded-r-full p-2 bg-slate-100">
            🔍
          </button>
        </div>
        {showSugg && (
          <div className="shadow-lg w-[29rem] mt-12 px-3 flex-row flex justify-self-center absolute overflow-hidden bg-white">
            <ul className="w-[28rem]">
              {sugg.map((x) => {
                return (
                  <li className=" shadow-sm py-1" key={x}>
                    {x}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-2 text-end pe-5">
        <AccountCircleIcon fontSize="large" className="h-10" />
      </div>
    </div>
  );
};

export default Head;
