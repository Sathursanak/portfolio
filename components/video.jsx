import React from "react";

const VideoPage = () => {
  return (
    <div>
      <h1>Video Example</h1>
      <video width="600" controls>
        <source src="/vdo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPage;
