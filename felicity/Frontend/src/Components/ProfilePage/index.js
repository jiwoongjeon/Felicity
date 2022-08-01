import React from "react";
import { TextField } from '@mui/material';
import { TimeButton, Content, Divider, InfoContainer, Label, PhotoArea, PictureContainer, ProfileContainer, Row, DeleteButton } from "./styles";

export const ProfilePage = (props) => {

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
            <PictureContainer>
                <PhotoArea img={fileImage}/>
                <input type='file' className='imgInput' id='logoImg' accept='image/*' name='file' onChange={saveFileImage}/>
                {fileImage && <DeleteButton onClick={deleteFileImage}>Delete image</DeleteButton>}
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