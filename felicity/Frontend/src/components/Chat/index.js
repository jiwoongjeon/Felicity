import React, { useRef, useState, useEffect } from 'react';
import './index.css';

export const Chat = ( { context } ) => {
    const { myVideo, role, startCall, callUser, answerCall, userVideo, callAccepted, callEnded, stream, call, isClicked, text, getAudio, stopAudio, chatArr, send } = context;

    const nickname = useRef(null);
    const message = useRef(null);
    const chatList = useRef(null);
    const displayContainer = useRef(null);

    useEffect(() => {
        displayContainer.current.scrollTo(0, displayContainer.current.scrollHeight);
        message.current.value = null;
    });

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            send(nickname.current.value, message.current.value);
        }
    }

    return (
    <div className="wrapper">
        <div className="user-container">
            <label for="nickname">이름</label>
            <input ref={nickname} type="text" id="nickname"></input>
        </div>
        <div ref={displayContainer} className="display-container">
            <ul ref={chatList} className="chatting-list">
                {chatArr.map((item, index) => {
                    return(
                        <div key={index} className={item.name === nickname.current.value ? "sent" : "received"}>
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
                <button onClick={() => send(nickname.current.value, message.current.value)}
                className="send-button" 
                value={""}>Send</button>
            </span>
        </div>
    </div>
    )
}

export default Chat