import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { MainContainer, LoginContainer, Logo, Title, RadioWrapper, Label, LoginInput, PwInput, Icon, InputBox, UrlLink, Rowbox, PwLabel, TextLink, Rowbox2,SubmitButton, Signup, SignupLink, CheckboxWrapper, LabelRecursive, SubTitle, LoginSubContainer, RoleSubmitButton, Row, Divider, RoleButton, LangButton, LangButton2, GrayContainer} from "./styles";

//https://codesandbox.io/s/custom-checkbox-and-radiobutton-with-react-and-styled-components-6h3st?from-embed=&file=/src/index.js:236-283
import RadioButton from "./Radiobox.js";
import Checkbox from "./Checkbox.js";
import BackGround from '../../../Components/assets/BG.png'
import LogoImg from '../../../Components/assets/square_logo.png';
import { BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";
import { SocketContext } from "../../../../API/video"
import LoginRedirect from "../../../Components/UserRedirect/login";


function LoginPage({ patientL, doctorL }) {
  const { id } = React.useContext(SocketContext);
  const [role, setRole] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <MainContainer img={BackGround}>
      <GrayContainer>

      <LoginContainer>

        <Logo src={LogoImg} />

        {role && <Title>Sign in as Patient</Title>}
        {!role && <Title>Sign in as Doctor</Title>}
        
            <LoginSubContainer>
              
              <Label>Username</Label>

              <InputBox>
                <Icon> <BsFillPersonFill /> </Icon>
                <LoginInput value={email} onChange={(e) => setEmail(e.target.value)}/>
              </InputBox>

              <Rowbox>
                <Label>Password</Label>
              </Rowbox>

              <InputBox>
                <Icon> <HiLockClosed/> </Icon>
                <PwInput value={password} onChange={(e) => setPassword(e.target.value)}/>
              </InputBox>
              <Rowbox>
                <Label><Checkbox></Checkbox>Remember Me</Label>
                <UrlLink>Forgot Password</UrlLink>
              </Rowbox>
                
                {role && <SubmitButton onClick={patientL({ email, password })}> Login </SubmitButton>}
                {!role && <SubmitButton onClick={doctorL({ email, password })}> Login </SubmitButton>}
              
                <Signup>
                  Don’t have an Account?<SignupLink to='/EmailVerification'> Sign Up </SignupLink>
                </Signup>

                <Divider/>

                {role && <SubTitle>Need to login as a doctor?</SubTitle>}
                {!role && <SubTitle>Need to login as a patient?</SubTitle>}

                {role && <RoleButton onClick={(e) => setRole(false)}> Sign in as a Doctor </RoleButton>}
                {!role && <RoleButton onClick={(e) => setRole(true)}> Sign in as a Patient </RoleButton>}
                
            </LoginSubContainer>
        {id > 0 && <LoginRedirect isRole={role}/>}
        {JSON.parse(sessionStorage.getItem("jwt")) && <LoginRedirect isRole={JSON.parse(sessionStorage.getItem("role"))}/>}

      </LoginContainer>
  
      <LangButton>English</LangButton>  
      <LangButton2>ພາສາລາວ</LangButton2>  

      </GrayContainer>
    </MainContainer>
    
  );
};

export default LoginPage;