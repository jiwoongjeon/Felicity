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
  LabelRecursive,
  SubTitle,
  LoginSubContainer,
  RoleSubmitButton,
  Row
} from "./styles";

//https://codesandbox.io/s/custom-checkbox-and-radiobutton-with-react-and-styled-components-6h3st?from-embed=&file=/src/index.js:236-283
import RadioButton from "./Radiobox.js";
import Checkbox from "./Checkbox.js";

import LogoImg from '../assets/Logo.png';
import { BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { SocketContext } from "../../API/video"
import LoginRedirect from "../../views/UserRedirect/login";


function LoginPage({ patientL, doctorL }) {
  const { id } = React.useContext(SocketContext);

  const [role, setRole] = useState(true);
  const [isRole, setIsRole] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function setInitRole(value) {
    setRole(value);
    setIsRole(true);
  }

  return (
    <MainContainer>


      <LoginContainer>

        <Logo src={LogoImg} />
        <Title>Sign in </Title>
        { !isRole && 
          <LoginSubContainer>
            <SubTitle>Welcome! Select your role</SubTitle>
            <Row>
              <RoleSubmitButton onClick={e => setInitRole(false)}>Doctor</RoleSubmitButton>
              <RoleSubmitButton onClick={e => setInitRole(true)}>Patient</RoleSubmitButton>
            </Row>
          </LoginSubContainer>
        }
        { (id===0 && isRole) && <LabelRecursive>Please enter valid User ID and Password</LabelRecursive>}

        {isRole &&
          <LoginSubContainer>
            {role && <SubTitle>Login as patient</SubTitle>}
            {!role && <SubTitle>Login as doctor</SubTitle>}
            <Label> USER ID </Label>

            <InputBox>
              <Icon> <BsFillPersonFill /> </Icon>
              <LoginInput value={email} onChange={(e) => setEmail(e.target.value)}/>
            </InputBox>

            <Rowbox>
              <PwLabel> PASSWORD </PwLabel>
              <UrlLink>Forget your Password? </UrlLink>
            </Rowbox>

            <InputBox>
              <Icon> <HiLockClosed /> </Icon>
              <PwInput value={password} onChange={(e) => setPassword(e.target.value)}/>
            </InputBox>

            <Label> By signing up, you agree to our <TextLink to="/registeration">privacy policy, Telepossible terms.</TextLink></Label>

            {role &&
              <SubmitButton onClick={patientL({ email, password })}>
                Sign In
              </SubmitButton>}

            {!role &&
              <SubmitButton onClick={doctorL({ email, password })}>
                Sign In
              </SubmitButton>}

              <SubmitButton onClick={e => setIsRole(false)} margin={true} >Back</SubmitButton>

          </LoginSubContainer>
        }

        <Signup>
          Don’t have an Account? <SignupLink to='/registeration'> Sign Up </SignupLink>
        </Signup>

        {id > 0 && <LoginRedirect isRole={role}/>}

      </LoginContainer>


    </MainContainer>
  );
};

export default LoginPage;