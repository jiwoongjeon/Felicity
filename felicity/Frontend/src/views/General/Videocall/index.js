import React, { useContext } from "react"
import { Background, Video } from './styles';
import Layout from './Layout';
import { SocketContext } from "../../../API/video";
import UserRedirect from "../../Components/UserRedirect";

function Videocall(props) {

const jwt = JSON.parse(sessionStorage.getItem("jwt"))
const { myVideo, role, startCall, callUser, answerCall, leaveCall, userVideo, callAccepted, callEnded, stream, call, isClicked, text, getAudio, stopAudio, sendAudio, chatArr, send, userJoined } = useContext(SocketContext);
const context = { myVideo, role, startCall, callUser, answerCall, leaveCall, userVideo, callAccepted, callEnded, stream, call, isClicked, text, getAudio, stopAudio, sendAudio, chatArr, send, userJoined }

return (
	<Background>
		{!jwt && <UserRedirect isRole={!props.isDoctor} />}
		<Video>
			<Layout context={context} />
		</Video>
	</Background>
);
}

export default Videocall;