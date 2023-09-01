import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../../../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEOS_API);
    const response = await res.json();
    setVideos(response.items);
  };

  return (
    <div className="flex flex-wrap ">
      {videos.length > 0 &&
        videos.map((x) => {
          return (
            <Link to={"/watch?v=" + x.id} key={x.id}>
              <VideoCard info={x} />
            </Link>
          );
        })}
    </div>
  );
};

export default VideoContainer;
