
import React from "react";
import moment from "moment";
const { RecordContainer, Header, RecordList, RecordElement, Date_Id, Doctor, Column, Detail, HeaderText, ViewAll } = require("./styles");
const counter = 0;
const today = moment().format("MM-DD-YYYY");
export const PatinetRecord = (props) => {
    return (
        <RecordContainer>
            <Header>
                <HeaderText>Patient Record</HeaderText>
                <ViewAll>View All</ViewAll>
            </Header>
            <RecordList>
            {moment(props.date).format("MM-DD-YYYY") < today && props.patient_data.map((data) => (
                <RecordElement>
                {counter += 1}
                    <Column>
                        <Date_Id>{data.id} - {data.date}</Date_Id>
                        <Doctor>{data.doctor}</Doctor>
                    </Column>
                    <Detail>See Detail</Detail>
                    
                </RecordElement>
                
            ))}
           {counter == 0 && <Column>There is no recent record</Column>}
            </RecordList>
        </RecordContainer>
    );
}

export default PatinetRecord;
// data null --> no recent record
