import { useContext, useState } from "react";
import React from "react";
import moment from "moment";
import Axios from "axios";
import API_URL from "../../../../API/server-ip";
import {SocketContext} from '../../../../API/video'
import { propTypes } from "react-bootstrap/esm/Image";
const { ScheduleContainer, Header, AppointmentContainer, AppointmentList, FstColumn, First, Column, Group, Date, TimeEmail, EditIcon, DeleteIcon, DoctorEmail, ScheduleElement, CancelButton } = require("./styles");

var isEmpty = true;
const jwt = JSON.parse(sessionStorage.getItem("jwt"))

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

const Schedule = ({ startCall, schedule_data, symptoms }) => {

    isEmpty = true;
    const { setdid, setpid, setPsex, setPname, setPbirth, setSymptoms, setArea } = useContext(SocketContext);

    function handleStartCall(did, symptoms, wounded_area, rid) {
        setdid(did);
        
        setpid(JSON.parse(sessionStorage.getItem("jwt")))
        //setPsex(sex)
        setPname(JSON.parse(sessionStorage.getItem("name")));
        //setPbirth(birth);
        setSymptoms(symptoms);
        setArea(wounded_area);
        
        startCall(rid);
    }

    return (
        <ScheduleContainer>
            <Header>My Schedule</Header>
            <AppointmentList>
                {schedule_data.map((data) => (
                    <>  
                        {TimeCompare(data.reserved_date, data.reserved_time) && data.canceled == 0 &&
                            <AppointmentContainer onClick={() => { handleStartCall(data.doctor_id,
                                symptoms([data.cough, data.vomit, data.fever, data.sore_throat,
                                    data.phlegm, data.runny_nose, data.nauseous, data.out_of_breath,
                                    data.stomachache, data.chills, data.muscle_sickness, data.other]).join(', '), data.wounded_area, data.rid); }} to={"/Patient/videocall"}>
                                <Date>{data.reserved_date}</Date>
                                <TimeEmail>{data.reserved_time}</TimeEmail>
                                <DoctorEmail>Doctor: {data.firstname} {data.lastname}</DoctorEmail>
                                <CancelButton onClick ={() => {Axios.post(`${API_URL}/cancel-reservation`, { "id": data.rid, "cancelUser": 0 }); data.canceled = 1}}>Cancel</CancelButton>
                            </AppointmentContainer>}
                    </>
                ))}
                {isEmpty == true && <Column>There is no appointment.</Column>}
            </AppointmentList>
        </ScheduleContainer>
    );
}



export default Schedule;