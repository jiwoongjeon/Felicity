import React, { useRef, useState, useEffect, useContext } from 'react';
import { propTypes } from "react-bootstrap/esm/Image";
import { Container, HeaderContainer, ConversationContainer, ConversationList, Header, IconArea, InfoArea, ChattingContainer, BackBtn, AddChatRoom, PhotoArea, Preview, ReplyBtn, Username, PopupBox, Doctor, NP, Name, Profession, StartChat } from "./styles";
import moment from "moment";
import "./index.css";
import Chat_Conv from "../Chat_Conv";
import Axios from "axios";
import API_URL from "../../API/server-ip";
import { SocketContext } from '../../API/video'

const doctorList = [];
var doctorListLength = 0;

export const Conversations = () => {
  const jwt = JSON.parse(sessionStorage.getItem("jwt"))
  const myName = JSON.parse(sessionStorage.getItem("name"));
  const [isChatting, setIsChatting] = useState(false);
  const [currentConvId, setCurrentConvId] = useState(0);
  const [other, setOther] = useState('');
  const [chatListData, setChatListData] = useState([]);
  const [chatListUpdate, setChatListUpdate] = useState(false);

  const [popupOn, setPopupOn] = useState(false);

  var doctorName = '';

  function handleBtnClk(id, receiver) {
    setCurrentConvId(id);
    setOther(receiver)
    setIsChatting(!isChatting);
  }

  function handleAddChatRoom() {
    if (!popupOn) { 
      Axios.post(`${API_URL}/post_doctor_list`)
        .then((response) => {
          for (let j = doctorListLength; j < response.data.nameArr.length; j++) {
            doctorList.push({ name: response.data.nameArr[j], profession: response.data.professionArr[j] });
          }
        })
    }
    setPopupOn(!popupOn);
  }

  async function handleStartChat() {
    handleAddChatRoom();
    let di = document.querySelector('input[name="doctor_list"]:checked').value;
    await Axios.post(`${API_URL}/get_doctor_name`, { "doctor_id": di})
      .then((response) => {
        doctorName = response.data.doctor_name;
      });
    createChatRoom(di, doctorName);
  }

  function createChatRoom(id, name) {
    Axios.post(`${API_URL}/post_conv`, { "doctor_id": id, "patient_id": jwt, "doctor_name": name, "patient_name": myName })
    // setChatListData(prev => [...prev, {convId: 0, otherId: id, otherName: name}]);
    setChatListUpdate(!chatListUpdate);
  }

  useEffect(() => {
    chatListData.length = 0;
    Axios.post(`${API_URL}/patient_conv`, { "patient_id": jwt })
      .then((response) => {
        let cl = [...chatListData];
        for (let i = 0; i < response.data.convId.length; i++) {
          cl.push({convId: response.data.convId[i], otherId: response.data.doctorId[i], otherName: response.data.doctorName[i]});
        }
        setChatListData(prev => [...prev, ...cl]);
      })
    Axios.post(`${API_URL}/post_doctor_list`)
      .then((response) => {
        doctorListLength = response.data.nameArr.length;
        for (let k = 0; k < response.data.nameArr.length; k++) {
          doctorList.push({ id: response.data.idArr[k], name: response.data.nameArr[k], profession: response.data.professionArr[k] });
        }
      })
  }, [chatListUpdate])

  const Popup = () => {
    return (
      <PopupBox>
        {doctorList.map((list) => (
        <Doctor>
          <NP>
            <Name>{list.name}</Name>
            <Profession>{list.profession}</Profession>
          </NP>
          <input type="radio" name="doctor_list" value={list.id}></input>
        </Doctor>
        ))}
        <StartChat onClick={() => handleStartChat()}>Start Chat!</StartChat>
      </PopupBox>
    )
  }
 
  return ( 
    <Container>
      <HeaderContainer>
        <Header>Conversations</Header>
        <AddChatRoom onClick={() => handleAddChatRoom()}></AddChatRoom>
      </HeaderContainer>
      <ConversationList>
      { popupOn ? <Popup /> : '' }
        { isChatting ?
        <ChattingContainer>
          <Chat_Conv convId={currentConvId} other={other}/>
          <BackBtn onClick={() => handleBtnClk(0)}>Back</BackBtn>
        </ChattingContainer>
        :
        chatListData.map((chat, index) => (
          <ConversationContainer>
            {/* <PhotoArea img = {data.img}/> */}
            <InfoArea>
              <Username>{chat.otherName}</Username>
              {/* <Preview>HI</Preview> */}
            </InfoArea>
            <IconArea>
              <ReplyBtn onClick={() => handleBtnClk(chat.convId, chat.otherName)}>Enter</ReplyBtn>
            </IconArea>
          </ConversationContainer>
        )) }
      </ConversationList>

    </Container>
  );
};

export default Conversations;
