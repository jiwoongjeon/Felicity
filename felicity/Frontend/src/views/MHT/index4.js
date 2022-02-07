import React from "react";
import Slider from '@material-ui/core/Slider';

import LogoImg from '../../Components/assets/Logo.png';
import { Label, Logo, MainContainer, QuestionContainer, SliderBox, SubmitButton, SubTitle, Title } from "./styles";

function MHT4() {

  const [value, setValue] = React.useState(5);

  const severity = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <MainContainer>
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Welcome!</Title>
            <SubTitle>Please fill out medical history form below (4/6)</SubTitle>
            <SubmitButton to={`/MHT5`}>
                Next</SubmitButton>
            <Label>4. How much does it hurt?  *</Label>
            <SliderBox>
              <Label>Mild</Label>
              <Slider 
              marks
              min={0}
              max={10}
              step={1}
              value={value}
              defaultValue={5}
              valueLabelDisplay="auto"
              onChange={severity} />
              <Label>Severe</Label>
            </SliderBox>
        </QuestionContainer>
    </MainContainer>
  );
}

export default MHT4;
