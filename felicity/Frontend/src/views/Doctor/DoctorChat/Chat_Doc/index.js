import React, { useRef, useState, useEffect, useContext } from 'react';
import { SocketContext } from '../../../../API/video'
import './index.css';
import socket from "../../../../API/socket";
import API_URL from "../../../../API/server-ip";
import Axios from "axios";
import { ServerStyleSheet } from 'styled-components';
import { render } from 'react-dom';

const moment = require("moment");

export const Chat_Doc = (props) => {
    const { docConvSend } = useContext(SocketContext);

    const myName = JSON.parse(sessionStorage.getItem("name"));

    const [chatData, setChatData] = useState([]);
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");
    const [view, setView] = useState("");

    const messageBox = useRef(null);
    const fileBox = useRef(null);
    const chatList = useRef(null);
    const displayContainer = useRef(null);

    useEffect(() => {
        socket.once("doctorchatting", (data) => {
            const { name, msg, time, file } = data;
            setChatData(prev => [...prev, ...[{ name: name, msg: msg, time: time, file: file }]]);
        });
        return (() => {
            socket.off("doctorchatting");
        })
    })

    useEffect(() => {
        displayContainer.current.scrollTo(0, displayContainer.current.scrollHeight);
        messageBox.current.value = null;
        fileBox.current.value = null;
    }, [chatData]);

    useEffect(() => {
        Axios.post(`${API_URL}/get_doctor_chat`)
            .then((response) => {
                let cd = [];
                for (let i = 0; i < response.data.nameArr.length; i++) {
                    cd.push({
                        name: response.data.nameArr[i],
                        msg: response.data.chatArr[i],
                        time: response.data.timeArr[i],
                        file: response.data.fileArr[i]
                    });
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
        if (messageBox.current.value !== '' || fileBox.current.value !== '') {
            docConvSend({ msg: messageBox.current.value, file: file, file_name: fileName });
            setFile();
            setFileName("");
        }
    }

    const handleUpload = (e) => {
        let fd = new FormData();
        var ext = e.target.files[0].name.split(".").pop();
        var file_name = "file" + "-" + Date.now() + "." + ext;
        fd.append('file', e.target.files[0], file_name);
        setFile(fd);
        setFileName(file_name);
    }

    return (
        <div className="wrapper">
            <div ref={displayContainer} className="display-container">
                <ul ref={chatList} className="chatting-list">
                    {chatData.map((item, index) => {
                        return (
                            <div key={index} className={item.name === myName ? "sent" : "received"}>
                                <span className="profile">
                                    <span className="user">{item.name}</span>
                                    {/* <img className="image" src="https://i.imgur.com/mNJWYVi.png" alt="any"></img> */}
                                </span>
                                {item.file === "" ?
                                    ""
                                    :
                                    <span className='files'>
                                        <img className="image" src={API_URL + "/uploads/" + item.file} alt="any"></img>
                                    </span>
                                }
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
                    <input ref={fileBox} type="file" className="chatting-file-input" onChange={handleUpload}></input>
                    <button onClick={() => handleOnClick()}
                        className="send-button"
                        value={""}>Send</button>
                </span>
            </div>
        </div>
    )
}

export default Chat_Doc