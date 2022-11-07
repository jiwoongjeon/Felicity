import React from "react";

import LogoImg from '../../Components/assets/square_logo.png';
import RadioButton from "../../Components/LoginPage/Radiobox";
import { InputBox, Label, Logo, MainContainer, QuestionContainer, SubmitButton, SubTitle, Title, RadioBox, ReasonInput } from "./styles";
import UserRedirect from "../UserRedirect";

// const Check = () => {
//   const hurt = window.sessionStorage.getItem('hurt');
//   const depart = window.sessionStorage.getItem('depart');
//   const time = window.sessionStorage.getItem('time');
//   const where = window.sessionStorage.getItem('where');
//   const level = window.sessionStorage.getItem('level');

//   return (<div>hurt: {hurt} depart: {depart} time: {time} where: {where} level: {level} </div>);
// };

function MHT5() {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"))
  const [radioValue, setRadio] = React.useState(false);

  function sessionStore () { //stores items in sessionStorage
    var why;
    if (radioValue) why = document.getElementById('why').value;
    else why = '';
    window.sessionStorage.setItem('why',why);
  }

  return (
    <MainContainer>
      {!jwt && <UserRedirect isRole={true}/>}
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Welcome!</Title>
            <SubTitle>Please fill out medical history form below (5/6)</SubTitle>
            <SubTitle>
              <SubmitButton onClick={sessionStore} to={'/MHT6'}>Next</SubmitButton>
              <SubmitButton to={'/MHT4'}>Previous</SubmitButton>
            </SubTitle>
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
              <ReasonInput id="why" />
            </InputBox> }
        </QuestionContainer>
    </MainContainer>
  );
}

export default MHT5;


