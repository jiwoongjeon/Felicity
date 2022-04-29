import { useState } from "react";
import React from "react";
import moment from "moment";

const { ScheduleContainer, Header, AppointmentContainer, AppointmentList, FstColumn, Column, Group, Date, TimeEmail, EditIcon, DeleteIcon, DoctorEmail, ScheduleElement } = require("./styles");
const today = moment().format("MM-DD-YYYY");
const counter = 0;

export const Schedule = (props) => {
    

    return (
        <ScheduleContainer>
            <Header>My Schedule</Header>
            <AppointmentList>
            {moment(props.reserved_date).format("MM-DD-YYYY") > today && props.schedule_data.map((data) => (
                <AppointmentContainer>  
                    {counter += 1}
                    <FstColumn to={"/Patient/videocall"}>
                        <Group>
                            <Date> {(moment(data.reserved_date).format("MM-DD-YYYY") == today) ? today : data.reserved_date}                            
                            </Date>
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
                { counter == 0 && <Column>There is no appointment left</Column>}
               

        
        </AppointmentList>
        </ScheduleContainer>
    );
            }



export default Schedule;