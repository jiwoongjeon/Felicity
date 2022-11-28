import React, { useRef, useState, useContext, useEffect } from "react";
import { SocketContext } from '../../API/video'
import { io } from "socket.io-client";
import API_URL from "../../API/server-ip";
import { TextField } from '@mui/material';
import { TimeButton, Content, Divider, InfoContainer, Button, Label, PhotoArea, PictureContainer, ProfileContainer, Row, DeleteButton, UserName, Bar } from "./styles";

const socket = io(`${API_URL}`);

export const ProfilePage = (props) => {
    const { updateProfileImage, deleteProfileImage } = useContext(SocketContext);
    const role = JSON.parse(sessionStorage.getItem("role"));
    const id = JSON.parse(sessionStorage.getItem("jwt"));
    const [start_time, setStartTime] = useState('');
    const [end_time, setEndTime] = useState('');
    const [isTime, changeTime] = useState(false);
    const [file, setFile] = useState("");
    const [fileName, setFileName] = useState("");
    const [oldFileName, setOldFileName] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [username, setUserName] = useState('');

    const imageBox = useRef(null);

    function setTime() {
        props.changeTime(props.jwt, start_time, end_time)
        changeTime(!isTime)
    }

    useEffect(() => {
        socket.once("changeProfileImage2", (data) => {
            const { file } = data;
            setProfileImage(API_URL + "/profile_images/" + file);
        });
        return (() => {
            socket.off("changeProfileImage2");
        })
    })

    useEffect(() => {
        if (props.profileImage !== "") {
            if (props.profileImage !== null) {
                setFileName(props.profileImage);
                setProfileImage(API_URL + "/profile_images/" + props.profileImage);
            }
        }
    }, [props.profileImage])

    const uploadFileImage = (e) => {
        setOldFileName(fileName);
        let fd = new FormData();
        var ext = e.target.files[0].name.split(".").pop();
        if (role) {
            var r = "patient"
        }
        else {
            var r = "doctor"
        }
        var file_name = r + id + "-" + Date.now() + "." + ext;
        fd.append('file', e.target.files[0], file_name);
        setFile(fd);
        setFileName(file_name);
    };

    const handleOnClickChange = () => {
        if (imageBox.current.value !== null) {
            updateProfileImage({ file: file, file_name: fileName, old_file_name: oldFileName });
            imageBox.current.value = null;
        }
    }

    const handleOnClickDelete = () => {
        if (profileImage !== "") {
            deleteProfileImage(0, fileName);
            setFileName("");
            setProfileImage("");
        }
    }
    
    return(
        <ProfileContainer>
            <Button>Edit</Button>
            <PictureContainer>
                <PhotoArea img={profileImage}/>
                <input ref={imageBox} type='file' className='imgInput' id='logoImg' accept='image/*' name='file' onChange={uploadFileImage}/>
                <Button onClick={handleOnClickChange}>Change</Button>
                <Button onClick={handleOnClickDelete}>Delect</Button>
                {/* {fileImage && <DeleteButton onClick={deleteFileImage}>Delete image</DeleteButton>} */}
            </PictureContainer>
            <Divider/>
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