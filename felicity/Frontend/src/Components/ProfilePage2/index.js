import React from "react";
import { TextField } from '@mui/material';
import { TimeButton, Content, Divider, InfoContainer, DoctorLabel, PatientLabel, Header, Button, DoctorLabel2, ProfileContainer, Row, DeleteButton, EducationBox } from "./styles";

export const ProfilePage2 = (props) => {

    const [start_time, setStartTime] = React.useState('');
    const [end_time, setEndTime] = React.useState('');
    const [isTime, changeTime] = React.useState(false);
    const [fileImage, setFileImage] = React.useState("");

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
    
    return(
        <ProfileContainer>
            <InfoContainer>
                {!props.isDoctor && <PatientLabel>Underlying Disease </PatientLabel>}
                {props.isDoctor && <DoctorLabel>Profession</DoctorLabel>}
                <Divider></Divider>
                {props.isDoctor &&<DoctorLabel2>Education</DoctorLabel2>}
                {props.isDoctor &&<Divider></Divider>}
                {props.isDoctor &&<DoctorLabel2>Available Time</DoctorLabel2>}
                {props.isDoctor &&<Divider></Divider>}
                {props.isDoctor && <Content>{props.time}</Content>}
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

        </ProfileContainer>
    );
}