import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-20 absolute bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg w-1/2 text-white">{overview}</p>
      <div className="">
        <button className="rounded-lg bg-white text-black w-32 h-12 hover:bg-opacity-90">
          {" "}
          ⏯️ Play
        </button>
        <button className="rounded-lg mx-4 bg-white text-black w-32 h-12">
          {" "}
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
