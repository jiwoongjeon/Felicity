import React from "react";

import LogoImg from '../../Components/assets/Logo.png';
import { BodyInput, InputBox, Label, Logo, MainContainer, QuestionContainer, SubmitButton, SubTitle, Title } from "./styles";

function MHT3() {
  return (
    <MainContainer>
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Welcome!</Title>
            <SubTitle>Please fill out medical history form below (3/6)</SubTitle>
            <SubmitButton to={`/MHT4`}>
                Next</SubmitButton>
            <Label>3. Where does the most severely hurt?  *</Label>
            <InputBox>
                <BodyInput/>
            </InputBox>
        </QuestionContainer>
    </MainContainer>
  );
}

export default MHT3;


