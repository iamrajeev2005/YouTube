import React from "react";

function Videocard({ data }) {
  function formatViewCount(count) {
    if (count >= 1e9) {
      return (count / 1e9).toFixed(1) + "B";
    } else if (count >= 1e6) {
      return (count / 1e6).toFixed(1) + "M";
    } else if (count >= 1e3) {
      return (count / 1e3).toFixed(1) + "K";
    } else {
      return count.toString();
    }
  }
  console.log(data);
  return (
    data && (
      <div className="w-[25vw] h-fit flex flex-col rounded-lg m-2 cursor-pointer">
        <img
          className="w-[25vw] h-[14vw] rounded-lg object-cover"
          src={data?.snippet?.thumbnails?.high.url}
          alt=""
        />
        <div className="flex items-start justify-start py-4 gap-2">
          {/* <img
            className="bg-green-600 rounded-full object-cover"
            src=""
            alt=""
          /> */}
          <div className="flex flex-col gap-1">
            <h1 className="text-md leading-tight font-semibold">
              {data?.snippet?.title.slice(0, 50)}
            </h1>
            <p className="text-sm leading-tight">
              {data?.snippet?.channelTitle}
            </p>
            <p className="text-sm leading-tight">
              {formatViewCount(data?.statistics?.viewCount)} Views • 2 hours ago
            </p>
          </div>
        </div>
      </div>
    )
  );
}

export default Videocard;
