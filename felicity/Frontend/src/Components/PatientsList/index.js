import { useEffect, useState } from "react";
import { PATIENT_DATA } from "./tempData";
import Calen from "../CalenDoctor"
import Axios from "axios";
import { CV } from "../CV";
import {CCV} from "../CCV";



const { CalenderBox, PatientContainer, PatientElementContainer, SymptomsContainer, SymptomsBubble, PatientElement, PatientInfoContainer, PatientImage, Column, Patient, Time, Bio, Divider, Title, Btn} = require("./styles");


const PatientsList = () => {

    const [scheduleData, setScheduleData] = useState([])

    useEffect(() => {
        Axios.post("http://localhost:3001/doctor_schedule", {"doctor_id":1})
        .then((response) => {
            setScheduleData(response.data)

        })
        }, [])

    function sy(array) { 
        var array1 = []
            if (array[0] === 1){
                array1.push("Cough")
            }
            if (array[1] === 1){
                array1.push("Vomit")
            }
            if (array[2] === 1){
                array1.push("Fever")
            }
            if (array[3] === 1){
                array1.push("Sore Throat")
            }
            if (array[4] === 1){
                array1.push("Phlegm")
            }
            if (array[5] === 1){
                array1.push("Runny Nose")
            }
            if (array[6] === 1){
                array1.push("Nauseous")
            }
            if (array[7] === 1){
                array1.push("Out of Breath")
            }
            if (array[8] === 1){
                array1.push("Stomachache")
            }
            if (array[9] === 1){
                array1.push("Chills")
            }
            if (array[10] === 1){
                array1.push("Muscle Sickness")
            }
            if (array[11] != null){
                array1.push(array[11])
            }
        return array1
    };
    console.log(scheduleData)

    return (
        <PatientContainer>
            <CalenderBox>
                <Calen/>
            </CalenderBox>
            <Title>Upcoming Patients</Title>
            <Divider />
            <PatientElementContainer>
                {scheduleData.map((data, i) => (
                    <Column>
                        <PatientElement>
                            {/* <PatientImage img = "https://i.imgur.com/WiodOh4.jpg" /> */}
                            <Column>
                                <PatientInfoContainer>
                                    <Patient>{data.patient_firstName} {data.patient_lastName}</Patient>
                                    <Bio>{data.sex}, {data.birthday}</Bio>
                                    <Time>{data.reserved_date}</Time>
                                </PatientInfoContainer>
                                <SymptomsContainer>
                                    {sy([data.a, data.b, data.c, data.d, data.e, data.f, data.g, data.h, data.i, data.j, data.k, data.l]).map((symptom) => (
                                        <SymptomsBubble>{symptom}</SymptomsBubble>
                                    ))}
                                </SymptomsContainer>
                            </Column>
                        </PatientElement>
                        <Divider />
                    </Column>
                    ))}
            </PatientElementContainer>
        </PatientContainer>
    );
}

export default PatientsList;
