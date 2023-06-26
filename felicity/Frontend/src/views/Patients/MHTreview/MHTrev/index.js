import Slider from '@material-ui/core/Slider';
import { Title, SubTitle, SliderBox, } from "../../MHT/styles";
import axios from "axios";
import API_URL from "../../../../API/server-ip";
import React, { useState, useEffect } from "react"


const { ChecklistsContainer, ChecklistsElementContainer, Answers, Label, SymptomsContainer, SymptomsBubble, Divider, SymptomsBubbleUnchecked, OtherBox, Undo } = require("./styles");


export const Checklists = (props) => {

    let Checklist = JSON.parse(sessionStorage.getItem("checklist"));
    if (Checklist == null){
        Checklist = [false, false, false, false, false, false, false, false, false, false, false, false, ""];
    };

    let time = sessionStorage.getItem('time');
    let written = JSON.parse(sessionStorage.getItem('level'));

    const jwt = JSON.parse(sessionStorage.getItem("jwt"))
    const [name, setName] = useState("")

    useEffect(() => {
    axios.post(`${API_URL}/pstatus`, {patientId: jwt})
    .then((response) => {
        if (response.data) {
          setName(response.data[0].fullname)
        }})},[])

    return (
        <ChecklistsContainer>
        {written &&
            <ChecklistsElementContainer>
                <Title>Medical History Form Review</Title>
                <SubTitle>Patient: {name} </SubTitle>
                <Divider />
                <Label>1. Where does it hurt?  *</Label>
                <Answers>{sessionStorage.getItem('hurt')}</Answers>
                <Label>1-1. Do you have any specific department that you want to visit? (Optional)</Label>
                <Answers>{sessionStorage.getItem('depart')? sessionStorage.getItem('depart'): 'None'}</Answers>
                <Label>2. How long does the hurt last? *</Label>
                <Answers>{time === 'hours'? 'Less than 24 hours' :
                            time === 'days'? 'Less than 3 days' :
                            time === 'week'? 'Less than 1 week' : 
                            time === 'month'? 'Less than 1 month' :
                            'More than 1 month'}</Answers>
                <Label>3. Where does the most severely hurt?  *</Label>
                <Answers>{sessionStorage.getItem('where')}</Answers>
                <Label>4. How much does it hurt?  *</Label>
                <SliderBox>
                    <Label>Mild</Label>
                    <Slider 
                    marks
                    min={0}
                    max={10}
                    step={1}
                    defaultValue={JSON.parse(sessionStorage.getItem('level'))}
                    valueLabelDisplay="on"
                    disabled />
                    <Label>Severe</Label>
                </SliderBox>
                <Label>5. Do you have any suspective reason why? (Optional)</Label>
                <Answers>{sessionStorage.getItem('why')? sessionStorage.getItem('why'): 'None'}</Answers>
                <Label>6. What kind of symptoms do you have? *</Label>

                <SymptomsContainer>
                    {Checklist[0] && <SymptomsBubble>Cough</SymptomsBubble>}
                    {!Checklist[0] && <SymptomsBubbleUnchecked>Cough</SymptomsBubbleUnchecked>}
                    {Checklist[1] && <SymptomsBubble>Vomit</SymptomsBubble>}
                    {!Checklist[1] && <SymptomsBubbleUnchecked>Vomit</SymptomsBubbleUnchecked>}
                    {Checklist[2] && <SymptomsBubble>Fever</SymptomsBubble>}
                    {!Checklist[2] && <SymptomsBubbleUnchecked>Fever</SymptomsBubbleUnchecked>}
                    {Checklist[3] && <SymptomsBubble>Sore throat</SymptomsBubble>}
                    {!Checklist[3] && <SymptomsBubbleUnchecked>Sore throat</SymptomsBubbleUnchecked>}
                    {Checklist[4] && <SymptomsBubble>Phlegm</SymptomsBubble>}
                    {!Checklist[4] && <SymptomsBubbleUnchecked>Phlegm</SymptomsBubbleUnchecked>}
                    {Checklist[5] && <SymptomsBubble>Runny Nose</SymptomsBubble>}
                    {!Checklist[5] && <SymptomsBubbleUnchecked>Runny Nose</SymptomsBubbleUnchecked>}
                    {Checklist[6] && <SymptomsBubble>Nauseous</SymptomsBubble>}
                    {!Checklist[6] && <SymptomsBubbleUnchecked>Nauseous</SymptomsBubbleUnchecked>}
                    {Checklist[7] && <SymptomsBubble>Out of breath</SymptomsBubble>}
                    {!Checklist[7] && <SymptomsBubbleUnchecked>Out of breath</SymptomsBubbleUnchecked>}
                    {Checklist[8] && <SymptomsBubble>Stomachache</SymptomsBubble>}
                    {!Checklist[8] && <SymptomsBubbleUnchecked>Stomachache</SymptomsBubbleUnchecked>}
                    {Checklist[9] && <SymptomsBubble>Chills</SymptomsBubble>}
                    {!Checklist[9] && <SymptomsBubbleUnchecked>Chills</SymptomsBubbleUnchecked>}
                    {Checklist[10] && <SymptomsBubble>Muscle Sickness</SymptomsBubble>}
                    {!Checklist[10] && <SymptomsBubbleUnchecked>Muscle Sickness</SymptomsBubbleUnchecked>}
                    {Checklist[11] && <SymptomsBubble>Other</SymptomsBubble>}
                    {!Checklist[11] && <SymptomsBubbleUnchecked>Other</SymptomsBubbleUnchecked>}
                    {Checklist[11] && <OtherBox>{Checklist[12]}</OtherBox>}
                </SymptomsContainer>
                
            <Undo to='./Appointment'>Request Appointment</Undo>
            </ChecklistsElementContainer>}
            {!sessionStorage.getItem('checklist') && 
                <ChecklistsElementContainer>
                    <Title>Medical History Form Review</Title>
                    <SubTitle>You haven't submit your medical health form yet!</SubTitle>
                    
                </ChecklistsElementContainer>}
        </ChecklistsContainer>
    );
}

export default Checklists;