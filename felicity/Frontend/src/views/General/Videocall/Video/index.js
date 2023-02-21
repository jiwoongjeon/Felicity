import React, { useEffect, useState } from "react";
import { IoMdVideocam } from "react-icons/io";
import { FaPhoneAlt, FaWindows } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { BsFillChatSquareFill } from "react-icons/bs";
import { Prompt } from 'react-router'

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


  


const Video = ({ context }) => {
    const { myVideo, role, startCall, callUser, answerCall, leaveCall, userVideo, callAccepted, callEnded, stream, call, isClicked, text, getAudio, stopAudio, sendAudio, userJoined } = context;
    const [visible, setVisible] = React.useState(true);
    const [record, setRecord] = useState(false);
    const [mySpeech, setMySpeech] = useState(false);
    const roleA = JSON.parse(sessionStorage.getItem("role"));
    const name = JSON.parse(sessionStorage.getItem("name"))
    const temptxt = [{ transcription: "안녕하세요", translation: "Helloo" }]

    


    const [isNavigatingAway, setIsNavigatingAway] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (!isNavigatingAway) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    const handlePopState = () => {
      setIsNavigatingAway(true);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isNavigatingAway]);

  const handleLeavePage = (location) => {
    if (!isNavigatingAway) {
      return "Are you sure you want to leave this page?";
    }
  };

    return (
        <>
        <Prompt when={true} message={handleLeavePage} />
        
        
        <MainContainer>

            {callAccepted && !callEnded && (
                <MainVideoContainer>
                    <VideoContainer playsInline ref={userVideo} autoPlay />

                </MainVideoContainer>
            )}

            {visible && <Container id='container'>
                {(roleA) ? (
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
                            {//userJoined && <Button onClick={() => { callUser(); setVisible(false); startTimer(); }}>
                            }
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
                    {name}
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

                {mySpeech && text.transcription && <TextArea color='#ffff00'>
                    {text.transcription}<br />{text.translation}
                </TextArea>}

                {mySpeech && text.transcription == '' && <TextArea color='#ffff00'>
                    Error with translating the speech. Please try again.
                </TextArea>}

                {!mySpeech && <TextArea color='#ffffff'>
                    {text.transcription}<br />{text.translation}
                </TextArea>}

            </SubtitleContainer>

            <Setting>
                <IconLeft>
                    <IconBox><IoMdVideocam style={{ color: 'white', fontSize: '30px' }} /></IconBox>
                    <IconBox><MdKeyboardVoice style={{ color: 'white', fontSize: '30px' }} /></IconBox>
                    <IconBox><BsFillChatSquareFill style={{ color: 'white', fontSize: '30px' }} /></IconBox>
                </IconLeft>
                {/* <IconRight>
                    <Phone onClick={() => { sessionStore(role); leaveCall(); }} to="./Home"><FaPhoneAlt style={{ color: 'white', fontSize: '30px' }} /></Phone>
                </IconRight> */}
            </Setting>

        </MainContainer>
        </>
    );
};

export default Video;