import TextField from '@mui/material/TextField';
import {useContext, useState, useEffect} from "react";
import {SocketContext} from '../../API/video'
const { PatientContainer, DetailLabel, PatientImage, Column, Patient, Bio, Divider, Btn, Row, Detail, DefaultLabel, Title, Note, Box, SaveBtn } = require("./styles");


//props.data[props.index]
export const CV = (props) => {
    const { setdid, setpid, setPsex, setPname, setPbirth, setSymptoms, setArea } = useContext(SocketContext);
    const symptoms = props.symptoms([props.data.cough, props.data.vomit, props.data.fever, props.data.sore_throat,
        props.data.phlegm, props.data.runny_nose, props.data.nauseous, props.data.out_of_breath,
        props.data.stomachache, props.data.chills, props.data.muscle_sickness, props.data.other]).join(', ')

    function handleStartCall() {   
        setdid(JSON.parse(sessionStorage.getItem("jwt")));
        
        setpid(props.data.patient_id)
        setPsex(props.data.sex)
        setPname(props.data.firstname + " " + props.data.lastname);
        setPbirth(props.data.birth);
        setSymptoms(symptoms);
        setArea(props.data.wounded_area);
        
        props.startCall(props.data.rid);
    }
    
    return (
        <PatientContainer>
            <Column>
            <Title>Detailed description</Title>
                {!props.data.sex && <DefaultLabel>Select an appointement from left to view a detailed description</DefaultLabel>}
                {props.data.sex &&
                    <Column>
                        <Row>
                            <PatientImage img={props.data.img}/>
                            <Box>
                                <Patient>{props.data.firstname} {props.data.lastname}</Patient>
                                <Bio>{props.data.sex} {props.data.birth}</Bio>
                            </Box>
                        </Row>

                        <Row>
                            <DetailLabel>Department</DetailLabel> 
                            {props.data.department && <Detail>{props.data.department}</Detail>}
                            {!props.data.department && <Detail>None</Detail>}
                        </Row>

                        <Row>
                            <DetailLabel>Symptoms</DetailLabel>
                            <Detail>{symptoms}</Detail>
                            
                        </Row>

                        <Row>
                            <DetailLabel>Appointment Date</DetailLabel>
                            <Detail>{props.data.reserved_date} {props.data.time}</Detail>
                        </Row>
                        
                        <Row>
                            <DetailLabel>Request</DetailLabel>
                            {props.data.request && <Detail>{props.data.request}</Detail>}
                            {!props.data.request && <Detail>None</Detail>}
                        </Row>
                        <Row>
                            
                        </Row>
                        <Row>
                            <DetailLabel>Wounded area</DetailLabel>
                            <Detail>{props.data.wounded_area}</Detail>
                        </Row>
                        <Row>
                            <DetailLabel>Injured time</DetailLabel>
                            <Detail>{props.data.injured_time}</Detail>
                        </Row>

                        <Row>
                            <DetailLabel>Severity</DetailLabel>
                            <Detail>{props.data.severity}</Detail>
                        </Row>

                        <Row>
                            <DetailLabel>Expected reason</DetailLabel>
                            {props.data.reason && <Detail>{props.data.reason}</Detail>}
                            {!props.data.reason && <Detail>None</Detail>}
                        </Row>

                        <Row>
                            <DetailLabel>Note</DetailLabel>
                            <SaveBtn>Save</SaveBtn>
                        </Row>

                        <Row>
                            <Note>
                                <TextField rows={18} multiline fullWidth variant="standard" placeholder="Type Here ..."/>
                            </Note>
                        </Row>

                    </Column>}
            </Column>
            {props.data.sex && <Btn onClick={handleStartCall} to={`./videocall`}>See your patient now</Btn>}
        </PatientContainer>
    );
}

export default CV;
