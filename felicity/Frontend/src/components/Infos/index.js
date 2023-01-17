import { useContext, useState, useEffect } from "react";
import "./index.css";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.css';
import Chat from '../Chat_Video';
import { CONVERSATION_DATA } from "./tempData";
import { Patient } from "../../views/General/RecentPost/styles";
import Axios from "axios";
import API_URL from "../../API/server-ip";
import { SocketContext } from '../../API/video'
import { TextField } from "@mui/material";

export const Infos = ({ context }) => {

    
    const { did, psex, pname, pbirth, symptoms, wounded_area } = useContext(SocketContext);
    const [doctorData, setDoctorData] = useState({ name: "loading data from server", profession: "loading data from server", email: "loading data from server" }); 
    
    useEffect(async () => {
        await Axios.post(`${API_URL}/doctor_info`, { "doctor_id": did })
            .then((response) => {
                let name = response.data[0].firstname + " " + response.data[0].lastname
                setDoctorData({ name: name, profession: response.data[0].profession, email: response.data[0].email });
            })
    }, [])

    return (
        <Accordion defaultActiveKey="0">
            <div className="acc">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Patient Info</Accordion.Header>
                    <Accordion.Body>
                        <div className="patient-info">
                            <div className="today">
                                Name: {pname}<br></br>
                                Date of birth: {pbirth}<br></br>
                                Sex: {psex}<br></br>
                                Underlying Disease: *** working ***<br></br>
                                Wounded Area: {wounded_area}<br></br>
                                Symptoms: {symptoms}<br></br>

                            </div>
                            <div className="past-medical-records">
                                <br></br>
                                <p>Past Medical Records</p>
                                {/* {data.history.map((history) => (
                                    <div className="past-medical-records-table">
                                    <p>{history.date}</p>
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
        </Accordion>        
    );
}

export default Infos;