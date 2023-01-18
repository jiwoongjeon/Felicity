import React from "react";
import Slider from '@material-ui/core/Slider';

import LogoImg from '../../Components/assets/square_logo.png';
import { Label, Logo, MainContainer, QuestionContainer, SliderBox, SubmitButton, SubTitle, Title, SubmitButtonDisabled } from "./styles";
import UserRedirect from "../../Components/UserRedirect";

function MHT4() {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"))
  const [next, setNext] = React.useState(false);

  function sessionStore () { //stores items in sessionStorage
    window.sessionStorage.setItem('level',value);
  }

  const [value, setValue] = React.useState(5);

  const severity = (event, newValue) => {setValue(newValue); setNext(newValue)};


  return (
    <MainContainer>
      {!jwt && <UserRedirect isRole={true}/>}
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Welcome!</Title>
            <SubTitle>Please fill out medical history form below (4/6)</SubTitle>
            <SubTitle>
              {!next && <SubmitButtonDisabled>Next</SubmitButtonDisabled>}
              {next && <SubmitButton onClick={sessionStore} to={'/MHT5'}>Next</SubmitButton>}
              <SubmitButton to={'/MHT3'}>Previous</SubmitButton>
            </SubTitle>
            <Label>4. How much does it hurt?  *</Label>
            <SliderBox>
              <Label>Mild</Label>
              <Slider 
              marks
              min={1}
              max={10}
              step={1}
              value={value}
              id="level"
              defaultValue={5}
              valueLabelDisplay="auto"
              onChange={severity}/>
              <Label>Severe</Label>
            </SliderBox>
        </QuestionContainer>
    </MainContainer>
  );
}

export default MHT4;
