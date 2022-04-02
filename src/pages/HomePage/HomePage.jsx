import { React } from "react";
import '../../main.scss';
//import { Component } from "react";
import ReactPlayer from "react-player";

export const HomePage = () => {
  return (
    <div className="container-video">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=zMeQmrzFrAw"
        className="react-player"
        playing
        width="1000px"
        height="700px"
        volume="0.3"
      />
    </div>
  );
};
