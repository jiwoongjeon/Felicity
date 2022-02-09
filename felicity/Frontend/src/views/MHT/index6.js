import React from "react";

import LogoImg from '../../Components/assets/Logo.png';
import Checkbox from "../../Components/LoginPage/Checkbox";
import { CheckboxBox, Label, Logo, MainContainer, QuestionContainer, SubmitButton, SubTitle, Title, InputBox, OtherInput } from "./styles";


function MHT6() {
  const [valueA, setCheckboxA] = React.useState(false);
  const [valueB, setCheckboxB] = React.useState(false);
  const [valueC, setCheckboxC] = React.useState(false);
  const [valueD, setCheckboxD] = React.useState(false);
  const [valueE, setCheckboxE] = React.useState(false);
  const [valueF, setCheckboxF] = React.useState(false);
  const [valueG, setCheckboxG] = React.useState(false);
  const [valueH, setCheckboxH] = React.useState(false);
  const [valueI, setCheckboxI] = React.useState(false);
  const [valueJ, setCheckboxJ] = React.useState(false);
  const [valueK, setCheckboxK] = React.useState(false);
  const [valueL, setCheckboxL] = React.useState(false);


  return (
    <MainContainer>
        <QuestionContainer>
            <Logo src={LogoImg}></Logo>
            <Title>Welcome!</Title>
            <SubTitle>Please fill out medical history form below (6/6)</SubTitle>
            <SubmitButton to={`/Patient/Appointment`}>
                Finish</SubmitButton>
            <Label>6. What kind of symptoms do you have? *</Label>

            <CheckboxBox>
              <Checkbox label="A. Cough" value={valueA} checked={valueA} onChange={({ target }) => setCheckboxA(!valueA)} />
              <Checkbox label="B. Vomit" value={valueB} checked={valueB} onChange={({ target }) => setCheckboxB(!valueB)} />
              <Checkbox label="c. Fever" value={valueC} checked={valueC} onChange={({ target }) => setCheckboxC(!valueC)} />
              <Checkbox label="D. Sore throat" value={valueD} checked={valueD} onChange={({ target }) => setCheckboxD(!valueD)} />
              <Checkbox label="E. Phlegm" value={valueE} checked={valueE} onChange={({ target }) => setCheckboxE(!valueE)} />
              <Checkbox label="F. Runny Nose" value={valueF} checked={valueF} onChange={({ target }) => setCheckboxF(!valueF)} />
              <Checkbox label="G. Nauseous" value={valueG} checked={valueG} onChange={({ target }) => setCheckboxG(!valueG)} />
              <Checkbox label="H. Out of breath" value={valueH} checked={valueH} onChange={({ target }) => setCheckboxH(!valueH)} />
              <Checkbox label="I. Stomachache" value={valueI} checked={valueI} onChange={({ target }) => setCheckboxI(!valueI)} />
              <Checkbox label="J. Chills" value={valueJ} checked={valueJ} onChange={({ target }) => setCheckboxJ(!valueJ)} />
              <Checkbox label="K. Muscle Sickness" value={valueK} checked={valueK} onChange={({ target }) => setCheckboxK(!valueK)} />
              <Checkbox label="L. Others" value={valueL} checked={valueL} onChange={({ target }) => setCheckboxL(!valueL)} />
              <InputBox>
                <OtherInput />
              </InputBox>
             </CheckboxBox>

        </QuestionContainer>
    </MainContainer>
  );
}

export default MHT6;


