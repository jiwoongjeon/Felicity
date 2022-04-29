import React from "react";
import { TextField } from '@mui/material';
import { TimeButton, Content, Divider, InfoContainer, Label, PhotoArea, PictureContainer, ProfileContainer, Row } from "./styles";

export const ProfilePage = (props) => {

    const [start_time, setStartTime] = React.useState('');
    const [end_time, setEndTime] = React.useState('');
    const [isTime, changeTime] = React.useState(false);

    function setTime() {
        changeTime(!isTime)
    }
    
    return(
        <ProfileContainer>
            <PictureContainer>
                <PhotoArea/>
            </PictureContainer>
            <Divider/>
            <InfoContainer>
                <Label>USER NAME</Label>
                <Content>{props.name}</Content>
                <Label>EMAIL</Label>
                <Content>{props.email}</Content>
                {props.isDoctor && <Label>AVAILABLE TIME</Label>}
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
                            onChange={(event) => {setStartTime(event.target.value)}}/>
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