import React, { useRef, useState, useEffect, useContext } from 'react';
import { SocketContext } from '../../API/video'
import './index.css';

export const Chat_Video = () => {
    const { chatArr, videoCallSend } = useContext(SocketContext);

    const myName = JSON.parse(sessionStorage.getItem("name"));

    const message = useRef(null);
    const chatList = useRef(null);
    const displayContainer = useRef(null);

    useEffect(() => {
        displayContainer.current.scrollTo(0, displayContainer.current.scrollHeight);
        message.current.value = null;
    });

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            videoCallSend(message.current.value);
        }
    }

    return (
    <div className="wrapper">
        <div ref={displayContainer} className="display-container">
            <ul ref={chatList} className="chatting-list">
                {chatArr.map((item, index) => {
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
                <input ref={message} type="text" className="chatting-input" onKeyDown={handleKeyDown} placeholder='enter your message'></input>
                <button onClick={() => videoCallSend(message.current.value)}
                className="send-button" 
                value={""}>Send</button>
            </span>
        </div>
    </div>
    )
}

export default Chat_Video