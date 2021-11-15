import React from "react";
import Webcam from "react-webcam";
import { CAPTION, TRANSLATED_CAPTION, TITLE } from "./tempData";

const { Title, CameraContainer, Caption } = require ("./styles");

const videoConstraints = {
    height: 720,
    width: 1280,
    facingMode: "user"
  };
  

export const VideoComponent = () => {
    return (
        
        <CameraContainer>
            {TITLE.map((title) => (
                <Title>{title.title}</Title>
            ))}
            <Webcam
            audio={true}
            mirrored={true}
            height={576}
            width={1024}
            ref={React.useRef(null)}
            videoConstraints={videoConstraints}/>
            {CAPTION.map((data) => (
                <Caption>{data.text}</Caption>
            ))}
            {TRANSLATED_CAPTION.map((data) => (
                <Caption>{data.text}</Caption>
            ))}
        </CameraContainer>
    );
}
export default VideoComponent;
