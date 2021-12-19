import React , { useState } from "react";
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
PwBox,
IdBox,
UrlLink,
Rowbox,
PwLabel,
TextLink,
Rowbox2,
SubmitButton,
Signup,
SignupLink
} from "./styles";

//https://codesandbox.io/s/custom-checkbox-and-radiobutton-with-react-and-styled-components-6h3st?from-embed=&file=/src/index.js:236-283
import RadioButton from "./Radiobox.js";
import Checkbox from "./Checkbox.js";

import LogoImg from '../assets/Logo.png';
import {BsFillPersonFill} from "react-icons/bs";
import {HiLockClosed} from "react-icons/hi";

function LoginPage() {
    const [radioValue, setRadio] = useState(true);
    const [value, setCheckbox] = useState(true);

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
            <IdBox>
                <Icon> <BsFillPersonFill /> </Icon>
                <LoginInput />
            </IdBox>

            <Rowbox>
                <PwLabel> PASSWORD </PwLabel>
                <UrlLink>Forget your Password? </UrlLink>
            </Rowbox>
            <PwBox>
                <Icon> <HiLockClosed /> </Icon>
                <PwInput />
            </PwBox>

            <Label> By signing up, you agree to our <TextLink>privacy policy, Telepossible terms.</TextLink></Label>

            <Checkbox
              label="Stay Sign In"
              value={value}
              checked={value}
              onChange={({ target }) => setCheckbox(!value)}
             />

            <SubmitButton to={`/Doctor`}>
                Sign In
            </SubmitButton>


            <Signup>
                Don’t have an Account? <SignupLink> Sign Up </SignupLink>
            </Signup>



        </LoginContainer>

    </MainContainer>
  );
};

export default LoginPage;