import React from "react";

const VideoCard = () => {
  return (
    <section className="flex bg-gray justify-center items-center">
      <div className="my-8 h-[253px] w-[448px] tab:w-[840px] tab:h-[473px] rounded-xl overflow-hidden">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/zodYPzR2c0M"
          title="YouTube video player"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </section>
  );
};

export default VideoCard;
