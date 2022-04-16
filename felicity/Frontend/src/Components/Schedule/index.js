import { useState } from "react";

const { ScheduleContainer, Header, AppointmentContainer, AppointmentList, FstColumn, Column, Group, Date, TimeEmail, EditIcon, DeleteIcon, DoctorEmail } = require("./styles");

export const Schedule = (props) => {
    return (
        <ScheduleContainer>
            <Header>My Schedule</Header>
            <AppointmentList>
            {props.schedule_data.map((data) => (
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
                        <DoctorEmail>Doctor: {data.doctor_firstName} {data.doctor_lastName}</DoctorEmail>
                    </Column>
                </AppointmentContainer>
        ))}
        </AppointmentList>
        </ScheduleContainer>
    );
}

export default Schedule;