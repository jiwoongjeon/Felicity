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

const sessionStore = role => {
    var timer_end = true;
    window.sessionStorage.setItem('show', timer_end);
    if (role) {
        window.location.replace("/Patient/Home");
    }
    else {
        window.location.replace("/Doctor/Home");
    }
}

const Video = ({ context }) => {
    const { myVideo, role, startCall, callUser, answerCall, userVideo, callAccepted, callEnded, stream, call, isClicked, text, getAudio, stopAudio, sendAudio, userJoined } = context;
    const [visible, setVisible] = React.useState(true);
    const [record, setRecord] = useState(false);
    const [mySpeech, setMySpeech] = useState(false);

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
                        {!userJoined && <Button color="#bbbbbb">The patient didn't joined yet</Button>}
                        {userJoined && <Button onClick={() => { callUser(); setVisible(false); }}>
                            Let's start!
                        </Button>}
                    </Block>
                )}

            </Container>}
            <Patient>
                {stream && (
                    <VideoContainer playsInline muted ref={myVideo} autoPlay />

                )}
                <Name>
                    Mark Wilson
                </Name>
            </Patient>
            <SubtitleContainer>
                <RecordBox>
                    <div>
                        <Record disabled={record} onClick={() => { setRecord(true); setMySpeech(true); getAudio() }}>
                            Start
                        </Record>
                        <Record disabled={!record} onClick={() => { setRecord(false); stopAudio() }}>
                            Stop
                        </Record>
                        <Record disabled={record} onClick={() => { sendAudio(); setMySpeech(false); }}>
                            Send
                        </Record>
                    </div>
                </RecordBox>

                {mySpeech && <TextArea color='#ffff00'>
                    {text[0].transcription}<br/>{text[0].translation}
                </TextArea> }

                {!mySpeech && <TextArea color='#ffffff'>
                    {text[0].transcription}<br/>{text[0].translation}
                </TextArea>}
            </SubtitleContainer>

            <Setting>
                <IconLeft>
                    <IconBox><IoMdVideocam style={{ color: 'white', fontSize: '30px' }} /></IconBox>
                    <IconBox><MdKeyboardVoice style={{ color: 'white', fontSize: '30px' }} /></IconBox>
                    <IconBox><BsFillChatSquareFill style={{ color: 'white', fontSize: '30px' }} /></IconBox>
                </IconLeft>
                <IconRight>
                    <Phone onClick={() => sessionStore(role)}><FaPhoneAlt style={{ color: 'white', fontSize: '30px' }} /></Phone>
                </IconRight>
            </Setting>

        </MainContainer>
    );
};

export default Video;