import React from "react";
import Webcam from "react-webcam";

const { CameraContainer } = require ("./styles");

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
            height={720}
            width={1280}
            ref={React.useRef(null)}
            videoConstraints={videoConstraints}/>
        </CameraContainer>
    );
}
export default VideoComponent;