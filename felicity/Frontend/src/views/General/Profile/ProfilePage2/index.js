import React, { useState } from "react";
import { TextField } from '@mui/material';
// import { Label } from "../ProfilePage/styles.js"
import { Label, TimeButton, Content, Divider, Profession, Education, LanguageContainer, Language, LangLabel, InfoContainer, DoctorLabel, PatientLabel, Header, Button, DoctorLabel2, ProfileContainer, Row, DeleteButton, EducationBox } from "./styles";
import moment from "moment";
import {LocalToUTC} from "../../../../API/video"
import {ProfilePage} from "../ProfilePage/index.js"

export const ProfilePage2 = (props) => {

    

    const [start_time, setStartTime] = React.useState('');
    const [end_time, setEndTime] = React.useState('');
    const [isTime, changeTime] = React.useState(false);
    const [fileImage, setFileImage] = React.useState("");

    const [UD, setUD] = React.useState(props.underlying_disease);
    const [profession, setProfession] = React.useState(props.profession);
    const [education, setEducation] = React.useState(props.education);


    function setTime() {
        props.changeTime(props.jwt, start_time, end_time)
        changeTime(!isTime)
    }

    const saveFileImage = (e) => {
        setFileImage(URL.createObjectURL(e.target.files[0]));
        //Sending a file code needed
      };

    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage("");
      };
      const [next, setNext] = React.useState(false);

    
    return(
        <ProfileContainer>
            <InfoContainer>
                {!props.isDoctor && <PatientLabel>Underlying Disease </PatientLabel>}
                {props.isDoctor && <DoctorLabel>Profession</DoctorLabel>}
                <Divider></Divider>
                {!props.isDoctor && props.isEdit ? (
                <TextField helperText="Enter your Underlying Disease" value={props.underlying_disease} onChange={(e) => props.handleSetUD(e.target.value) }  inputProps={{
                    style: {
                      height: "20px",
                      width: "300px"
                    },
                  }}/>
                  
            ) : (
                <div>{props.underlying_disease}</div>
            )}
                {/* {!props.isDoctor &&<Profession>{props.underlying_disease}</Profession>} */}
                {props.isDoctor &&props.isEdit ? (
                <TextField helperText="Enter your Profession" value={props.profession} onChange={(e) => props.handleSetProf(e.target.value) }  inputProps={{
                    style: {
                      height: "20px",
                      width: "300px"
                    },
                  }}/>
                  
            ) : (
                <div>{props.profession}</div>
            )}
                {props.isDoctor && <DoctorLabel2>Education</DoctorLabel2>}
                {props.isDoctor &&<Divider></Divider>}
                {props.isDoctor && props.isEdit ? (
                <TextField helperText="Enter your Education" value={props.education} onChange={(e) => props.handleSetEdu(e.target.value) }  inputProps={{
                    style: {
                      height: "20px",
                      width: "300px"
                    },
                  }}/>
                  
            ) : (
                <div>{props.education}</div>
            )}
                {props.isDoctor &&<DoctorLabel2>Available Time</DoctorLabel2>}
                {props.isDoctor &&<Divider></Divider>}
                {/* {props.isDoctor && <Content>{props.time}</Content>} */}
                {props.isDoctor && <Content><br></br>Local Time: {moment().format("HH:mm")} <br></br>
                Laos Local Time: {moment().add(7, "hours").toISOString().substr(0,16).substr(11,16)}</Content>}
                {isTime &&
                    <Row>
                        <TextField
                            value={start_time}
                            id="time"
                            label="Available from..."
                            type="time"
                            sx={{ width: 200, marginRight: 3, marginBottom:3 }}
                            InputLabelProps={{ shrink: true }}
                            inputProps={{ step: 300 }}
                            onChange={(event) => {setStartTime(event.target.value); console.log(event.target.value)}}/>
                        <TextField
                            value={end_time}
                            id="time"
                            label="Available by..."
                            type="time"
                            sx={{ width: 200, marginRight: 3, marginBottom:3 }}
                            InputLabelProps={{ shrink: true }}
                            inputProps={{ step: 300 }}
                            onChange={(event) => {setEndTime(event.target.value)}}/>
                    </Row>}
                {props.isDoctor && !isTime && <TimeButton onClick={(e) => {changeTime(!isTime)}}>Change time</TimeButton>}
                {props.isDoctor && isTime && start_time && end_time && <TimeButton onClick={setTime}>Confirm</TimeButton>}
                {props.isDoctor && isTime && (!start_time || !end_time) && <TimeButton onClick={(e) => {changeTime(!isTime)}}>Cancel</TimeButton>}
            </InfoContainer> 
            <LanguageContainer>
                <LangLabel>Language</LangLabel>
                <Language>
                    <select id="time" onClick={e => setNext(e.target.value)}>
                        <option key="hours" value={0}>English</option>
                        <option key="days" value={1}>ພາສາລາວ</option>
                    </select>
                </Language>
            </LanguageContainer>
            
        </ProfileContainer>

        
    );
}