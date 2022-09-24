
import React from "react";
import moment from "moment";
const { RecordContainer, Group, First, TimeEmail, Detail, Header, RecordList, RecordElement, Date, Doctor, Column,  HeaderText, ViewAll } = require("./styles");

var isEmpty = true;

const isPast = (date, time) => {
    
    const today = moment().format("YYYY-MM-DD")
    const today_time = moment().add(10, 'M').format("HH:mm:ss a")
    const appointment = moment(date).format("YYYY-MM-DD")
    const app_time = moment(time, "hh:mm:ss").format("HH:mm:ss a")

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

 const PatinetRecord = ({schedule_data}) => {

    return (
        <RecordContainer>
            <Header>
                <HeaderText>Patient Record</HeaderText>
                <ViewAll>View All</ViewAll>
            </Header>
            <RecordList>
                {schedule_data.map((data) => (
                    <>
                    {isPast(data.reserved_date, data.reserved_time) && (
                        <RecordElement>
                            <First>
                                <Group>
                                    <Date>{data.reserved_date}</Date>
                                    <TimeEmail>{data.reserved_time}</TimeEmail>
                                </Group>
                                <Group>
                                    <Detail>View Detail</Detail>
                                </Group>
                                
                            </First>
                            <Column>
                                <Doctor>Doctor: {data.firstname} {data.lastname}</Doctor>   
                            </Column>
                        </RecordElement>)}

                    
                    </>    
                ))}
            
           {isEmpty == true && <Column>There is no recent record</Column>}
            </RecordList>
        </RecordContainer>
    );
}

export default PatinetRecord;
// data null --> no recent record
