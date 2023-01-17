import React from "react";

import LogoImg from '../../../Components/assets/square_logo.png';
import { BodyInput, InputBox, Label, Logo, MainContainer, QuestionContainer, SubmitButton, SubTitle, Title, SubmitButtonDisabled } from "./styles";
import UserRedirect from "../../UserRedirect";

function MHT3() {
  
  const jwt = JSON.parse(sessionStorage.getItem("jwt"))
  const [next, setNext] = React.useState(false);
  
  function sessionStore () { //stores items in sessionStorage
    var where = document.getElementById('where').value;
    window.sessionStorage.setItem('where',where);
  }

  return (
    <MainContainer>
      {!jwt && <UserRedirect isRole={true}/>}
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Welcome!</Title>
            <SubTitle>Please fill out medical history form below (3/6)</SubTitle>
            <SubTitle>
              {!next && <SubmitButtonDisabled>Next</SubmitButtonDisabled>}
              {next && <SubmitButton onClick={sessionStore} to={'/MHT4'}>Next</SubmitButton>}
              <SubmitButton to={'/MHT2'}>Previous</SubmitButton>
            </SubTitle>
            <Label>3. Where does the most severely hurt?  *</Label>
            <InputBox>
                <BodyInput id="where" onChange={({target}) => setNext(target.value)}/>
            </InputBox>
        </QuestionContainer>
    </MainContainer>
  );
}

export default MHT3;


