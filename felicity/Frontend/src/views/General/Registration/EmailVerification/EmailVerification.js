import React, { useState } from "react";
import axios from "axios";
import LogoImg from '../../../Components/assets/Logo.png';
import API_URL from "../../../../API/server-ip";
import {
    MainContainer,
    SubContainer,
    Logo,
    Title,
    InputContainer1,
    EmailInput,
    SendButton,
    InputContainer2,
    CodeInput,
    LabelMatchError,
    VerifyButton,
    ResendContainer,
    Label,
    ResendLabel1,
    ResendLabel2,
    Button,
    ButtonContainer,
    ContinueButton,
    RoleLabel,
    ContinueButtonDisabled,
    SentLabel
  } from "./styles";


function EmailVerification()
{   
    const [role, setRole] = useState(true);
    const [userType, setUserType] = useState(0);
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(null);
    const [code, setCode] = useState("");
    const [verified, setVerified] = useState(null);
    const saveEmail = (email) => {
        window.sessionStorage.setItem("email", email)
    }
    const sendEmail = (useremail, usertype) => {
        axios.post(`${API_URL}/sendmail`, { email: useremail, userType: usertype})
        .then((response) => {
            console.log(response)
            if (response.data.success == "true") {
                setSent(true);
            }
            else {
                setSent(false);
            }
            
        })
    }
    
    
    const verifyCode = (useremail, usercode, usertype) => {
        axios.post(`${API_URL}/emailvalidate`, { email: useremail, code: usercode, userType: usertype})
        .then((response) => {
            console.log(response)
            if (response.data.success == "true") {
                setVerified(true);
            }
            else if (response.data.errMsg){
                setVerified(false);
            }
    
        })
    }
    
    
    return (
        <MainContainer>
            <SubContainer>
            <Logo src = {LogoImg}/>
            <Title>Email Verification</Title>
            <Label>Are you a doctor or a patient?</Label>
            <ButtonContainer>
                <Button onClick = {({target}) => setUserType(1)}>Doctor</Button>
                <Button  onClick = {({target}) =>setUserType(2)}>Patient</Button>
            </ButtonContainer>
            {(userType === 1) && <RoleLabel> Doctor is selected. </RoleLabel>}
            {(userType === 2) && <RoleLabel> Patient is selected. </RoleLabel>}
            <Label>Verify your Email!</Label>
            <InputContainer1>
                <EmailInput value={email} onChange={(e) => setEmail(e.target.value)}/>
                <SendButton onClick= {({target}) => sendEmail(email, userType)}>Send</SendButton>
                {sent === true && <SentLabel> We have sent an verification code to your email. Please check your email inbox.</SentLabel>}

            </InputContainer1>
            <Label>Please enter the verification code sent to your email.</Label>
            <InputContainer2>
                <CodeInput
                placeholder="Enter your code."
                value = {code}
                onChange={(e) => setCode(e.target.value)}>
                </CodeInput>
                
                
                <VerifyButton onClick={({target}) => verifyCode(email, code, userType)} >Verify</VerifyButton>
                {verified === false && <LabelMatchError>Your code is not correct.</LabelMatchError>}
                {(verified === null || verified === false)  && <ContinueButtonDisabled> Continue </ContinueButtonDisabled>}
                {verified === true && <ContinueButton to = {`/registeration`} onClick= {({target}) => saveEmail(email)}> Continue </ContinueButton>}
            </InputContainer2>

            <ResendContainer>
                <ResendLabel1>Didn’t receive the code? </ResendLabel1>
                <ResendLabel2 onClick= {({target}) => sendEmail(email, userType)}>Resend Code</ResendLabel2>
                
            </ResendContainer>
            
            </SubContainer> 
        </MainContainer>
    )
}

export default EmailVerification;