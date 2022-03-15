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
            <SubTitle>You can request an appointment or post a question to doctors</SubTitle>
            <Row>
                <MoveButton to={`/Patient/Appointment`}>Request Appointment</MoveButton>
                <MoveButton to={`/Patient/RecentPost`}>Post a question</MoveButton>
            </Row>
            
        </QuestionContainer>
    </MainContainer>
  );
}

export default MHT7;
