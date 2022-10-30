import React from "react";

import LogoImg from '../../Components/assets/square_logo.png';
import { Label, Logo, MainContainer, QuestionContainer, SubmitButton, SubTitle, Title, SubmitButtonDisabled } from "./styles";
import UserRedirect from "../UserRedirect";

function MHT2() {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"))
  const [next, setNext] = React.useState(false);

  function sessionStore() { //stores items in sessionStorage
    var time = document.getElementById('time').value;
    window.sessionStorage.setItem('time', time);
  }

  return (
    <MainContainer>
      {!jwt && <UserRedirect isRole={true} />}
      <QuestionContainer>
        <Logo src={LogoImg}></Logo>
        <Title>Welcome!</Title>
        <SubTitle>Please fill out medical history form below (2/6)</SubTitle>
        <SubTitle>
          {!next && <SubmitButtonDisabled>Next</SubmitButtonDisabled>}
          {next && <SubmitButton onClick={sessionStore} to={'/MHT3'}>Next</SubmitButton>}
          <SubmitButton to={'/MHT1'}>Previous</SubmitButton>
        </SubTitle>
        <Label>2. How long does the hurt last? *</Label>

        <select id="time" onClick={e => setNext(e.target.value)}>
          <option key="hours" value={0}>Less than 24 hours</option>
          <option key="days" value={1}>Less than 3 days</option>
          <option key="week" value={2}>Less than 1 week</option>
          <option key="month" value={3}>Less than 1 month</option>
          <option key="more" value={4}>More than 1 month</option>
        </select>
      </QuestionContainer>
    </MainContainer>
  );
}

export default MHT2;


