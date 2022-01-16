import React, { useState, useContext } from "react";


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

    const { role, callUser, answerCall, userVideo } = useContext(SocketContext);

    return (
        <MainContainer>
            <video playsInline muted ref={myVideo} autoPlay />
            <Container>
                <Block>
                    Are you ready to meet your doctor?
                    {console.log(role)}
                    <Button onClick={(role) ? (answerCall) : (callUser)}>
                        Let's start!
                    </Button>
                </Block>

            </Container>
            <Patient>
                <video playsInline ref={userVideo} autoPlay />
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