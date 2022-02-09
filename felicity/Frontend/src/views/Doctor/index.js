import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import {
    ContentLayout,
    PatientBox,
    InfoBox,
} from "./layout";
import PatientList from '../../Components/PatientsList';
import CV from '../../Components/CV';
import Axios from "axios";
import { PATIENT_DATA } from "./tempData";


function Doctor() {

    const [scheduleData, setScheduleData] = React.useState([])
    const [displayedData, setDisplay] = React.useState({})

    React.useEffect(() => {
        Axios.post("http://localhost:3001/doctor_schedule", { "doctor_id": 1 })
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
        if (array[11] != null) {
            array1.push(array[11])
        }
        return array1
    };

  return (

    <Mostouter>

    <Cat>
        <Header isDoctor={true}/>
    </Cat>

    <Directory>
        <Path directory="Home"/>
    </Directory>

    <User>
        <Login />
    </User>


    <Video>
        <ContentLayout>
            <PatientBox>
                <PatientList data={PATIENT_DATA} setFunction={setDisplay} symptoms={sy}/>
            </PatientBox>

            <InfoBox>
                <CV data={displayedData} symptoms={sy}/>
            </InfoBox>

        </ContentLayout>
    </Video>



    </Mostouter>


  );
}

export default Doctor;
