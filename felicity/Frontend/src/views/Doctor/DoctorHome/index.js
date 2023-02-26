import React, { useContext, useState } from "react"
import Header from '../../Components/Header/Header';
import { Mostouter, Directory, User, Cat, Video } from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';
import { ContentLayout, PatientBox, InfoBox, Button, Block, Container, CalendarBox } from "./layout";
import PatientList from './PatientsList';
import CV from './CV';
import Axios from "axios";
import UserRedirect from "../../Components/UserRedirect";
import Calen from "./CalenDoctor";
import API_URL from "../../../API/server-ip";
import { SocketContext } from "../../../API/video";

function Doctor(props) {

    const jwt = JSON.parse(sessionStorage.getItem("jwt"))
    const show = JSON.parse(sessionStorage.getItem("show"))

    const [scheduleData, setScheduleData] = useState([])
    const [displayedData, setDisplay] = useState({})
    const [visible, setVisible] = useState(true)
    const [isNote, setIsNote] = useState(false)
    const [note, setNote] = useState('');
    const [rid, setRid] = useState();
    const [sid, setSid] = useState();
    const { startCall, UTCToLocal } = useContext(SocketContext);

    React.useEffect(() => {
        Axios.post(`${API_URL}/doctor_schedule`, { "doctor_id": jwt })
            .then((response) => {
                for (var i = 0; i < response.data.length; i++) {
                    var [date, time] = UTCToLocal(response.data[i].reserved_date, response.data[i].reserved_time)
                    response.data[i].reserved_date = date
                    response.data[i].reserved_time = time
                }
                setScheduleData(response.data)
            })
    }, [])
    console.log(scheduleData)

    function sy(array) {
        var array1 = []
        if (array[0] === 1) {
            array1.push("Cough")
        }
        if (array[1] === 1) {
            array1.push("Vomit")
        }
        if (array[2] === 1) {
            array1.push("Fever")
        }
        if (array[3] === 1) {
            array1.push("Sore Throat")
        }
        if (array[4] === 1) {
            array1.push("Phlegm")
        }
        if (array[5] === 1) {
            array1.push("Runny Nose")
        }
        if (array[6] === 1) {
            array1.push("Nauseous")
        }
        if (array[7] === 1) {
            array1.push("Out of Breath")
        }
        if (array[8] === 1) {
            array1.push("Stomachache")
        }
        if (array[9] === 1) {
            array1.push("Chills")
        }
        if (array[10] === 1) {
            array1.push("Muscle Sickness")
        }
        if (array[11] !== "") {
            array1.push(array[11])
        }
        return array1
    };


    function CloseSession() {
        window.sessionStorage.removeItem('show');
    }

    return (

        <Mostouter>
            {!jwt && <UserRedirect isRole={false} />}

            <Cat>
                <Header isDoctor={true} />
            </Cat>

            <Directory>
                <Path directory={props.past? "Past Patients" : "Home"} />
            </Directory>

            <User>
                <Login />
            </User>

            <Video>
                {visible && show && 
                <Container>
                    <Block>Video call Ended
                        <Button onClick={() => { CloseSession(); setVisible(false); }}>
                            Okay
                        </Button>
                    </Block>
                </Container>}
                <ContentLayout>
                    <CalendarBox>
                        <Calen data = {scheduleData}/>
                    </CalendarBox>

                    <PatientBox>
                        <PatientList data={scheduleData} clicked={displayedData} setFunction={setDisplay} symptoms={sy} past={props.past} setRid={setRid} setSid={setSid} setNote={setNote} setIsNote={setIsNote}/>
                    </PatientBox>
                    
                    <InfoBox>
                        <CV startCall={startCall} data={displayedData} scheduleData={scheduleData} symptoms={sy} past={props.past} rid={rid} sid={sid} note={note} isNote={isNote} setNote={setNote}/>
                    </InfoBox>
                </ContentLayout>
            </Video>
        </Mostouter>
    );
}

export default Doctor;
