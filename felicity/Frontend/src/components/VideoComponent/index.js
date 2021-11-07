import React from "react";
import Webcam from "react-webcam";

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
            height={720}
            width={1280}
            ref={React.useRef(null)}
            videoConstraints={videoConstraints}/>
            <Caption>"Test"</Caption>
        </CameraContainer>
    );
}
export default VideoComponent;