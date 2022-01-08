import React from "react";
import Slider from '@material-ui/core/Slider';
import Checkbox from "../LoginPage/Checkbox";

import { MHT_DATA } from "./tempData";
import { Title, SubTitle, SliderBox, } from "../../views/MHT/styles";

const { ChecklistsContainer, ChecklistsElementContainer, Answers, Label, CheckboxBox, SymptomsContainer, SymptomsBubble, Divider } = require("./styles");


export const Checklists = () => {

    return (
        <ChecklistsContainer>
            {MHT_DATA.map((data, i) => (
                <ChecklistsElementContainer>
                    <Title>Medical History Form</Title>
                    <SubTitle>Patient: {data.patient}</SubTitle>
                    <Divider />
                    <Label>1. Where does it hurt?  *</Label>
                    <Answers>{data.no_1}</Answers>
                    <Label>1-1. Do you have any specific department that you want to visit? (Optional)</Label>
                    <Answers>{data.no_1_1}</Answers>
                    <Label>2. How long does the hurt last? *</Label>
                    <Answers>{data.no_2}</Answers>
                    <Label>3. Where does the most severely hurt?  *</Label>
                    <Answers>{data.no_3}</Answers>
                    <Label>4. How much does it hurt?  *</Label>
                    <SliderBox>
                        <Label>Mild</Label>
                        <Slider 
                        marks
                        min={0}
                        max={10}
                        step={1}
                        defaultValue={data.no_4}
                        valueLabelDisplay="on"
                        disabled />
                        <Label>Severe</Label>
                    </SliderBox>
                    <Label>5. Do you have any suspective reason why? (Optional)</Label>
                    <Answers>{data.no_5}</Answers>
                    <Label>6. What kind of symptoms do you have? *</Label>
                    
                    {MHT_DATA[i].no_6.map((symptom) => (
                        <SymptomsContainer>
                            {symptom.A && <SymptomsBubble>Cough</SymptomsBubble>}
                            {symptom.B && <SymptomsBubble>Vomit</SymptomsBubble>}
                            {symptom.C && <SymptomsBubble>Fever</SymptomsBubble>}
                            {symptom.D && <SymptomsBubble>Sore throat</SymptomsBubble>}
                            {symptom.E && <SymptomsBubble>Phlegm</SymptomsBubble>}
                            {symptom.F && <SymptomsBubble>Runny Nose</SymptomsBubble>}
                            {symptom.G && <SymptomsBubble>Nauseous</SymptomsBubble>}
                            {symptom.H && <SymptomsBubble>Out of breath</SymptomsBubble>}
                            {symptom.I && <SymptomsBubble>Stomachache</SymptomsBubble>}
                            {symptom.J && <SymptomsBubble>Chills</SymptomsBubble>}
                            {symptom.K && <SymptomsBubble>Muscle Sickness</SymptomsBubble>}
                            {symptom.L && <SymptomsBubble>{symptom.L_detail}</SymptomsBubble>}
                        </SymptomsContainer>
                    ))}
                </ChecklistsElementContainer>
            ))}
        </ChecklistsContainer>
    );
}

export default Checklists;