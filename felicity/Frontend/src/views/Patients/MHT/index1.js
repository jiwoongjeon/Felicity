import React from "react";

import LogoImg from '../../../Components/assets/square_logo.png';
import RadioButton from "../../../Components/LoginPage/Radiobox";
import UserRedirect from "../../UserRedirect";
import { BodyInput, DepartmentInput, InputBox, Label, Logo, MainContainer, QuestionContainer, SubmitButton, SubTitle, Title, RadioBox, SubmitButtonDisabled } from "./styles";


function MHT1() {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"))
  const [radioValue, setRadio] = React.useState(false);
  const [next, setNext] = React.useState(false);

  function sessionStore () { //stores items in sessionStorage
    var hurt = document.getElementById('hurt').value;
    var depart;
    if (radioValue) depart = document.getElementById('depart').value;
    else depart = '';
    
    window.sessionStorage.setItem('hurt',hurt);
    window.sessionStorage.setItem('depart',depart);
  }
  
  return (
    <MainContainer>
      {!jwt && <UserRedirect isRole={true}/>}
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Welcome!</Title>
            <SubTitle>Please fill out medical history form below (1/6)</SubTitle>
            <SubTitle>
              {!next && <SubmitButtonDisabled>Next</SubmitButtonDisabled>}
              {next && <SubmitButton onClick={sessionStore} to={'/MHT2'}>Next</SubmitButton>} 
              <SubmitButton to={'/Patient/Home'}>Cancel</SubmitButton>
            </SubTitle>
            <Label>1. Where does it hurt?  *</Label>
            <InputBox>
                <BodyInput id="hurt" onChange={({target}) => setNext(target.value)}/>
            </InputBox>
            <Label>1-1. Do you have any specific department that you want to visit? (Optional)</Label>
            <RadioBox>
              <RadioButton
                  label="Yes."
                  name="true"
                  value={radioValue}
                  checked={radioValue}
                  onChange={({ target }) => setRadio(Boolean(target.value)) }/>
              <RadioButton
                label="No."
                name="false"
                value={!radioValue}
                checked={!radioValue}
                onChange={({ target }) => setRadio(!target.value) } />
            </RadioBox>
            { radioValue &&
            <InputBox>
              <DepartmentInput id="depart" />
            </InputBox> }
            
        </QuestionContainer>

    </MainContainer>
  );
}

export default MHT1;


