import React from "react";
import { MHT_DATA } from "../BoardNew/tempData";
import { AiFillCalendar } from "react-icons/ai";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const { NewAppContainer, Header, NewAppSubContainer, AppDetailContainer, DoctorContainer, Divider, DetailLabel, DetailLabelTop,
    DropboxWrap, Column, DetailLabelColon, DoctorDropboxWrap, SymptomsContainer, SymptomsBubble, SymptomsBubbleUnchecked, OtherBox} = require('./styles')

export const AppointmentHolder = (props) => {


    const [department, setDepartment] = React.useState('');

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    return(
        <NewAppContainer>
            <Header>New Appointment</Header>
            <NewAppSubContainer>
                <AppDetailContainer>
                    <DetailLabelTop>Department:</DetailLabelTop>
                    <FormControl sx={{minWidth: 150}}>
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
                        <DropboxWrap>
                            <AiFillCalendar style={{marginTop: '-5px', marginRight: '10px'}}/>2022-02-02</DropboxWrap>
                        <DropboxWrap>01</DropboxWrap>
                        <DetailLabelColon>:</DetailLabelColon>
                        <DropboxWrap>30</DropboxWrap>
                        <DropboxWrap>PM</DropboxWrap>
                    </Column>

                    <Column>
                        <DetailLabel>Preferd Physician: </DetailLabel>
                        <DoctorDropboxWrap>NO PREFERENCE</DoctorDropboxWrap>
                    </Column>
                    
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

                        
                    </SymptomsContainer>
                    ))}
                </AppDetailContainer>
                <Divider />
                <DoctorContainer> test
                </DoctorContainer>
            </NewAppSubContainer>

        </NewAppContainer>

    );
}