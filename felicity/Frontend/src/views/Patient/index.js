import React, {useState} from "react"
import Header from '../../Components/Header/Header';
import { Mostouter, Directory, User, Cat, Video } from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

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
import Schedule from "../../Components/Schedule";
import Conversations from "../../Components/Conversations";
import Emergency from "../../Components/Emergency";
import PatientRecord from "../../Components/PatientRecord";
import RecentPrescription from "../../Components/RecentPrescription";
import Axios from "axios";
import UserRedirect from "../UserRedirect"

import API_URL from "../../API/server-ip";
import moment from "moment";

function Patient() {

    const jwt = JSON.parse(sessionStorage.getItem("jwt"))
<<<<<<< HEAD
    const today = moment().format("MM-DD-YYYY");
    const [scheduleData, setScheduleData] = React.useState([])
    //const [list, setlist] = React.useState([])
=======
    const show = JSON.parse(sessionStorage.getItem("show"))

    const [scheduleData, setScheduleData] = React.useState([])
    const [visible, setVisible] = useState(true)
>>>>>>> 9e00d9a551472ca0c62dbb725eb54753314454ed

    React.useEffect(() => {
        Axios.post(`${API_URL}/patient_schedule`, { "patient_id": 1 })
            .then((response) => {
                setScheduleData(response.data)
            })
    }, [])
<<<<<<< HEAD
    console.log(scheduleData);
    //setScheduleData(list.filter((item,index) => (moment(item.reserved_date).format("MM-DD-YYYY") < today)));
=======
    console.log(scheduleData)

    function CloseSession(){
        window.sessionStorage.removeItem('show');   
        
    }

>>>>>>> 9e00d9a551472ca0c62dbb725eb54753314454ed
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
            {visible &&show && <Container>
                    <Block>Video call Ended
                            <Button onClick={() => { CloseSession(); setVisible(false);}}>
                                    Okay
                            </Button>
                        </Block>
                </Container>}
                <ContentLayout>
                    <EmergencyBox>
                        <Emergency />
                    </EmergencyBox>

                    <ScheduleBox>
                        <Schedule schedule_data={scheduleData} />
                    </ScheduleBox>

                    <RecordBox>
                        <PatientRecord />
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