import React from "react";
import Webcam from "react-webcam";

const { CameraContainer } = require ("./styles");

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  

export const VideoComponent = () => {
    return (
        <CameraContainer>
            <>
            <Webcam
            audio={false}
            height={720}
            ref={React.useRef(null)}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
            />
            </>
        </CameraContainer>
        
    );
}
export default VideoComponent;