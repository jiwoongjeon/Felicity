import React from "react";
import Slider from '@material-ui/core/Slider';
import { LevelLabel, SymptomsContainer, SymptomsBubble, PostContainer,Header,PostElementContainer,AvailContainer,Divider,AvailBubble,PostElement,HeaderColumn,Time,BodyColumn,No,Patient,Name,PhotoArea,UnavailableBubble,Department, NoLabel, PhotoLabel, DepartLabel, AvailLabel, TimeLabel } from "./styles";

const ActivateButton = ( active ) => {
  if (active === 0) {
    return <UnavailableBubble>Already setted</UnavailableBubble>;
  }

  return (
    <AvailBubble>Set Appointment</AvailBubble>
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
                            <No>{i+1}</No>
                            <PhotoArea img = {data.img}/>

                            <Patient>
                              <Name>{data.first_name} {data.last_name}</Name>
                              <Department>{data.wounded_area}</Department>
                            </Patient>
                            
                            <TimeLabel>
                              <Time>{data.reserved_date} {data.time}</Time>
                              <SymptomsContainer>
                                    {props.function([data.a, data.b, data.c, data.d, data.e, data.f, data.g, data.h, data.i, data.j, data.k, data.l]).map((symptom) => (
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
                            {ActivateButton(data.available)}
                            </AvailContainer>

                        </BodyColumn>
                        <Divider></Divider>
                    </PostElement>


                    ))}
            </PostElementContainer>

        </PostContainer>
  );
};