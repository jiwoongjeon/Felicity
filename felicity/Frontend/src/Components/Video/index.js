import React, { useState } from "react";


import { IoMdVideocam } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardVoice, MdAirplay, MdStopScreenShare } from "react-icons/md";

import {
    MainContainer,
    MainVideoContainer,
    VideoContainer,
    TextArea,
    Container,
    Block,
    Button,
    Patient,
    Name,
    Setting,
    Phone,
    IconBox,
} from "./styles";

const Video = ({ context }) => {
    const { myVideo, role, startCall, callUser, answerCall, userVideo, callAccepted, callEnded, stream, call, isClicked, text, getAudio, stopAudio } = context;
    const [visible, setVisible] = React.useState(true);
    const temptxt = [{ transcription: "안녕하세요", translation: "Helloo" }]
    return (
        <MainContainer>

            {callAccepted && !callEnded && (
                <MainVideoContainer>
                    <VideoContainer playsInline ref={userVideo} autoPlay />

                </MainVideoContainer>
            )}

            {visible && <Container id='container'>
                {(role) ? (
                    call.isReceivedCall && !callAccepted && (
                        <Block>
                            Are you ready to meet your doctor?
                            {console.log(role)}
                            <Button onClick={() => { answerCall(); setVisible(false); }}>
                                Let's start!
                            </Button>
                        </Block>
                    )
                ) : (
                    <Block>
                        Call your patient!
                        {console.log(role)}
                        <Button onClick={() => { callUser(); setVisible(false); }}>
                            Let's start!
                        </Button>
                    </Block>
                )}

            </Container>}
            <Patient>
                {stream && (
                    <VideoContainer playsInline muted ref={myVideo} autoPlay onClick={(!isClicked) ? (getAudio) : (stopAudio)} />

                )}
                <Name>
                    Mark Wilson
                </Name>
            </Patient>
            <TextArea>{temptxt[0].transcription}</TextArea>
            <TextArea>{temptxt[0].translation}</TextArea>
            <Setting>
                <Phone><FaPhoneAlt style={{ color: 'white', fontSize: '30px' }} /></Phone>
                <IconBox><IoMdVideocam style={{ color: 'white', fontSize: '30px' }} /></IconBox>
                <IconBox><MdKeyboardVoice style={{ color: 'white', fontSize: '30px' }} /></IconBox>
                <IconBox><MdAirplay style={{ color: 'white', fontSize: '30px' }} /></IconBox>
                <IconBox><MdStopScreenShare style={{ color: 'white', fontSize: '30px' }} /></IconBox>
            </Setting>
        </MainContainer>
    );
};

export default Video;