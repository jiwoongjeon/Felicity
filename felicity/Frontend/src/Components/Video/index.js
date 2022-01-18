import React, { useState, useContext, useEffect } from "react";


import { IoMdVideocam } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardVoice, MdAirplay, MdStopScreenShare } from "react-icons/md";

import {
    MainContainer,
    Container,
    Block,
    Button,
    Patient,
    Name,
    Setting,
    Phone,
    IconBox,
} from "./styles";

import { SocketContext } from "../../api/video";

const Video = ({ myVideo }) => {
    const { role, startCall, callUser, answerCall, userVideo, callAccepted, callEnded, stream, call, isClicked, text, getAudio, stopAudio } = useContext(SocketContext);

    useEffect(() => startCall(), []);

    return (
        <MainContainer>
            {stream && (
                <video playsInline muted ref={myVideo} autoPlay onClick={(!isClicked) ? (getAudio) : (stopAudio)} />
            )}
            {callAccepted && !callEnded && (
                <div>
                    <video playsInline ref={userVideo} autoPlay />
                    <textarea>{text[0].transcription}</textarea>
                    <textarea>{text[0].translation}</textarea>
                </div>
            )}
            <Container>
                {(role) ? (
                    call.isReceivedCall && !callAccepted && (
                        <Block>
                            Are you ready to meet your doctor?
                            {console.log(role)}
                            <Button onClick={answerCall}>
                                Let's start!
                            </Button>
                        </Block>
                    )
                ) : (
                    <Block>
                        Call your patient!
                        {console.log(role)}
                        <Button onClick={callUser}>
                            Let's start!
                        </Button>
                    </Block>
                )}
                {/* <Block>
                    Are you ready to meet your doctor?
                    {console.log(role)}
                    <Button onClick={(role) ? (answerCall) : (callUser)}>
                        Let's start!
                    </Button>
                </Block> */}


            </Container>
            <Patient>
                <Name>
                    Mark Wilson
                </Name>
            </Patient>

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