import React, { useState } from "react";


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

const Video = ({ myVideo }) => {
    return (
        <MainContainer>
            <Container>
                <Block>
                    Are you ready to meet your doctor?
                    <Button>
                        Let's start!
                    </Button>
                </Block>

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