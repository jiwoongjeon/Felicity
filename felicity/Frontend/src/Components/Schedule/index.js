import { useState } from "react";
import React from "react";
import moment from "moment";
const { ScheduleContainer, Header, AppointmentContainer, AppointmentList, FstColumn, First, Column, Group, Date, TimeEmail, EditIcon, DeleteIcon, DoctorEmail, ScheduleElement } = require("./styles");
const today = moment().format("HH:mm:ss");
var isEmpty = true;

const TimeCompare = (date, time, past) => {
    
    const today = moment().format("MM-DD-YYYY")
    const today_time = moment().add(10, 'M').format("HH:mm:ss a")
    const appointment = moment(date).format("MM-DD-YYYY")
    const app_time = moment(time, "hh:mm:ss").format("HH:mm:ss a")


    console.log(today); 
    console.log(today_time);
    console.log(appointment);
    console.log(app_time);
 
    if (!past) {
        if (appointment > today) {
            isEmpty = false;
            return true;
        }
        else if (appointment < today) 
            return false;
        else
            if (app_time >= today_time){
                isEmpty = false;
                return true;
            }
            else
                return false;
    }

    else {
        if (appointment < today) {
            isEmpty = false;
            return true;
        }
        else if (appointment > today)
            return false;
        else
            if (app_time < today_time){
                isEmpty = false;
                return true;
            }
            else
                return false;
    }
}


const Click = (date, time, past) => {

    const today = moment().format("MM-DD-YYYY")
    const click_time = moment().add(30, "minutes").format("HH:mm:ss a")
    const appointment = moment(date).format("MM-DD-YYYY")
    const app_time = moment(time, "hh:mm:ss").format("HH:mm:ss a")

 
    console.log("click: " + today); 
    console.log("click: " + click_time);
    console.log("click: " + appointment);
    console.log("click: " + app_time);
    
    if (appointment == today){
        if (app_time <= click_time){
            isEmpty = false;
            return true;
        }
    }
    // if (!past) {
    //     if (appointment > today) {
    //         isEmpty = false;
    //         return true;
    //     }
    //     else if (appointment < today)
    //         return false;
    //     else
    //         if (app_time <= click_time){
    //             isEmpty = false;
    //             return true;
    //         }
    //         else
    //             return false;
    // }

    // else {
    //     if (appointment < today) {
    //         isEmpty = false;
    //         return true;
    //     }
    //     else if (appointment > today)
    //         return false;
    //     else
    //         if (app_time > click_time){
    //             isEmpty = false;
    //             return true;
    //         }
    //         else
    //             return false;
    // }
    
}
    
const NonClick = (date, time, past) => {

    const today = moment().format("MM-DD-YYYY")
    const click_time = moment().add(30, "minutes").format("HH:mm:ss a")
    const appointment = moment(date).format("MM-DD-YYYY")
    const app_time = moment(time, "hh:mm:ss").format("HH:mm:ss a")

    if (appointment < today){
        return false;
    }
    else if (appointment == today){
        if(app_time <= click_time){
            return false;
        }
    }
    else 
        isEmpty = false;
        return true;
}

const Schedule = ({ startCall, schedule_data}) => {

    isEmpty = true;
    

    return (
        <ScheduleContainer>
            <Header>My Schedule</Header>
            <AppointmentList>           
                {schedule_data.map((data) => (
                    <>
                    {console.log("code: " + moment(data.reserved_time, "hh:mm:ss").format("LT"))}
                        {TimeCompare(data.reserved_date, data.reserved_time, data.past) && (
                            <AppointmentContainer> 
                                
                                {Click(data.reserved_date, data.reserved_time, data.past) && (
                                    <FstColumn onClick={() => startCall(data.rid)} to={"/Patient/videocall"}>
                                        <Group>
                                            <Date>{data.reserved_date}</Date> 
                                            <TimeEmail>{data.reserved_time}</TimeEmail>
                                        </Group>
                                        <Group>
                                            <DeleteIcon>DELETE</DeleteIcon>
                                            <EditIcon>EDIT</EditIcon>
                                        </Group>
                                     </FstColumn>)}
                
                                {NonClick(data.reserved_date, data.reserved_time, data.past) && (
                                    <First>
                                        <Group>
                                            <Date>{data.reserved_date}</Date>   
                                            <TimeEmail>{data.reserved_time}</TimeEmail>
                                         </Group>
                                         <Group>
                                            <DeleteIcon>DELETE</DeleteIcon>
                                            <EditIcon>EDIT</EditIcon>
                                        </Group>
                                    </First>)}

                                <Column>
                                    <DoctorEmail>Doctor: {data.firstname} {data.lastname}</DoctorEmail>
                                </Column>
                            </AppointmentContainer>
                        )}       
                    </>
                    
                ))}
                    

            </AppointmentList>
        </ScheduleContainer>
    );
}



export default Schedule;