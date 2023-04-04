import React, { useRef, useState, useContext, useEffect } from "react";
import { SocketContext } from '../../../../API/video'
import socket from "../../../../API/socket";
import API_URL from "../../../../API/server-ip";
import { TextField } from '@mui/material';
import { TimeButton, Content, Settings, Divider, InfoContainer, Button, Button2, Label, PhotoArea, PictureContainer, ProfileContainer, Row, DeleteButton, UserName, Bar } from "./styles";
import Axios from "axios";
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

    const jwt = JSON.parse(sessionStorage.getItem("jwt"))
    console.log(props.isEdit);
    const handleEditClick = () => {
        props.handleSetIsEdit(true);
        console.log("Pressed Button");
    };

    const handleSaveClick = () => {
        props.handleSetIsEdit(false)
        Axios.post(`${API_URL}/updateUnderlyingDisease`, {underlyingDisease: props.underlying_disease, patientId: jwt})
        Axios.post(`${API_URL}/updateEducation`, {education: props.education, patientId: jwt})
        Axios.post(`${API_URL}/updateProfession`, {profession: props.profession, patientId: jwt})

        
    }
      /*setEmail(response.data[0].email)
      setName(response.data[0].fullname)
      setBirth(response.data[0].birth)
      setSex(response.data[0].sex)
    };
    /*
    const [name, setName] = useState(props.name);
    const [birth, setBirth] = useState(props.birth);
    const [email, setEmail] = useState(props.email);
    const [sex, setSex] = useState(props.sex);
    */
    
    
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
            {props.isEdit ? (
                <Button onClick={handleSaveClick}>Save</Button>
            ) : (
                <Button onClick={handleEditClick}>Edit</Button>
            )}
            <PictureContainer>
                <PhotoArea img={profileImage}/>
                <Settings>
                    <input ref={imageBox} type='file' className='imgInput' id='logoImg' accept='image/*' name='file' onChange={uploadFileImage}/>
                    <Button2 onClick={handleOnClickChange}>Change</Button2>
                    <Button2 onClick={handleOnClickDelete}>Delete</Button2>
                    {/* {fileImage && <DeleteButton onClick={deleteFileImage}>Delete image</DeleteButton>} */}
                </Settings>
            </PictureContainer>
            <Divider></Divider>
            <UserName>{props.isEdit ? (
                <TextField helperText="Enter your name" value={props.name} /*onChange={(e) => setName(e.target.value)}*/ />
            ) : (
                <Label>{props.name}</Label>
            )}</UserName>
            <InfoContainer>
                <Bar><Label>E-mail:</Label>
                {props.isEdit ? (
                <TextField helperText="Enter your email" value={props.email} /*onChange={(e) => setEmail(e.target.value)} */size="small" 
                inputProps={{
                    style: {
                      height: "10px",
                    },
                  }}/>
            ) : (
                <Label>{props.email}</Label>
            )}
                </Bar>
                <Divider></Divider>
                <Bar><Label>D.O.B:</Label>
                {props.isEdit ? (
                <TextField helperText="Enter your D.O.B." value={props.birth} /*onChange={(e) => setBirth(e.target.value)}*/ size="small" inputProps={{
                    style: {
                      height: "10px",
                    },
                  }}/>
            ) : (
                <Label>{props.birth}</Label>
            )}
                </Bar>
                <Divider></Divider>
                <Bar><Label>Sex:</Label>
                
                {props.isEdit ? (
                <TextField helperText="Enter your Sex" value={props.sex} /*onChange={(e) => setSex(e.target.value)}*/ size="small" inputProps={{
                    style: {
                      height: "10px",
                    },
                  }}/>
            ) : (
                <Label>{props.sex}</Label>
            )}
                </Bar>
            </InfoContainer>
            
        </ProfileContainer>
    );}


export default ProfilePage;