import React, { useContext, useEffect } from "react"
import Header from '../../Components/Header/Header';
import { Mostouter, Directory, User, Cat, Title, Chat, Video, Empty } from '../../Components/mostouter';
import Layout from '../../Components/Layout';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

// import { LayoutOuter } from './components/LayoutOuter copy';

import { SocketContext } from "../../API/video";
import UserRedirect from "../UserRedirect";

function Videocall(props) {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"))

  const { myVideo, role, startCall, callUser, answerCall, leaveCall, userVideo, callAccepted, callEnded, stream, call, isClicked, text, getAudio, stopAudio, sendAudio, chatArr, send, userJoined } = useContext(SocketContext);
  const context = { myVideo, role, startCall, callUser, answerCall, leaveCall, userVideo, callAccepted, callEnded, stream, call, isClicked, text, getAudio, stopAudio, sendAudio, chatArr, send, userJoined }

  // useEffect(() => startCall(), []);

  return (
    <Mostouter>

      {!jwt && <UserRedirect isRole={!props.isDoctor} />}

      <Cat>
        <Header isDoctor={props.isDoctor} />
      </Cat>

      <Directory>
        {props.isDoctor &&
          <Path directory="Meeting" title="Meeting with your Patient" meeting={true} />}
        {!props.isDoctor &&
          <Path directory="Meeting" title="Meeting with your Doctor" meeting={true} />}

      </Directory>

      <User>
        <Login />
      </User>


      <Video>
        <Layout context={context} />
      </Video>


    </Mostouter>


  );
}

export default Videocall;
