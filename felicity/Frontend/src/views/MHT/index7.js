import React from "react";

import LogoImg from '../../Components/assets/Logo.png';
import { Row } from "../../Components/CV/styles";
import { CheckboxBox, Label, Logo, MainContainer, QuestionContainer, SubmitButton, SubTitle, Title, InputBox, OtherInput, MoveButton } from "./styles";


function MHT7() {

  return (
    <MainContainer>
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Now you are all set!</Title>
            <SubTitle>Which page you want to proceed?</SubTitle>
            <Row>
                <MoveButton to={`/Patient/Home`}>Home</MoveButton>
                <MoveButton to={`/Patient/Status`}>Status</MoveButton>
            </Row>
            
        </QuestionContainer>
    </MainContainer>
  );
}

export default MHT7;
