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
  CheckboxWrapper
} from "./styles";

//https://codesandbox.io/s/custom-checkbox-and-radiobutton-with-react-and-styled-components-6h3st?from-embed=&file=/src/index.js:236-283
import RadioButton from "./Radiobox.js";
import Checkbox from "./Checkbox.js";

import LogoImg from '../assets/Logo.png';
import { BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";


function LoginPage({ patientL, doctorL }) {
  const [radioValue, setRadio] = useState(true);
  const [value, setCheckbox] = useState(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <MainContainer>


      <LoginContainer>

        <Logo src={LogoImg} />
        <Title>Sign in </Title>
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

        <Label> USER ID </Label>
        <InputBox>
          <Icon> <BsFillPersonFill /> </Icon>
          <LoginInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputBox>

        <Rowbox>
          <PwLabel> PASSWORD </PwLabel>
          <UrlLink>Forget your Password? </UrlLink>
        </Rowbox>
        <InputBox>
          <Icon> <HiLockClosed /> </Icon>
          <PwInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>

        <Label> By signing up, you agree to our <TextLink>privacy policy, Telepossible terms.</TextLink></Label>

        <CheckboxWrapper>
          <Checkbox
            label="Stay Sign In"
            value={value}
            checked={value}
            onChange={({ target }) => setCheckbox(!value)}
          />
        </CheckboxWrapper>

        {radioValue &&
          <SubmitButton to={`/Patient/Home`} onClick={patientL({ email, password })}>
            Sign In
          </SubmitButton>
        }

        {!radioValue &&
          <SubmitButton to={`/Doctor/Home`} onClick={doctorL({ email, password })}>
            Sign In
          </SubmitButton>
        }

        <Signup>
          Don’t have an Account? <SignupLink> Sign Up </SignupLink>
        </Signup>



      </LoginContainer>


    </MainContainer>
  );
};

export default LoginPage;