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
    SentLabel,
    Step1,
    Step2,
    Step3

  } from "./styles";


function EmailVerification()
{   
    const [role, setRole] = useState(true);
    const [userType, setUserType] = useState(0);
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(null);
    const [code, setCode] = useState("");
    const [verified, setVerified] = useState(null);
    const [step1, setStep1] = useState(false);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
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
            setStep2(true);
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
            setStep3(true);
        })
    }
    
    function handleDoctorClick (event) {
        setStep1(true);
        setUserType(1);

    }
    function handlePatientClick (event) {
        setStep1(true);
        setUserType(2);

    }
    return (
        <MainContainer>
            <SubContainer>
            <Logo src = {LogoImg}/>
            <Title>Email Verification</Title>
            
            <Step1>
            <Label>Are you a doctor or a patient?</Label>
            <ButtonContainer>
                <Button onClick = {({event}) => handleDoctorClick (event)}>Doctor</Button>
                <Button  onClick = {({event}) =>handlePatientClick (event)}>Patient</Button>
            </ButtonContainer>
            {(userType === 1) && <RoleLabel> Doctor is selected. </RoleLabel>}
            {(userType === 2) && <RoleLabel> Patient is selected. </RoleLabel>}
            </Step1>

            {(step1 == true) &&
                <Step2>
                    <Label>Verify your Email!</Label>
                    <InputContainer1>
                        <EmailInput value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <SendButton onClick= {({target}) => sendEmail(email, userType)}>Send</SendButton>
                        {sent === true && <SentLabel> We have sent an verification code to your email. Please check your email inbox.</SentLabel>}
                    </InputContainer1>
                </Step2>
            }
            {(step1 == true) && (step2== true)&&
                <Step3>
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
                </Step3>
            }
            </SubContainer> 
        </MainContainer>
    )
}

export default EmailVerification;