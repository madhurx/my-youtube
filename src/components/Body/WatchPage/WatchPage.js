import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../../utils/Slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchParam] = useSearchParams();

  return (
    <div className=" px-5 py-5 flex flex-col w-full ">
      <div className="flex w-full">
      <div className="mb-5 me-10">
        <iframe
          width="900"
          height="460"
          src={"https://www.youtube.com/embed/" + searchParam.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full">
        <LiveChat/>
      </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
