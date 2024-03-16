import React, { useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import { useEffect } from "react";
import Videocard from "./Videocard";

function Container() {
  const [data, setData] = useState([]);
  const getVideos = async () => {
    const res = await fetch(YOUTUBE_VIDEO_API);
    const data = await res.json();
    setData(data.items);
  };
  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="w-[80%] min-h-screen flex flex-wrap">
      {data.map((video) => (
        <Videocard data={video} />
      ))}
    </div>
  );
}

export default Container;
