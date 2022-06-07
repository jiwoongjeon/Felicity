import React from "react";
import Slider from '@material-ui/core/Slider';
import { LevelLabel, SymptomsContainer, SymptomsBubble, PostContainer, Header, PostElementContainer, AvailContainer, Divider, AvailBubble, PostElement, HeaderColumn, Time, BodyColumn, No, Patient, Name, PhotoArea, UnavailableBubble, Department, NoLabel, PhotoLabel, DepartLabel, AvailLabel, TimeLabel } from "./styles";
import { Redirect } from "react-router-dom";

const ActivateButton = (active, did, rid, func) => {
  if (active === 0) {
    return <UnavailableBubble>Already setted</UnavailableBubble>;
  }

  return (
    <AvailBubble onClick={() => { func(did, rid); active = 0; }} to={'/Doctor/Home'}>Set Appointment</AvailBubble>
  );
}


export const MeetingPage = (props) => {
  return (
    <PostContainer>

      <Header>Patient waiting for a reservation</Header>

      <HeaderColumn>
        <NoLabel>NO</NoLabel>
        <PhotoLabel>PATIENT</PhotoLabel>
        <DepartLabel>PREFERRED TIME, SYMPTOMS</DepartLabel>
        <DepartLabel>LEVEL OF HURT</DepartLabel>
        <AvailLabel>APPOINTMENT</AvailLabel>
      </HeaderColumn>

      <PostElementContainer>
        <Divider />
        {props.patientData.map((data, i) => (
          <PostElement>
            <BodyColumn>
              <No>{i + 1}</No>
              <PhotoArea img={data.img} />

              <Patient>
                <Name>{data.firstname} {data.lastname}</Name>
                <Department>{data.wounded_area}</Department>
              </Patient>

              <TimeLabel>
                <Time>{data.reserved_date} {data.reserved_time}</Time>
                <SymptomsContainer>
                  {props.function([data.cough, data.vomit, data.fever, data.sore_throat,
                  data.phlegm, data.runny_nose, data.nauseous, data.out_of_breath,
                  data.stomachache, data.chills, data.muscle_sickness, data.other]).map((symptom) => (
                    <SymptomsBubble>{symptom}</SymptomsBubble>
                  ))}
                </SymptomsContainer>
              </TimeLabel>

              <LevelLabel>
                <Slider
                  marks
                  min={0}
                  max={10}
                  step={1}
                  defaultValue={data.severity}
                  valueLabelDisplay="on"
                  disabled />
              </LevelLabel>

              <AvailContainer>
                {ActivateButton(data.active, props.jwt, data.rid, props.acceptReservation)}
              </AvailContainer>

            </BodyColumn>
            <Divider />
          </PostElement>


        ))}
      </PostElementContainer>
      {props.reserved && <Redirect to="/Doctor/Home" />}

    </PostContainer>
  );
};