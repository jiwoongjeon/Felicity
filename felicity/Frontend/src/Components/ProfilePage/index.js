import React from "react";
import { TextField } from '@mui/material';
import { TimeButton, Content, Divider, InfoContainer, Button, Label, PhotoArea, PictureContainer, ProfileContainer, Row, DeleteButton, UserName, Bar } from "./styles";

export const ProfilePage = (props) => {

    const [start_time, setStartTime] = React.useState('');
    const [end_time, setEndTime] = React.useState('');
    const [isTime, changeTime] = React.useState(false);
    const [fileImage, setFileImage] = React.useState("");
    const [username, setUserName] = React.useState('');

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
            
                
            <Button>Edit</Button>
            <PictureContainer>
                <PhotoArea img={fileImage}/>
                {/* <input type='file' className='imgInput' id='logoImg' accept='image/*' name='file' onChange={saveFileImage}/>
                {fileImage && <DeleteButton onClick={deleteFileImage}>Delete image</DeleteButton>} */}
            </PictureContainer>
                
            <UserName>{props.name}</UserName>
            <InfoContainer>
                <Bar><Label>E-mail:</Label><Label>{props.email}</Label></Bar>
                <Divider></Divider>
                <Bar><Label>D.O.B:</Label><Label>N/A</Label></Bar>
                <Divider></Divider>
                <Bar><Label>Sex:</Label><Label>N/A</Label></Bar>
            </InfoContainer>
                
        </ProfileContainer>
    );
}