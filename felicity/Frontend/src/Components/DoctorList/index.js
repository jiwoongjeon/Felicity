import React from "react";
import { DOCTOR_DATA } from "./TempData";
import {
PostContainer,
Header,
PostElementContainer,
AvailContainer,
Divider,
AvailBubble,
PostElement,
HeaderColumn,
BodyColumn,
No,
Doctor,
Name,
PhotoArea,
UnavailableBubble,
Department, NoLabel, PhotoLabel, DepartLabel, AvailLabel} from "./styles";

const ActivateButton = ( active ) => {
  if (active === 0) {
    return <UnavailableBubble>Not Available</UnavailableBubble>;
  }

  return (
    <AvailBubble>Now Available</AvailBubble>
  );
}


const DoctorList = () => {
  return (
        <PostContainer>

            <Header>Doctor List</Header>

            <HeaderColumn>
                    <NoLabel>NO</NoLabel>
                    <PhotoLabel>Doctor</PhotoLabel>
                    <DepartLabel></DepartLabel>
                    <AvailLabel>APPOINTMENT</AvailLabel>
            </HeaderColumn>

            <PostElementContainer>
                <Divider />
                {DOCTOR_DATA.map((data, i) => (
                    <PostElement>
                        <BodyColumn>
                            <No>{i+1}</No>
                            <PhotoArea img = {data.img}/>
                            <Doctor>
                                <Name>{data.name}</Name>
                                <Department>{data.department}</Department>
                            </Doctor>
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

export default DoctorList;