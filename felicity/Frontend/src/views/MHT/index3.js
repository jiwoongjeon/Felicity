import React from "react";

import LogoImg from '../../Components/assets/Logo.png';
import { BodyInput, InputBox, Label, Logo, MainContainer, QuestionContainer, SubmitButton, SubTitle, Title } from "./styles";

const Check = () => {
  const hurt = window.sessionStorage.getItem('hurt');
  const depart = window.sessionStorage.getItem('depart');
  const time = window.sessionStorage.getItem('time');
  return (<div>hurt: {hurt} depart: {depart} time: {time}</div>);
};

function MHT3() {
  function sessionStore () { //stores items in sessionStorage
    var where = document.getElementById('where').value;
  
    window.sessionStorage.setItem('where',where);
  
    document.location.href = '/MHT4';
  }

  return (
    <MainContainer>
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Welcome!</Title>
            <SubTitle>Please fill out medical history form below (3/6)</SubTitle>
            <SubmitButton onClick={sessionStore}>
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


