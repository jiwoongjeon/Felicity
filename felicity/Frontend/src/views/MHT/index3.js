import React from "react";

import LogoImg from '../../Components/assets/Logo.png';
import { BodyInput, InputBox, Label, Logo, MainContainer, QuestionContainer, SubmitButton, SubTitle, Title } from "./styles";
import UserRedirect from "../UserRedirect";

// const Check = () => {
//   const hurt = window.sessionStorage.getItem('hurt');
//   const depart = window.sessionStorage.getItem('depart');
//   const time = window.sessionStorage.getItem('time');
//   return (<div>hurt: {hurt} depart: {depart} time: {time}</div>);
// };

function MHT3() {
  
  const jwt = JSON.parse(sessionStorage.getItem("jwt"))
  
  function sessionStore () { //stores items in sessionStorage
    var where = document.getElementById('where').value;
    window.sessionStorage.setItem('where',where);
  }

  return (
    <MainContainer>
      {!jwt && <UserRedirect isRole={true}/>}
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Welcome!</Title>
            <SubTitle>Please fill out medical history form below (3/6)</SubTitle>
            <SubmitButton onClick={sessionStore} to={'/MHT4'}>
                Next</SubmitButton>
            <Label>3. Where does the most severely hurt?  *</Label>
        
            <InputBox>
                <BodyInput id="where"/>
            </InputBox>
        </QuestionContainer>
    </MainContainer>
  );
}

export default MHT3;


