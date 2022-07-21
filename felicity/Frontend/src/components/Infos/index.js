import { useState } from "react";
import "./index.css";
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.css';
import Chat from '../Chat_Video';
import { CONVERSATION_DATA } from "./tempData";
import { Patient } from "../RecentPost/styles";

export const Infos = ({ context }) => {
    const { myVideo, role, startCall, callUser, answerCall, userVideo, callAccepted, callEnded, stream, call, isClicked, text, getAudio, stopAudio, chatArr, send } = context;


    return (
        <Accordion defaultActiveKey="0">
            {CONVERSATION_DATA.map((data) => (
            <div className="acc">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Patient Info</Accordion.Header>
                    <Accordion.Body>
                        <div className="patient-info">
                            <div className="today">
                                <p>{data.date}</p>
                                <br></br>
                                Name:{data.patient}<br></br>
                                Age/Sex:{data.age_sex}<br></br>
                                Underlying Disease:{data.disease}<br></br>
                                Symptoms: 
                                {data.symptoms.map((symptom) => (
                                        <li>{symptom.id}</li>
                                    ))}
                            </div>
                            <div className="past-medical-records">
                                <br></br>
                                <p>Past Medical Records</p>
                                {data.history.map((history) => (
                                    <div className="past-medical-records-table">
                                    <p>{history.date}</p>
                                    Underlying Disease: {history.disease}<br></br>
                                    Symptoms: 
                                    {history.past_symptoms.map((symptom) => (
                                        <li>{symptom.id}</li>
                                    ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Doctor Info</Accordion.Header>
                    <Accordion.Body>
                        <div className="doctor-info">
                            <div className="doctor-info-table">
                                Name: {data.doctor}<br></br>
                                Profession: {data.profession}<br></br>
                                Education:<br></br>
                                <ul>
                                    {data.education.map((line) => (
                                        <li>{line.id}</li>
                                    ))}
                                </ul>
                                
                                <br></br>
                                Phone: {data.phone}<br></br>
                                Email: {data.email}
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
            </div>
        ))}
        </Accordion>        
    );
}

export default Infos;