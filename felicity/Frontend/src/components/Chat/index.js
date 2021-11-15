import React from 'react';
import { CHAT_DATA } from './tempData';
import './index.css';

export const Chat = () => {
    return (
        <div>
            {CHAT_DATA.map((log) => {
                if (log.type == 0) {return (<div id="chat-box"><div id="my-chat">{log.content}</div></div>)}
                    else {return (<div id="chat-box"><div id="ur-chat">{log.content}</div></div>)}
                })}
        </div>
    )
}

export default Chat
