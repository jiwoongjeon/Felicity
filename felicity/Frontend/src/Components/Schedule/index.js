import { useState } from "react";
import React from "react";
import moment from "moment";
const { ScheduleContainer, Header, AppointmentContainer, AppointmentList, FstColumn, First, Column, Group, Date, TimeEmail, EditIcon, DeleteIcon, DoctorEmail, ScheduleElement, CancelButton } = require("./styles");

var isEmpty = true;
const counter = 0;

const TimeCompare = (date, time) => {

    const today = moment().format("YYYY-MM-DD")
    const today_time = moment().add(10, 'M').format("HH:mm:ss a")
    const appointment = moment(date).format("YYYY-MM-DD")
    const app_time = moment(time, "hh:mm:ss").format("HH:mm:ss a")

    if (appointment > today) {
        isEmpty = false;
        return true;
    }
    else if (appointment < today)
        return false;

    else
        if (app_time >= today_time) {
            isEmpty = false;

            return true;
        }
        else
            return false;
}


const Click = (date, time, past) => {

    const today = moment().format("MM-DD-YYYY")
    const click_time = moment().add(30, "minutes").format("HH:mm:ss a")
    const appointment = moment(date).format("MM-DD-YYYY")
    const app_time = moment(time, "hh:mm:ss").format("HH:mm:ss a")



    if (appointment == today) {
        if (app_time <= click_time) {
            isEmpty = false;
            return true;
        }
        else {
            return false
        }
    }
}

const NonClick = (date, time, past) => {

    const today = moment().format("MM-DD-YYYY")
    const click_time = moment().add(30, "minutes").format("HH:mm:ss a")
    const appointment = moment(date).format("MM-DD-YYYY")
    const app_time = moment(time, "hh:mm:ss").format("HH:mm:ss a")

    if (appointment < today) {
        return false;
    }
    else if (appointment == today) {
        if (app_time <= click_time) {
            return false;
        }
    }
    else
        isEmpty = false;
    return true;

}

const Schedule = ({ startCall, schedule_data }) => {

    isEmpty = true;

    function handleStartCall() {
        window.sessionStorage.setItem('did', JSON.stringify(schedule_data[0].doctor_id));
    }

    return (
        <ScheduleContainer>
            <Header>My Schedule</Header>
            <AppointmentList>
                {schedule_data.map((data) => (
                    <>
                        {TimeCompare(data.reserved_date, data.reserved_time) &&
                            <AppointmentContainer onClick={() => { handleStartCall(); startCall(data.rid) }} to={"/Patient/videocall"}>
                                <FstColumn >
                                    <Group>
                                        <Date>{data.reserved_date}</Date>
                                        <TimeEmail>{data.reserved_time}</TimeEmail>
                                    </Group>
                                </FstColumn>
                                
                                <DoctorEmail>Doctor: {data.firstname} {data.lastname}</DoctorEmail>
                                
                                
                                <CancelButton>Cancel</CancelButton>
                                
                                
                                
                            </AppointmentContainer>}
                    </>
                ))}
                {isEmpty == true && <Column>There is no appointment.</Column>}


            </AppointmentList>
        </ScheduleContainer>
    );
}



export default Schedule;