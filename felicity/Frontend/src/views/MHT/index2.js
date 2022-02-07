import React from "react";

import LogoImg from '../../Components/assets/Logo.png';
import { Label, Logo, MainContainer, QuestionContainer, SubmitButton, SubTitle, Title } from "./styles";

const SelectBox = () => {
	return (
		<select>
			<option key="hours" value="hours">Less than 24 hours</option>
			<option key="days" value="days">Less than 3 days</option>
			<option key="week" value="week">Less than 1 week</option>
      <option key="month" value="month">Less than 1 month</option>
      <option key="more" value="more">More than 1 month</option>
		</select>
	);
};

function MHT2() {
  return (
    <MainContainer>
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Welcome!</Title>
            <SubTitle>Please fill out medical history form below (2/6)</SubTitle>
            <SubmitButton to={`/MHT3`}>
                Next</SubmitButton>
            <Label>2. How long does the hurt last? *</Label>
            <SelectBox></SelectBox>
        </QuestionContainer>
    </MainContainer>
  );
}

export default MHT2;


