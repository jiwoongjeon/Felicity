import { useState } from "react";
import { PATIENT_DATA } from "./tempData";

const { PatientContainer, Header, PatientElementContainer, SymptomsContainer, SymptomsBubble, PatientElement, PatientInfoContainer, PatientImage, Column, ViewAll, Patient, Time, Bio, PatientLabel, TimeLabel, SymptomsLabel, DetailLabel, Detail, Divider, Title} = require("./styles");

export const PatientsList = () => {
    return (
        <PatientContainer>

            <Header>
                <Title>Patient with Reservation</Title>
                <ViewAll>View All</ViewAll>
            </Header>


            <Column>
                <PatientLabel>PATIENTS</PatientLabel>
                <PatientImage></PatientImage>
                <TimeLabel>TIME</TimeLabel>
                <SymptomsLabel>SYMPTOMS</SymptomsLabel>
                <DetailLabel></DetailLabel>
            </Column>

            <PatientElementContainer>
                <Divider />
                {PATIENT_DATA.map((data, i) => (
                    <PatientElement>
                        <Column>
                            <PatientImage img = {data.img} />
                            <PatientInfoContainer>
                                <Patient>{data.name}</Patient>
                                <Bio>{data.sex}, Age {data.age}</Bio>
                            </PatientInfoContainer>
                            
                            <Time>{data.time}</Time>

                            <SymptomsContainer>
                                {PATIENT_DATA[i].symptoms.map((symptom) => (
                                    <SymptomsBubble>{symptom.id}</SymptomsBubble>
                                ))}
                            </SymptomsContainer>

                            <Detail>View Detail</Detail>

                        </Column>
                        <Divider />
                    </PatientElement>
                    ))}

            </PatientElementContainer>

        </PatientContainer>

        
    );
}

export default PatientsList;
