import { useState } from "react";
import React from "react";
import moment from "moment";

const { ScheduleContainer, Header, AppointmentContainer, AppointmentList, FstColumn, Column, Group, Date, TimeEmail, EditIcon, DeleteIcon, DoctorEmail, ScheduleElement } = require("./styles");

export const Schedule = ({ schedule_data }) => {


    return (
        <ScheduleContainer>
            <Header>My Schedule</Header>
            <AppointmentList>
                {schedule_data.length ? (schedule_data.map((data) => (
                    <AppointmentContainer>
                        <FstColumn to={"/Patient/videocall"}>
                            <Group>
                                <Date>{data.reserved_date}</Date>
                                <TimeEmail>{data.reserved_time}</TimeEmail>
                            </Group>
                            <Group>
                                <DeleteIcon>DELETE</DeleteIcon>
                                <EditIcon>EDIT</EditIcon>
                            </Group>
                        </FstColumn>
                        <Column>
                            <DoctorEmail>Doctor: {data.firstname} {data.lastname}</DoctorEmail>
                        </Column>
                    </AppointmentContainer>
                ))) :
                    (
                        <Column>There is no appointment left</Column>
                    )}


            </AppointmentList>
        </ScheduleContainer>
    );
}



export default Schedule;