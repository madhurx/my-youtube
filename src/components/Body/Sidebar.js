import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-64 ps-4 pt-3 shadow-2xl h-[90vh]">
      <div className="mb-4">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Shorts</li>
          <li>Subscription</li>
        </ul>
      </div>

      <div className="mb-4">
        <h1 className="font-bold text-xl">Topics</h1>
        <ul className="">
          <li>Sports</li>
          <li>Music</li>
          <li>News</li>
          <li>Gaming</li>
        </ul>
      </div>

      <div className="mb-4">
        <h1 className="font-bold text-xl">You »</h1>
        <ul>
          <li>History</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>
          <li>Playlist</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
