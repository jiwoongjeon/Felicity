import react, { useContext } from "react";
import { PATIENT_DATA } from "./tempData";
import { Switch, Route, Link } from "react-router-dom";

import { SocketContext } from "../../api/video";

const { PatientContainer, DetailLabel, PatientImage, Column, Patient, Bio, Divider, Btn, Row, Detail } = require("./styles");

export const CV = () => {
    const { id, startCall } = useContext(SocketContext);

    return (
        <PatientContainer>
            {PATIENT_DATA.map((data, i) => (
                <Column>
                    <PatientImage img={data.img} />
                    <Row>
                        <Patient>{data.name}</Patient>
                        <Bio>{data.sex}, {data.age}</Bio>
                    </Row>

                    <Divider />

                    <Column>
                        <Patient>Detailed description</Patient>
                        <Row>
                            <DetailLabel>Appointment Date: </DetailLabel>
                            <Detail>{data.date}</Detail>
                        </Row>

                        <Row>
                            <DetailLabel>Symptoms: </DetailLabel>
                            {PATIENT_DATA[i].symptoms.map((symptom) => (
                                <Detail>{symptom.id},</Detail>
                            ))}
                        </Row>

                        <Row>
                            <DetailLabel>Patient's request: </DetailLabel>
                            <Detail>{data.request}</Detail>
                        </Row>

                    </Column>

                </Column>
            ))}

            <Divider />
            <Btn to={`/videocall`} onClick={startCall} >See your patient now</Btn>
        </PatientContainer>
    );
}

export default CV;
