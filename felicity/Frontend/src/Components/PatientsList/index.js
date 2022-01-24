import { useState } from "react";
import { PATIENT_DATA } from "./tempData";
import Calen from "../Calendar2"

const { CalenderBox, PatientContainer, PatientElementContainer, SymptomsContainer, SymptomsBubble, PatientElement, PatientInfoContainer, PatientImage, Column, Patient, Time, Bio, Divider, Title} = require("./styles");

export const PatientsList = () => {
    return (
        <PatientContainer>
            <CalenderBox>
                <Calen/>
            </CalenderBox>
            <Title>Upcoming Patients</Title>
            <Divider />
            <PatientElementContainer>
                {PATIENT_DATA.map((data, i) => (
                    <Column>
                        <PatientElement>
                            <PatientImage img = {data.img} />
                            <Column>
                                <PatientInfoContainer>
                                    <Patient>{data.name}</Patient>
                                    <Bio>{data.sex}, Age {data.age}</Bio>
                                    <Time>{data.time}</Time>
                                </PatientInfoContainer>
                                <SymptomsContainer>
                                    {PATIENT_DATA[i].symptoms.map((symptom) => (
                                        <SymptomsBubble>{symptom.id}</SymptomsBubble>
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
