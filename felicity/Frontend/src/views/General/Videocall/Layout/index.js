import { useContext, useState, useEffect } from "react";
import Axios from "axios";
import API_URL from "../../../../API/server-ip";
import { SocketContext } from "../../../../API/video";
import { ContentLayout, TimerBox, TitleBox, NoteBox, VideoBox, ChatBox, InfoBox } from "./styles";
import Video from '../Video';
import Title from '../Title';
// import Infos from '../Infos';
import Infos from "../tempInfo";
import Timer from '../Timer';
import Chat from '../Chat_Video';
import Note from "../Note";
// import CallEndButton from '../CallEndButton';

const Layout = ({ context }) => {
    const { did, pid, role } = useContext(SocketContext);
    const [doctorName, setDoctorName] = useState();
    const [patientName, setPatientName] = useState();
    const [note, setNote] = useState('');

    useEffect(() => {
      Axios.post(`${API_URL}/dstatus`, { "doctorId": did})
            .then((response) => {
              setDoctorName(response.data[0].lastname)
            })
      Axios.post(`${API_URL}/pstatus`, { "patientId": pid})
            .then((response) => {
              setPatientName(response.data[0].firstname + " " + response.data[0].lastname)
            })
    }, [])

    return (

        <ContentLayout>

            <InfoBox>
                <Infos doctorName={doctorName} patientName={patientName}/>
            </InfoBox>

            <NoteBox>
                {role && <Note note={note} setNote={setNote} />}
            </NoteBox>

            <TitleBox>
                <Title doctorName={doctorName} patientName={patientName} context={context}/>
            </TitleBox>

            <VideoBox>
                <Video context={context}/>
            </VideoBox>

            {/* <TimerBox>
                <Timer role={context.role}/> 
            </TimerBox> */}

            <ChatBox>
                <Chat context={context}/>
            </ChatBox>

        </ContentLayout>
    );
};

export default Layout;