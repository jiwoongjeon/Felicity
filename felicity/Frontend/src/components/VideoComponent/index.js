import React from "react";
import Webcam from "react-webcam";
import { caption } from "./tempData";

const { CameraContainer, Caption } = require ("./styles");

const videoConstraints = {
    height: 720,
    width: 1280,
    facingMode: "user"
  };
  

export const VideoComponent = () => {
    return (
        <CameraContainer>
            <Webcam
            audio={true}
            mirrored={true}
            height={576}
            width={1024}
            ref={React.useRef(null)}
            videoConstraints={videoConstraints}/>
            {caption.map((data) => (
                <Caption>{data.text}</Caption>
            ))};
        </CameraContainer>
    );
}
export default VideoComponent;