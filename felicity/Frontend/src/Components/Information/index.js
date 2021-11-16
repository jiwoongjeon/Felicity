import React from "react";

import { IoMdSend, IoMdCreate } from "react-icons/io";
import { IoReaderOutline } from "react-icons/io5";


import {
    MainContainer,
    PatientInfoTitle,
    PatientInfoBox,
    PatientInfo,
    Label,
    Name,
    Cat,
    Content,
    Info,
    Symptom,
    ChatBox,
    ChatTitle,
    ChatList,
    ChatName,
    Chat,
    ChatContent,
    ChatTime,
    Type,
    CheckList,
    Block,
    ChatScroll,
    IconBox,
    CheckContent,
    TypeContent,
} from "./styles";

const Information = () => {
  return (
    <MainContainer>

    <PatientInfo>

    <PatientInfoTitle>
    Patient Info.
    </PatientInfoTitle>

    <PatientInfoBox>
    <Label>
        <Name>
            Mark Wilson
        </Name>
        <IconBox><IoMdCreate style={{color: '#718096', fontSize: '20px'}}/>EDIT</IconBox>
    </Label>
    <Info>
        <Cat>Age / Sex: </Cat><Content>28 / Male</Content>
    </Info>
    <Info>
        <Cat>Underlying Disease: </Cat><Content>Asthema</Content>
    </Info>
    <Info>
        <Cat>Symptom:</Cat><Symptom>Back Pain</Symptom><Symptom>Headache</Symptom>
    </Info>
    </PatientInfoBox>

    </PatientInfo>



    <ChatBox>
        <ChatTitle>
            Chat
        </ChatTitle>
        <ChatScroll>
        <ChatList>
            <ChatName>
                MW
            </ChatName>

            <Chat>
                <ChatContent>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ChatContent>
                <ChatTime>
                    18:46 PM
                </ChatTime>
            </Chat>
        </ChatList>

        <ChatList>
            <ChatName>
                MW
            </ChatName>

        <Chat>
            <ChatContent>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </ChatContent>
            <ChatTime>
            18:48 PM
            </ChatTime>
        </Chat>
        </ChatList>
        </ChatScroll>
    </ChatBox>
    <Block>
    <CheckList>
        <CheckContent>My Checklist</CheckContent>
        <IconBox><IoReaderOutline style={{color: '#FFFFFF', fontSize: '40px'}}/></IconBox>
    </CheckList>
    </Block>

    <Type>
        <TypeContent />
        <IconBox><IoMdSend style={{color: '#718096', fontSize: '20px'}}/></IconBox>
    </Type>

    </MainContainer>
  );
};

export default Information;