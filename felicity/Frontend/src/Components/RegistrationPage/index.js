import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import {
  MainContainer,
  LoginContainer,
  Logo,
  Title,
  RadioWrapper,
  Label,
  LoginInput,
  PwInput,
  Icon,
  InputBox,
  UrlLink,
  Rowbox,
  PwLabel,
  TextLink,
  Rowbox2,
  SubmitButton,
  Signup,
  SignupLink,
  CheckboxWrapper,
  LabelRed
} from "./styles";

import RadioButton from "./Radiobox.js";
import LogoImg from '../assets/Logo.png';
import ConsentForm from './consentform.pdf';
import { BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { LabelRecursive } from "../LoginPage/styles";

function RegistrationPage({ patientL, doctorL }) {
    const [radioValue, setRadio] = useState(true);
    const [value, setCheckbox] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");

    return (
        <MainContainer>
            <LoginContainer>
            <Logo src={LogoImg} />
                <Title>Who are you registering as? </Title>
                <RadioWrapper>
                    <RadioButton
                        label="I'm a patient."
                        name="patient"
                        value={radioValue}
                        checked={radioValue}
                        onChange={({ target }) => {
                        console.log(target.value);
                        setRadio(Boolean(target.value));
                        }}
                    />
                    <RadioButton
                        label="I'm a doctor."
                        name="doctor"
                        value={!radioValue}
                        checked={!radioValue}
                        onChange={({ target }) => setRadio(!target.value)}
                    />
                </RadioWrapper>

                <Label> Enter Email </Label>
                <InputBox>
                    <Icon> <BsFillPersonFill /> </Icon>
                    <LoginInput
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </InputBox>

                <Rowbox>
                <PwLabel>Create Password </PwLabel>

                </Rowbox>
                <InputBox>
                <Icon> <HiLockClosed /> </Icon>
                <PwInput
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </InputBox>
                

                <Rowbox>
                <PwLabel>Confirm Password </PwLabel>
                </Rowbox>
                {password!=confirmedPassword && <LabelRed>Your confirmed password should match with the original one.</LabelRed>}
                <InputBox>
                <Icon> <HiLockClosed /> </Icon>
                <PwInput
                    value={confirmedPassword}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                />
                </InputBox>
                
                <Label> Before signing up, you must agree to our patient consent form:</Label>
                <iframe src={ConsentForm} width="100%" height="500px"></iframe>

                
                {radioValue &&
                    <SubmitButton to={`/Patient/Home`} onClick={patientL({ email, password })}>
                        Sign Up
                    </SubmitButton>
                }

                {!radioValue &&
                    <SubmitButton to={`/Doctor/Home`} onClick={doctorL({ email, password })}>
                        Sign Up
                    </SubmitButton>
                }

            </LoginContainer>
        </MainContainer>
    )

}

export default RegistrationPage;