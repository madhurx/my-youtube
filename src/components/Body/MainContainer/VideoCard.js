import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div>
      <div className="p-2 mx-2 w-[18rem] h-72 my-5">
        <img alt="thumbnail" src={thumbnails.maxres?.url} className="rounded-xl"/>
        <ul>
          <li>{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} views</li>
        </ul>
      </div>
    </div>
  );
};

export default VideoCard;
