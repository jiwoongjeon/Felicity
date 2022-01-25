import React from "react";

import LogoImg from '../../Components/assets/Logo.png';
import RadioButton from "../../Components/LoginPage/Radiobox";
import { InputBox, Label, Logo, MainContainer, QuestionContainer, SubmitButton, SubTitle, Title, RadioBox, ReasonInput } from "./styles";



function MHT5() {
  const [radioValue, setRadio] = React.useState(true);

  return (
    <MainContainer>
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Welcome!</Title>
            <SubTitle>Please fill out medical history form below (5/6)</SubTitle>
            <SubmitButton to={`/MHT6`}>
                Next</SubmitButton>
            <Label>5. Do you have any suspective reason why? (Optional)</Label>
            <RadioBox>
              <RadioButton
                  label="Yes."
                  name="true"
                  value={radioValue}
                  checked={radioValue}
                  onChange={({ target }) => {
                    console.log(target.value);
                    setRadio(Boolean(target.value));
                  }}/>
              <RadioButton
                label="No."
                name="false"
                value={!radioValue}
                checked={!radioValue}
                onChange={({ target }) => setRadio(!target.value)}
              />

            </RadioBox>
            { radioValue &&
            <InputBox>
              <ReasonInput />
            </InputBox> }
        </QuestionContainer>
    </MainContainer>
  );
}

export default MHT5;


