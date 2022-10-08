import React from "react";
import { TextField } from '@mui/material';
import { TimeButton, Content, Divider, InfoContainer, Label, PhotoArea, PictureContainer, ProfileContainer, Row, DeleteButton } from "./styles";
import moment from "moment-timezone";


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
    
    var starttime = moment(props.time, "HH:mm:ss").tz("Asia/Vientiane").format("HH:mm:ss")
    var endtime = moment(props.time, "~ HH:mm:ss").tz("Asia/Vientiane").format("HH:mm:ss")


    return(
        <ProfileContainer>
            <PictureContainer>
                <PhotoArea img={fileImage}/>
                <input type='file' className='imgInput' id='logoImg' accept='image/*' name='file' onChange={saveFileImage}/>
                {fileImage && <DeleteButton onClick={deleteFileImage}>Delete image</DeleteButton>}
            </PictureContainer>
            <Divider/>
            <InfoContainer>
                <Label>NAME</Label>
                <Content>{props.name}</Content>
                <Label>Date of birth</Label>
                <Label>Sex</Label>
                <Label>EMAIL</Label>
                <Content>{props.email}</Content>
                {props.isDoctor && <Label>Profession</Label>}
            
                {props.isDoctor && <Label>Education</Label>}
                {props.isDoctor && <Label>Phone</Label>}
                
                
                {props.isDoctor && <Label>AVAILABLE TIME</Label>}
                {props.isDoctor && <Content>Local: {props.time} <br></br>
                Laos: {starttime} ~ {endtime}</Content>}
                {props.isDoctor && <Content></Content>}
                {!props.isDoctor && <Label>Underlying Disease</Label>}
                {!props.isDoctor && <Label>Past medical record</Label>}


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