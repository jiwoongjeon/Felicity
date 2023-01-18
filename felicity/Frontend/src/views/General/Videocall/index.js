import React, { useContext } from "react"
import { Directory, Background, Video } from './styles';
import Layout from './Layout';
import Path from '../../Components/Path';
import { SocketContext } from "../../../API/video";
import UserRedirect from "../../Components/UserRedirect";

function Videocall(props) {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"))

  const { myVideo, role, startCall, callUser, answerCall, leaveCall, userVideo, callAccepted, callEnded, stream, call, isClicked, text, getAudio, stopAudio, sendAudio, chatArr, send, userJoined } = useContext(SocketContext);
  const context = { myVideo, role, startCall, callUser, answerCall, leaveCall, userVideo, callAccepted, callEnded, stream, call, isClicked, text, getAudio, stopAudio, sendAudio, chatArr, send, userJoined }

  // useEffect(() => startCall(), []);

  return (
    <Background>
      {!jwt && <UserRedirect isRole={!props.isDoctor} />}

      <Directory>
        {props.isDoctor &&
          <Path directory="Meeting" title="Meeting with your Patient" meeting={true} />}
        {!props.isDoctor &&
          <Path directory="Meeting" title="Meeting with your Doctor" meeting={true} />}
      </Directory>

      <Video>
        <Layout context={context} />
      </Video>
    </Background>
  );
}

export default Videocall;
