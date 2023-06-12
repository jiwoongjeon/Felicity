import { useContext, useState, useEffect } from "react";
import Axios from "axios";
import { Prompt, browserHistory } from 'react-router'
import API_URL from "../../../../API/server-ip";
import { SocketContext } from "../../../../API/video";
import { ContentLayout, TimerBox, TitleBox, NoteBox, VideoBox, ChatBox, InfoBox } from "./styles";
import Video from '../Video';
import Title from '../Title';
import Infos from "../Information";
import Timer from '../Timer';
import Chat from '../Chat_Video';
import Note from "../Note";

const Layout = ({ context }) => {
    const { did, pid, role } = useContext(SocketContext);
    const [doctorName, setDoctorName] = useState();
    const [patientName, setPatientName] = useState();
    const [note, setNote] = useState('');

    useEffect(() => {
        Axios.post(`${API_URL}/dstatus`, {"doctorId": did})
            .then((response) => {
                setDoctorName(response.data[0].lastname)
            })
        Axios.post(`${API_URL}/pstatus`, {"patientId": pid})
            .then((response) => {
                setPatientName(response.data[0].firstname + " " + response.data[0].lastname)
            })
    }, [])

    // Handle using back button --> !! this disable the use of back button, however it also make user disconnected when page is reloaded !!
    // const preventGoBack = () => {
    //     window.history.pushState(null, "", window.location.href);
    // };
    
    // useEffect(() => {
    //     window.history.pushState(null, "", window.location.href);
    //     window.addEventListener("popstate", preventGoBack);
    
    //     return () => {
    //     window.removeEventListener("popstate", preventGoBack);
    //     };
    // }, []);

    // Handle closing the tab or reload
    const [isNavigatingAway, setIsNavigatingAway] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
        if (!isNavigatingAway) {
            event.preventDefault();
            event.returnValue = "";
        }
        };
    
        const handlePopState = () => {
            setIsNavigatingAway(true);
        };
    
        window.addEventListener("beforeunload", handleBeforeUnload);
        window.addEventListener("popstate", handlePopState);
    
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            window.removeEventListener("popstate", handlePopState);
        };
    }, [isNavigatingAway]);
    
    const handleLeavePage = (location) => {
        if (!isNavigatingAway) {
            return "Are you sure you want to leave this page?";
        }
    };

    

    return (
        <ContentLayout>
            <Prompt when={true} message={handleLeavePage} />

            <InfoBox>
                <Infos doctorName={doctorName} patientName={patientName}/>
            </InfoBox>

            <NoteBox>
                {!role && <Note note={note} setNote={setNote} />}
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