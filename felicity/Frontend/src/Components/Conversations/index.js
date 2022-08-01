import React, { useRef, useState, useEffect, useContext } from 'react';
import { propTypes } from "react-bootstrap/esm/Image";
import { Container, HeaderContainer, ConversationContainer, ConversationList, Header, IconArea, InfoArea, ChattingContainer, BackBtn, AddChatRoom, PhotoArea, Preview, ReplyBtn, Username, PopupBox, Doctor, NP, Name, Profession, StartChat } from "./styles";
import moment from "moment";
import "./index.css";
import Chat_Conv from "../Chat_Conv";
import Axios from "axios";
import API_URL from "../../API/server-ip";
import { SocketContext } from '../../API/video'

const otherList = [];
var otherListLength = 0;

export const Conversations = () => {
  const role = JSON.parse(sessionStorage.getItem("role"));
  const jwt = JSON.parse(sessionStorage.getItem("jwt"));
  const myName = JSON.parse(sessionStorage.getItem("name"));
  const [isChatting, setIsChatting] = useState(false);
  const [currentConvId, setCurrentConvId] = useState(0);
  const [other, setOther] = useState('');
  const [chatListData, setChatListData] = useState([]);
  const [chatListUpdate, setChatListUpdate] = useState(false);

  const [popupOn, setPopupOn] = useState(false);

  var doctorName = '';
  var patientName = '';

  function handleBtnClk(id, receiver) {
    setCurrentConvId(id);
    setOther(receiver)
    setIsChatting(!isChatting);
  }

  function handleAddChatRoom() {
    if (!popupOn) { 
      if (role){ 
        Axios.post(`${API_URL}/get_doctor_list`)
          .then((response) => {
            for (let j = otherListLength; j < response.data.nameArr.length; j++) {
              otherList.push({ id: response.data.idArr[j], name: response.data.nameArr[j], profession: response.data.professionArr[j] });
            }
          })
      }
      else { 
        Axios.post(`${API_URL}/get_patient_list`)
          .then((response) => {
            for (let j = otherListLength; j < response.data.nameArr.length; j++) {
              otherList.push({ id: response.data.idArr[j], name: response.data.nameArr[j] });
            }
          })
      }
    }
    setPopupOn(!popupOn);
  }

  async function handleStartChat() {
    console.log(1);
    handleAddChatRoom();
    console.log(2);
    let oi = document.querySelector('input[name="other_list"]:checked').value;
    console.log(oi);
    if (role) {
      await Axios.post(`${API_URL}/get_doctor_name`, { "doctor_id": oi })
        .then((response) => {
          doctorName = response.data.doctor_name;
        });
      console.log("p")
      createChatRoom(oi, doctorName);
    }
    else {
      await Axios.post(`${API_URL}/get_patient_name`, { "patient_id": oi })
        .then((response) => {
          patientName = response.data.patient_name;
        });
      console.log("d");
      createChatRoom(oi, patientName);
    }
  }

  function createChatRoom(id, name) {
    if (role) {
      Axios.post(`${API_URL}/post_conv`, { "doctor_id": id, "patient_id": jwt, "doctor_name": name, "patient_name": myName });
    }
    else {
      Axios.post(`${API_URL}/post_conv`, { "doctor_id": jwt, "patient_id": id, "doctor_name": myName, "patient_name": name });
    }
    // setChatListData(prev => [...prev, {convId: 0, otherId: id, otherName: name}]);
    setChatListUpdate(!chatListUpdate);
  }

  useEffect(() => {
    chatListData.length = 0;
    otherList.length = 0;
    if(role) {
      Axios.post(`${API_URL}/patient_conv`, { "patient_id": jwt })
        .then((response) => {
          let cl = [];
          for (let i = 0; i < response.data.convId.length; i++) {
            cl.push({convId: response.data.convId[i], otherId: response.data.doctorId[i], otherName: response.data.doctorName[i]});
          }
          setChatListData(prev => [...prev, ...cl]);
        })
      Axios.post(`${API_URL}/get_doctor_list`)
        .then((response) => {
          otherListLength = response.data.nameArr.length;
          for (let k = 0; k < response.data.nameArr.length; k++) {
            otherList.push({ id: response.data.idArr[k], name: response.data.nameArr[k], profession: response.data.professionArr[k] });
          }
        })
    }
    else {
      Axios.post(`${API_URL}/doctor_conv`, { "doctor_id": jwt })
        .then((response) => {
          let cl = [];
          for (let i = 0; i < response.data.convId.length; i++) {
            cl.push({convId: response.data.convId[i], otherId: response.data.patientId[i], otherName: response.data.patientName[i]});
          }
          setChatListData(prev => [...prev, ...cl]);
        })
      Axios.post(`${API_URL}/get_patient_list`)
        .then((response) => {
          otherListLength = response.data.nameArr.length;
          for (let k = 0; k < response.data.nameArr.length; k++) {
            otherList.push({ id: response.data.idArr[k], name: response.data.nameArr[k] });
          }
        })
    }
  }, [chatListUpdate]);

  const Popup = () => {
    return (
      <PopupBox>
        {otherList.map((list) => (
        <Doctor>
          <NP>
            <Name>{list.name}</Name>
            <Profession>{list.profession}</Profession>
          </NP>
            <input type="radio" name="other_list" value={list.id}></input>
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
