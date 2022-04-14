import React from "react";
import { MHT_DATA } from "../BoardNew/tempData";
import { InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';
const { NewAppContainer, Header, AppDetailContainer, Divider, DetailLabel, DetailLabelTop,
    Column, SymptomsContainer, SymptomsBubble, SymptomsBubbleUnchecked, OtherBox, SubmitBtn, ColumnBottom} = require('./styles')

export const AppointmentHolder = (props) => {

    function sessionClose () { //stores items in sessionStorage
    
        window.sessionStorage.removeItem('hurt');
        window.sessionStorage.removeItem('depart');
        window.sessionStorage.removeItem('time');
        window.sessionStorage.removeItem('where');
        window.sessionStorage.removeItem('level');
        window.sessionStorage.removeItem('why');
        window.sessionStorage.removeItem('checklist');
    }

    const Checklist = JSON.parse(sessionStorage.getItem("checklist"));
    if (Checklist == null){
        Checklist = [false, false, false, false, false, false, false, false, false, false, false, false, ""];
    };
    const [department, setDepartment] = React.useState('');
    const [preference, setPreference] = React.useState('');
    const [reserved_date, setDate] = React.useState('');
    const [reserved_time, setTime] = React.useState('');
    
    const handleDepartmentChange = (event) => {setDepartment(event.target.value);};
    const handlePreferenceChange = (event) => {setPreference(event.target.value);};
    const handleDateChange = (event) => {setDate(event.target.value);};
    const handleTimeChange = (event) => {setTime(event.target.value);};
    
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
                    value={reserved_date}
                    id="date"
                    label="Appointment Date"
                    type="date"
                    defaultValue="2017-05-24"
                    sx={{ width: 200 }}
                    InputLabelProps={{ shrink: true }}
                    onChange={handleDateChange}
                    />
                <TextField
                    value={reserved_time}
                    id="time"
                    label="Appointment Time"
                    type="time"
                    defaultValue="07:30"
                    sx={{ width: 200, marginLeft: 3 }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{ step: 300 }}
                    onChange={handleTimeChange}
                    />
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
            <ColumnBottom>
                <SubmitBtn onClick={sessionClose} to='./Home'>Submit</SubmitBtn>
            </ColumnBottom>
            </AppDetailContainer>

        </NewAppContainer>

    );
}