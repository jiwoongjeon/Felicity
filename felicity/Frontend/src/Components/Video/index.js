import React, { useState } from "react";


import { IoMdVideocam } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { BsFillChatSquareFill } from "react-icons/bs";

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
    IconLeft,
    IconRight,
    SubtitleContainer,
    Record,
    RecordBox
} from "./styles";

const sessionStore= role => {
    var timer_end = true;
    window.sessionStorage.setItem('show',timer_end);
    if (role){
        window.location.replace("/Patient/Home");
    }
    else{
        window.location.replace("/Doctor/Home");
    }
}

const Video = ({ context }) => {
    const { myVideo, role, startCall, callUser, answerCall, userVideo, callAccepted, callEnded, stream, call, isClicked, text, getAudio, stopAudio, chatArr, send } = context;
    const [visible, setVisible] = React.useState(true);
    const [record, setRecord] = useState(false);

    // const temptxt = [{ transcription: "안녕하세요", translation: "Helloo" }]
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
            <SubtitleContainer>
                <RecordBox>
                    <div>
                        <Record disabled={record} onClick={() => { setRecord(true) }}>
                            Start
                        </Record>
                        <Record disabled={!record} onClick={() => { setRecord(false) }}>
                            Stop
                        </Record>
                        <Record disabled={record} onClick={() => { setRecord(true) }}>
                            Send
                        </Record>
                    </div>
                </RecordBox>

                <TextArea><p>{text[0].transcription}</p>
                    <p>{text[0].translation}
                    </p>
                </TextArea>
            </SubtitleContainer>

            <Setting>
                <IconLeft>
                    <IconBox><IoMdVideocam style={{ color: 'white', fontSize: '30px' }} /></IconBox>
                    <IconBox><MdKeyboardVoice style={{ color: 'white', fontSize: '30px' }} /></IconBox>
                    <IconBox><BsFillChatSquareFill style={{ color: 'white', fontSize: '30px' }} /></IconBox>
                </IconLeft>
                <IconRight>
                    <Phone onClick={() =>sessionStore(role)}><FaPhoneAlt style={{ color: 'white', fontSize: '30px' }} /></Phone>
                </IconRight>
            </Setting>

        </MainContainer>
    );
};

export default Video;