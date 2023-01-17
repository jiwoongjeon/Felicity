import React from "react";

import LogoImg from '../../../Components/assets/square_logo.png';
import { Row } from "../../../Components/CV/styles";
import { CheckboxBox, Label, Logo, MainContainer, QuestionContainer, SubmitButton, SubTitle, Title, InputBox, OtherInput, MoveButton, MoveButtonBig } from "./styles";
import UserRedirect from "../../UserRedirect";


function MHT7() {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"))

  return (
    <MainContainer>
      {!jwt && <UserRedirect isRole={true}/>}
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Now you are all set!</Title>
            <SubTitle>You can request an appointment or post a question to doctors</SubTitle>
            <Row>
                <MoveButton to={`/Patient/Appointment`}>Request Appointment</MoveButton>
                <MoveButton to={`/Patient/Newpost`}>Post a question</MoveButton>
            </Row>
            <MoveButtonBig to={`/MHT6`}> Previous</MoveButtonBig>
            
        </QuestionContainer>
    </MainContainer>
  );
}

export default MHT7;
