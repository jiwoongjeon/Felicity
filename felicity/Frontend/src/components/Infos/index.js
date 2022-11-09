import { useContext, useState, useEffect } from "react";
import "./index.css";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.css';
import Chat from '../Chat_Video';
import { CONVERSATION_DATA } from "./tempData";
import { Patient } from "../RecentPost/styles";
import Axios from "axios";
import API_URL from "../../API/server-ip";
import { SocketContext } from '../../API/video'
import { TextField } from "@mui/material";

export const Infos = ({ context }) => {
    const [data, setData] = useState();
    const [doctorData, setDoctorData] = useState({ name: "loading data from server", profession: "loading data from server", email: "loading data from server" });
    const [patientData, setPatientData] = useState({ name: "loading data from server", birth: "loading data from server", sex: "loading data from server" });

    
    useEffect(async () => {
        const patientId = JSON.parse(sessionStorage.getItem("pid"))
        const doctorId = JSON.parse(sessionStorage.getItem("did"))
        await Axios.post(`${API_URL}/doctor_info`, { "doctor_id": doctorId })
            .then((response) => {
                let name = response.data[0].firstname + " " + response.data[0].lastname
                setDoctorData({ name: name, profession: response.data[0].profession, email: response.data[0].email });
            })
        await Axios.post(`${API_URL}/patient_info`, { "patient_id": patientId })
            .then((response) => {
                let name = response.data[0].firstname + " " + response.data[0].lastname;
                setPatientData({ name: name, birth: response.data[0].birth, sex: response.data[0].sex });
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
        if (array[11] !== "") {
            array1.push(array[11])
        }
        return array1
};

    return (
        <Accordion defaultActiveKey="0">
            {CONVERSATION_DATA.map((data) => (
            <div className="acc">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Patient Info</Accordion.Header>
                    <Accordion.Body>
                        <div className="patient-info">
                            <div className="today">
                                {/* <p>{data.date}</p> */}
                                Name: {patientData.name}<br></br>
                                Date of birth: {patientData.birth}<br></br>
                                Sex: {patientData.sex}<br></br>
                                Underlying Disease: *** working ***<br></br>
                                Symptoms: *** working ***
                                {/* {data.symptoms.map((symptom) => (
                                        <li>{symptom.id}</li>
                                    ))} */}
                            </div>
                            <div className="past-medical-records">
                                <br></br>
                                <p>Past Medical Records</p>
                                {/* {data.history.map((history) => (
                                    <div className="past-medical-records-table">
                                    <p>{history.date}</p>
                                    Underlying Disease: {history.disease}<br></br>
                                    Symptoms: 
                                    {history.past_symptoms.map((symptom) => (
                                        <li>{symptom.id}</li>
                                    ))}
                                    </div>
                                ))} */}
                                *** working ***
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Doctor Info</Accordion.Header>
                    <Accordion.Body>
                        <div className="doctor-info">
                            <div className="doctor-info-table">
                                Name: {doctorData.name}<br></br>
                                Profession: {doctorData.profession}<br></br>
                                Education:<br></br>
                                {/* <ul>
                                    {data.education.map((line) => (
                                        <li>{line.id}</li>
                                    ))}
                                </ul> */}
                                *** working ***
                                <br></br>
                                Phone: *** working ***<br></br>
                                Email: {doctorData.email}
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Chat</Accordion.Header>
                    <Accordion.Body>
                        <div className="chat">
                            <Chat context={context}/>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Note</Accordion.Header>
                    <Accordion.Body>
                        <div className="note">
                            <TextField rows={15} multiline fullWidth variant="standard" placeholder="Type Here ..."/>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </div>
        ))}
        </Accordion>        
    );
}

export default Infos;