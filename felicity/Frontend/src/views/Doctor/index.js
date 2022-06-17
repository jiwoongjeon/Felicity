import React, { useContext, useState } from "react"
import styled from "styled-components";
import Header from '../../Components/Header/Header';
import { Mostouter, Directory, User, Cat, Video } from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import {
    ContentLayout,
    PatientBox,
    InfoBox,
    Button,
    Block,
    Container
} from "./layout";
import PatientList from '../../Components/PatientsList';
import CV from '../../Components/CV';
import Axios from "axios";
import UserRedirect from "../UserRedirect";

import API_URL from "../../API/server-ip";
import { SocketContext } from "../../API/video";



function Doctor(props) {

    const jwt = JSON.parse(sessionStorage.getItem("jwt"))
    const show = JSON.parse(sessionStorage.getItem("show"))

    const [scheduleData, setScheduleData] = React.useState([])
    const [displayedData, setDisplay] = React.useState({})
    const [visible, setVisible] = useState(true)

    const { startCall } = useContext(SocketContext);

    React.useEffect(() => {
        Axios.post(`${API_URL}/doctor_schedule`, { "doctor_id": jwt })
            .then((response) => {
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
                {visible && show && <Container>
                    <Block>Video call Ended
                        <Button onClick={() => { CloseSession(); setVisible(false); }}>
                            Okay
                        </Button>
                    </Block>
                </Container>}
                <ContentLayout>
                    <PatientBox>
                        <PatientList data={scheduleData} clicked={displayedData} setFunction={setDisplay} symptoms={sy} past={props.past} />
                    </PatientBox>
                    <InfoBox>
                        <CV startCall={startCall} data={displayedData} symptoms={sy} past={props.past} />
                    </InfoBox>

                </ContentLayout>
            </Video>



        </Mostouter>


    );
}

export default Doctor;
