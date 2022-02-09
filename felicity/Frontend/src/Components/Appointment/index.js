import React from "react";
import { MHT_DATA } from "../BoardNew/tempData";
import { InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';
const { NewAppContainer, Header, AppDetailContainer, Divider, DetailLabel, DetailLabelTop,
    Column, SymptomsContainer, SymptomsBubble, SymptomsBubbleUnchecked, OtherBox, SubmitBtn, ColumnBottom} = require('./styles')

export const AppointmentHolder = (props) => {
    
    const [department, setDepartment] = React.useState('');
    const [preference, setPreference] = React.useState('');

    const handleDepartmentChange = (event) => {setDepartment(event.target.value);};
    const handlePreferenceChange = (event) => {setPreference(event.target.value);};
    
    return(
        <NewAppContainer>
            <Header>New Appointment</Header>
            <AppDetailContainer>
            <DetailLabelTop>Department:</DetailLabelTop>
                <FormControl sx={{minWidth: 425, textAlign: "left"}}>
                    <InputLabel>Department</InputLabel>
                    <Select
                        value={department}
                        label="Department"
                        onChange={handleDepartmentChange}
                        autoWidth>
                        <MenuItem value={1}>Internal Medicine</MenuItem>
                        <MenuItem value={2}>Ear-Nose-And-Throat Department</MenuItem>
                        <MenuItem value={3}>Orthopedics</MenuItem>
                    </Select>
                </FormControl>
            
                <DetailLabel>Date and Time: </DetailLabel>
                <Column>
                <TextField
                    id="date"
                    label="Appointment Date"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{ width: 200 }}
                    InputLabelProps={{ shrink: true }}/>
                <TextField
                    id="time"
                    label="Appointment Time"
                    type="time"
                    defaultValue="07:30"
                    sx={{ width: 200, marginLeft: 3 }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ step: 300 }}/>
                </Column>

                <Divider />

                <Column>
                    <DetailLabel>Preferd Physician: </DetailLabel>
                    <FormControl sx={{minWidth: 265, marginTop: 3, marginLeft: 3, textAlign: "left"}}>
                    <InputLabel>Preference</InputLabel>
                    <Select
                        value={preference}
                        label="Preference"
                        onChange={handlePreferenceChange}
                        autoWidth>
                        <MenuItem value={0}>No Preference</MenuItem>
                        <MenuItem value={1}>Dr.Lee</MenuItem>
                        <MenuItem value={2}>Dr.Kim</MenuItem>
                        <MenuItem value={3}>Dr.Park</MenuItem>
                    </Select>
                </FormControl>
                </Column>

                <Divider />
                
                <DetailLabel>Symptom: </DetailLabel>
                {MHT_DATA.map((symptom) => (
                <SymptomsContainer>
                    {symptom.A && <SymptomsBubble>Cough</SymptomsBubble>}
                    {!symptom.A && <SymptomsBubbleUnchecked>Cough</SymptomsBubbleUnchecked>}
                    {symptom.B && <SymptomsBubble>Vomit</SymptomsBubble>}
                    {!symptom.B && <SymptomsBubbleUnchecked>Vomit</SymptomsBubbleUnchecked>}
                    {symptom.C && <SymptomsBubble>Fever</SymptomsBubble>}
                    {!symptom.C && <SymptomsBubbleUnchecked>Fever</SymptomsBubbleUnchecked>}
                    {symptom.D && <SymptomsBubble>Sore throat</SymptomsBubble>}
                    {!symptom.D && <SymptomsBubbleUnchecked>Sore throat</SymptomsBubbleUnchecked>}
                    {symptom.E && <SymptomsBubble>Phlegm</SymptomsBubble>}
                    {!symptom.E && <SymptomsBubbleUnchecked>Phlegm</SymptomsBubbleUnchecked>}
                    {symptom.F && <SymptomsBubble>Runny Nose</SymptomsBubble>}
                    {!symptom.F && <SymptomsBubbleUnchecked>Runny Nose</SymptomsBubbleUnchecked>}
                    {symptom.G && <SymptomsBubble>Nauseous</SymptomsBubble>}
                    {!symptom.G && <SymptomsBubbleUnchecked>Nauseous</SymptomsBubbleUnchecked>}
                    {symptom.H && <SymptomsBubble>Out of breath</SymptomsBubble>}
                    {!symptom.H && <SymptomsBubbleUnchecked>Out of breath</SymptomsBubbleUnchecked>}
                    {symptom.I && <SymptomsBubble>Stomachache</SymptomsBubble>}
                    {!symptom.I && <SymptomsBubbleUnchecked>Stomachache</SymptomsBubbleUnchecked>}
                    {symptom.J && <SymptomsBubble>Chills</SymptomsBubble>}
                    {!symptom.J && <SymptomsBubbleUnchecked>Chills</SymptomsBubbleUnchecked>}
                    {symptom.K && <SymptomsBubble>Muscle Sickness</SymptomsBubble>}
                    {!symptom.K && <SymptomsBubbleUnchecked>Muscle Sickness</SymptomsBubbleUnchecked>}
                    {symptom.L && <SymptomsBubble>Other</SymptomsBubble>}
                    {!symptom.L && <SymptomsBubbleUnchecked>Other</SymptomsBubbleUnchecked>}
                    {symptom.L && <OtherBox>{symptom.L_detail}</OtherBox>}
                </SymptomsContainer>))}
            <ColumnBottom>
                <SubmitBtn>Submit</SubmitBtn>
            </ColumnBottom>
            </AppDetailContainer>

        </NewAppContainer>

    );
}