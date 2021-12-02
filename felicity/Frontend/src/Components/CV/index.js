import { useState } from "react";
import { PATIENT_DATA } from "./tempData";
import Calen from "../Calendar2"
import { Switch, Route, Link } from "react-router-dom";

const { PatientContainer, PatientElementContainer, Container, SymptomsBubble, PatientElement, PatientInfoContainer, PatientImage, Column, Patient, Time, Bio, Divider, Title, Btn} = require("./styles");

export const CV = () => {
    return (
        <PatientContainer>
            <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" alt=""/>
                <Container>
                    <Title>Name</Title>
                    <Time>Biography</Time>
                </Container>
                <Divider />

            <PatientElementContainer>
                {PATIENT_DATA.map((data, i) => (
                    <Column>
                        <PatientElement>
                            <PatientImage img = {data.img} />
                            <Column>
                                <PatientInfoContainer>
                                    <Patient>Detailed description</Patient>
                                    <Patient>{data.date}</Patient>
                                    <Patient>{data.symptom}</Patient>
                                    <Patient>{data.request}</Patient>
                                    
                                </PatientInfoContainer>
                            </Column>
                        </PatientElement>

                    </Column>
                    ))}
            </PatientElementContainer>
            <Divider />
            <Btn to={`/videocall`}>See your patient now</Btn>
        </PatientContainer>
    );
}

export default CV;
