import React, { useRef, useState, useEffect, useContext } from 'react';
import { SocketContext } from '../../API/video'
import './index.css';
import { io } from "socket.io-client";
import API_URL from "../../API/server-ip";
import Axios from "axios";
import { ServerStyleSheet } from 'styled-components';
import { render } from 'react-dom';

const moment = require("moment");

const socket = io(`${API_URL}`);

export const Chat_Doc = (props) => {
    const { docConvSend } = useContext(SocketContext);

    const myName = JSON.parse(sessionStorage.getItem("name"));

    const [sent, setSent] = useState(0);
    const [chatData, setChatData] = useState([]);


    const messageBox = useRef(null);
    const chatList = useRef(null);
    const displayContainer = useRef(null);

    // useEffect(() => {
    //     socket.once("chatting", (data) => {
    //         setReceived(1);
    //     });
    //     return (() => {
    //         socket.off("chatting");
    //     })
    // })

    useEffect(() => {
        displayContainer.current.scrollTo(0, displayContainer.current.scrollHeight);
        messageBox.current.value = null;
        setSent(0);
    }, [sent]); 

    useEffect(() => {
        Axios.post(`${API_URL}/get_doctor_chat`)
            .then((response) => {
                let cd = [];
                for (let i=0; i < response.data.nameArr.length; i++) {
                    cd.push({ 
                            name: response.data.nameArr[i],
                            msg: response.data.chatArr[i],
                            time: response.data.timeArr[i] });
                }
                setChatData(prev => [...prev, ...cd]);
                displayContainer.current.scrollTo(0, displayContainer.current.scrollHeight);
            })
            .catch((err) => {
                setChatData([]);
            })
    }, []);


    
    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            handleOnClick();
        }
    }

    const handleOnClick = () => {
        var currentTime = moment(new Date()).format("YYYY-MM-DD hh:mm A");
        docConvSend(messageBox.current.value);
        chatData.push({ name: myName, msg: messageBox.current.value, time: currentTime});
        setSent(1);
    }

    return (
    <div className="wrapper">
        <div ref={displayContainer} className="display-container">
            <ul ref={chatList} className="chatting-list">
                {chatData.map((item, index) => {
                    return(
                        <div key={index} className={item.name === myName ? "sent" : "received"}>
                            <span className="profile">
                                <span className="user">{item.name}</span>
                                {/* <img className="image" src="https://i.imgur.com/mNJWYVi.png" alt="any"></img> */}
                            </span>
                            <span className="mt">
                                <span className="message">{item.msg}</span>
                                <span className="times">{item.time}</span>
                            </span>
                        </div>
                        );
                    })
                }           
            </ul>
        </div>
        <div className="input-container">
            <span>
                <input ref={messageBox} type="text" className="chatting-input" onKeyDown={handleKeyDown} placeholder='enter your message'></input>
                <button onClick={() => handleOnClick()}
                className="send-button" 
                value={""}>Send</button>
            </span>
        </div>
    </div>
    )
}

export default Chat_Doc