import React, { useContext, useState } from "react"
import Header from '../../../Components/Header/Header';
import { Mostouter, Directory, User, Cat, Video } from '../../../Components/mostouter';
import Path from '../../../Components/Path';
import Login from '../../../Components/Login';

import {
    ContentLayout,
    EmergencyBox,
    ScheduleBox,
    RecordBox,
    PrescriptionBox,
    ConversationBox,
    Block,
    Button,
    Container
} from "./layout"
import Schedule from "./Schedule";
import Conversations from "./Conversations";
import Emergency from "./Emergency";
import PatientRecord from "../PatientRecord";
import RecentPrescription from "./RecentPrescription";
import Axios from "axios";
import UserRedirect from "../../UserRedirect"

import API_URL from "../../../API/server-ip";
import { SocketContext } from '../../../API/video'

function Patient() {
    const jwt = JSON.parse(sessionStorage.getItem("jwt"))
    const show = JSON.parse(sessionStorage.getItem("show"))
    const [scheduleData, setScheduleData] = React.useState([])
    const [visible, setVisible] = useState(true)

    const { startCall, UTCToLocal } = useContext(SocketContext);

    React.useEffect(() => {
        Axios.post(`${API_URL}/patient_schedule`, { "patient_id": jwt })
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

    function CloseSession() {
        window.sessionStorage.removeItem('show');
    }

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

    return (

        <Mostouter>
            {!jwt && <UserRedirect isRole={true} />}

            <Cat>
                <Header isDoctor={false} />
            </Cat>

            <Directory>
                <Path directory="Home" />
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
                    <EmergencyBox>
                        <Emergency />
                    </EmergencyBox>

                    <ScheduleBox>
                        <Schedule startCall={startCall} schedule_data={scheduleData} symptoms={sy}/>
                    </ScheduleBox>

                    <RecordBox>
                        <PatientRecord schedule_data = {scheduleData}/>
                    </RecordBox>

                    <PrescriptionBox>
                        <RecentPrescription />
                    </PrescriptionBox>

                    <ConversationBox>
                        <Conversations />
                    </ConversationBox>
                </ContentLayout>
            </Video>

        </Mostouter>


    );
}

export default Patient;