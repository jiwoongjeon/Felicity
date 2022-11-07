import React from "react"
import Header from '../../Components/Header/Header';
import { Mostouter, Directory, User, Cat, Title, Video } from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';
import { MeetingPage } from "../../Components/MeetingPage";
import UserRedirect from "../UserRedirect";
import Axios from "axios";
import API_URL from "../../API/server-ip";
import { SocketContext } from "../../API/video";

function Meeting(props) {

    const jwt = JSON.parse(sessionStorage.getItem("jwt"));
    const [patientData, setPatientData] = React.useState([]);

    const { acceptReservation, reserved, UTCToLocal } = React.useContext(SocketContext);

    React.useEffect(() => {
        Axios.get(`${API_URL}/read_schedule`)
            .then((response) => {
                console.log(response.data);
                for (var i = 0; i < response.data.length; i++) {
                    var [date, time] = UTCToLocal(response.data[i].reserved_date, response.data[i].reserved_time)
                    response.data[i].reserved_date = date
                    response.data[i].reserved_time = time
                }
                setPatientData(response.data)
            })
    }, [])

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
        if (array[11] != "") {
            array1.push(array[11])
        }
        return array1
    };

    return (

        <Mostouter>
            {!jwt && <UserRedirect isRole={!props.isDoctor} />}

            <Cat>
                <Header isDoctor={props.isDoctor} />
            </Cat>

            <Directory>
                <Path directory="Meet new patients" />
            </Directory>

            <User>
                <Login />
            </User>


            <Video>
                <MeetingPage jwt={jwt} acceptReservation={acceptReservation} patientData={patientData} function={sy} reserved={reserved}/>
            </Video>



        </Mostouter>


    );
}

export default Meeting;
