import React from "react";

import LogoImg from '../../Components/assets/Logo.png';
import { Label, Logo, MainContainer, QuestionContainer, SubmitButton, SubTitle, Title } from "./styles";
import UserRedirect from "../UserRedirect";

// const Check = () => {
//   const hurt = window.sessionStorage.getItem('hurt');
//   const depart = window.sessionStorage.getItem('depart');
//   return (<div>hurt: {hurt} depart: {depart}</div>);
// };

// const SelectBox = () => {

// 	return (
// 		<select>
// 			<option key="hours" value="hours">Less than 24 hours</option>
// 			<option key="days" value="days">Less than 3 days</option>
// 			<option key="week" value="week">Less than 1 week</option>
//       <option key="month" value="month">Less than 1 month</option>
//       <option key="more" value="more">More than 1 month</option>
// 		</select>
// 	);
// };

function MHT2() {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"))

  function sessionStore () { //stores items in sessionStorage
    var time = document.getElementById('time').value;
    window.sessionStorage.setItem('time',time);
  }
  return (
    <MainContainer>
      {!jwt && <UserRedirect isRole={true}/>}
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Welcome!</Title>
            <SubTitle>Please fill out medical history form below (2/6)</SubTitle>
            <SubmitButton onClick={sessionStore} to={'/MHT3'}>
                Next</SubmitButton>
            <Label>2. How long does the hurt last? *</Label>
        
            <select id="time">
              <option key="hours" value="hours">Less than 24 hours</option>
              <option key="days" value="days">Less than 3 days</option>
              <option key="week" value="week">Less than 1 week</option>
              <option key="month" value="month">Less than 1 month</option>
              <option key="more" value="more">More than 1 month</option>
            </select>
        </QuestionContainer>
    </MainContainer>
  );
}

export default MHT2;


