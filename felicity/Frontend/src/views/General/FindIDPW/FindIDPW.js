import React, { useState } from "react";
import axios from "axios";
import LogoImg from "../../Components/assets/Logo.png";
import {TextField } from "@mui/material";
import API_URL from "../../../API/server-ip";
import {MainContainer,
    SubContainer, 
    Logo, 
    Title, 
    SubTitle, 
    ButtonContainer, 
    Button,
    FindContainer,
    ButtonToggle,
    ButtonGroup,
    IDContainer,
    PWContainer,
    Find2Container,
    FirstnameInput,
    LastnameInput,
    EmailInput,
    Label,
    NewPWInput,
    ConfirmPWInput,
    ChangePWButton,
    ChangePWButtonDisabled,
    ResetContainer,
    WrongReenterContainer,
    SigninLink,
    ResetSuccess
} from "./styles";

function FindIDPW() {
    const [userType, setUserType] = useState(0);
    const types = ['ID', 'Password'];
    const roles = [1, 2]
    const [active, setActive] = useState(types[0]);

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [birth, setBirth] = useState("");
    const [email, setEmail] = useState("");
    const handleDateChange = (event) => { setBirth(event.target.value)};

    const [validity, setValidity] = useState(0);
    const [newPW, setNewPW] = useState("");
    const [confirmPW, setConfirmedPW] = useState("");
    const [PWchanged, setPWchanged] = useState(0);
    const [foundID, setFoundID] = useState("")

    const toggleTypeReset = (type) => {
        setActive(type);
        setUserType(0);
        setFirstname("");
        setLastname("");
        setBirth("");
        setEmail("");
        setValidity(0);
        setNewPW("");
        setConfirmedPW("");
        setPWchanged(0);
        setFoundID("");
    }

    const toggleRoleReset = (role) => {
        setUserType(role);
        setFirstname("");
        setLastname("");
        setBirth("");
        setEmail("");
        setValidity(0);
        setNewPW("");
        setConfirmedPW("");
        setPWchanged(0);
        setFoundID("");
    }

    const checkDoctorFindID = () => {
        axios.post(`${API_URL}/doctorfindID`, {firstname: firstname, lastname: lastname, birth: birth})
        .then(
            (response) => {
                console.log(response.data)
                if (response.data.errMsg) {
                    setValidity(-1);
                }
                else {
                    
                    setValidity(1);
                    setFoundID(response.data[0].email);
                }
            }
        )
    }
    const checkPatientFindID = () => {
        axios.post(`${API_URL}/patientfindID`, {firstname: firstname, lastname: lastname, birth: birth})
        .then(
            (response) => {
                console.log(response.data[0].email)
                if (response.data.errMsg) {
                    setValidity(-1);
                }
                else {
                    
                    setValidity(1);
                    setFoundID(response.data[0].email);
                }
            }
        )
    }

    const checkDoctorChangePW = () => {
        axios.post(`${API_URL}/checkdoctorchangePW`, {firstname: firstname, lastname: lastname, birth: birth, email: email})
        .then(
            (response) => {
                console.log(response.data[0].errMsg)
                if (response.data[0].errMsg) {
                    setValidity(-1);
                }
                else {
                    
                    setValidity(1);
                   
                }
            }
        )
    }

    const checkPatientChangePW = () => {
        axios.post(`${API_URL}/checkpatientchangePW`, {firstname: firstname, lastname: lastname, birth: birth, email: email})
        .then(
            (response) => {
                console.log(response.data[0].errMsg)
                if (response.data[0].errMsg) {
                    setValidity(-1);
                }
                else {
                    
                    setValidity(1);
                   
                }
            }
        )
    }

    const changeDoctorPW = () => {
        axios.post(`${API_URL}/doctorchangePW`, {email: email, password: confirmPW})
        .then(
            (response) => {
                if (response.data[0].success) {
                    setPWchanged(1);
                }
                else {
                    setPWchanged(-1);
                }
            }
        )
    }

    const changePatientPW = () => {
        axios.post(`${API_URL}/patientchangePW`, {email: email, password: confirmPW})
        .then(
            (response) => {
                console.log(response)
                if (response.data[0].success) {
                    setPWchanged(1);
                }
                else {
                    setPWchanged(-1);
                }
            }
        )
    }

    return (
        <MainContainer>
            <SubContainer>
                <Logo src = {LogoImg}/>
                <Title> Forgot your ID/Password? </Title>
                <ButtonGroup>
                    {types.map(type => (
                        <ButtonToggle
                        key={type}
                        active={active === type}
                        onClick={() => toggleTypeReset(type)}
                        >
                        {type}
                        </ButtonToggle>
                    ))}
                </ButtonGroup>
                { active === 'ID' && <IDContainer>
                    <SubTitle> Find your ID as a Doctor / as a Patient? </SubTitle>
                    <ButtonContainer>
                        <ButtonGroup>
                            {roles.map(role => (
                                <ButtonToggle
                                key={role}
                                active={userType === role}
                                onClick={() => toggleRoleReset(role)}
                                >
                                { (role === 1) && 'Doctor'}
                                { (role === 2) && 'Patient'}
                                </ButtonToggle>
                            ))}
                        </ButtonGroup>
                    </ButtonContainer>
                    <FindContainer>
                        {userType === 1 && <Find2Container>
                            <SubTitle>Find your Doctor ID.</SubTitle>
                            <Label>Firstname</Label>
                            <FirstnameInput value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                            <Label>Lastname</Label>
                            <LastnameInput value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                            <Label>Birthdate</Label>
                            <TextField
                                value={birth}
                                id="date"
                                label="Birth Date"
                                type="date"
                                sx={{ width: 200 , ml: 3, mt: 2, mb: 1}}
                                InputLabelProps={{ shrink: true }}
                                onChange={handleDateChange}
                            /> 
                            <Button onClick = {(e) => {checkDoctorFindID()}} >Submit</Button>
                            {validity === 1 && <Label> You are a valid user. Your user ID is {foundID}. </Label>}
                            {validity === -1 && <Label> Your information is not valid. Please try again. </Label>}
                            </Find2Container>}
                        {userType === 2 && <Find2Container>
                            <SubTitle>Find your Patient ID.</SubTitle>
                            <Label>Firstname</Label>
                            <FirstnameInput value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                            <Label>Lastname</Label>
                            <LastnameInput value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                            <Label>Birthdate</Label>
                            <TextField
                                value={birth}
                                id="date"
                                label="Birth Date"
                                type="date"
                                sx={{ width: 200 , ml: 3, mt: 2, mb: 1}}
                                InputLabelProps={{ shrink: true }}
                                onChange={handleDateChange}
                            /> 
                            <Button onClick = {(e) => {checkPatientFindID()}}>Submit</Button>
                            {validity === 1 && <Label> You are a valid user. Your user ID is {foundID}. </Label>}
                            {validity === -1 && <Label> Your information is not valid. Please try again. </Label>}
                            </Find2Container>}
                    </FindContainer>
                </IDContainer>
                }  
                { active === "Password" && <PWContainer>
                    <SubTitle> Reset your password as a Doctor / as a Patient? </SubTitle>
                    <ButtonContainer>
                        <ButtonGroup>
                            {roles.map(role => (
                                <ButtonToggle
                                key={role}
                                active={userType === role}
                                onClick={() => toggleRoleReset(role)}
                                >
                                { (role === 1) && 'Doctor'}
                                { (role === 2) && 'Patient'}
                                </ButtonToggle>
                            ))}
                        </ButtonGroup>
                    </ButtonContainer>
                    <FindContainer>
                        {userType === 1 && <Find2Container>
                            <SubTitle>Reset your Doctor Password.</SubTitle>
                            <Label>Firstname</Label>
                            <FirstnameInput value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                            <Label>Lastname</Label>
                            <LastnameInput value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                            <Label>Birthdate</Label>
                            <TextField
                                value={birth}
                                id="date"
                                label="Birth Date"
                                type="date"
                                sx={{ width: 200, ml: 3, mt: 2 }}
                                InputLabelProps={{ shrink: true }}
                                onChange={handleDateChange}
                            /> 
                            <Label>Email</Label>
                            <EmailInput value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <Button onClick = {(e) => {checkDoctorChangePW()}}>Submit</Button>
                            {validity === 1 && <ResetContainer>
                                <Label> New Password </Label>
                                <NewPWInput value={newPW} onChange={(e) => setNewPW(e.target.value)}/>
                                <ConfirmPWInput value={confirmPW} onChange={(e) => setConfirmedPW(e.target.value)}/>
                                {(newPW == "") || (confirmPW == "") || (newPW != confirmPW) && <ChangePWButtonDisabled>Change Password</ChangePWButtonDisabled>}
                                {(newPW != "") && (confirmPW != "") && (newPW != confirmPW) && <Label> You reentered the different password. Please try again.
                                </Label> }
                                {(newPW != "") && (confirmPW != "") && (newPW == confirmPW) && <ChangePWButton onClick = {(e) => {changeDoctorPW()}}>Change Password</ChangePWButton>}
                                {PWchanged == 1 && <ResetSuccess><Label> Your password was successfully reset. </Label> <SigninLink to = "/"> Go back to sign in</SigninLink> </ResetSuccess>}
                                </ResetContainer>}
                            {validity === -1 && <ResetContainer>
                                <Label> Your information is not valid. Please try again. </Label>
                                </ResetContainer>}
                            </Find2Container>}
                        {userType === 2 && <Find2Container>
                            <SubTitle>Reset your Patient Password.</SubTitle>
                            <Label>Firstname</Label>
                            <FirstnameInput value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                            <Label>Lastname</Label>
                            <LastnameInput value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                            <Label>Birthdate</Label>
                            <TextField
                                value={birth}
                                id="date"
                                label="Birth Date"
                                type="date"
                                sx={{ width: 200, ml: 3, mt: 2 }}
                                InputLabelProps={{ shrink: true }}
                                onChange={handleDateChange}
                            /> 
                            <Label>Email</Label>
                            <EmailInput value={email} onChange={(e) => setEmail(e.target.value)}/>
                            <Button onClick = {(e) => {checkPatientChangePW()}}>Submit</Button>
                            {validity === 1 && <ResetContainer>
                                <Label> New Password </Label>
                                <NewPWInput value={newPW} onChange={(e) => setNewPW(e.target.value)}/>
                                <ConfirmPWInput value={confirmPW} onChange={(e) => setConfirmedPW(e.target.value)}/>
                                {((newPW == "") || (confirmPW == "")) && <ChangePWButtonDisabled>Change Password</ChangePWButtonDisabled>}
                                {((newPW != "") && (confirmPW != "")) && (newPW != confirmPW) && 
                                <WrongReenterContainer>
                                    <ChangePWButtonDisabled>Change Password</ChangePWButtonDisabled>
                                    <Label> You reentered the different password. Please try again.
                                    </Label>
                                </WrongReenterContainer>
                                 }
                                {((newPW != "") && (confirmPW != "")) && (newPW == confirmPW) && 
                                <ChangePWButton onClick={(e)=> {changePatientPW()}}>Change Password</ChangePWButton>}
                                {PWchanged == 1 && <ResetSuccess><Label> Your password was successfully reset. </Label> <SigninLink to = "/"> Go back to sign in</SigninLink> </ResetSuccess>}
                                {PWchanged == -1 && <Label> Your password cannot be reset at this time. Please try entering again. </Label>}
                                </ResetContainer>}
                            {validity === -1 && <Label> Your information is not valid. Please try again. </Label>}
                            </Find2Container>}
                    </FindContainer>
                </PWContainer>

                }
            </SubContainer>
        </MainContainer>
    )
}

export default FindIDPW;