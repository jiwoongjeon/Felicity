import React, { useState, useCallback } from 'react';
import moment from "moment";
const { PatientContainer, PatientElementContainer, SymptomsContainer, SymptomsBubble, PatientElement, PatientInfoContainer, PatientImage, Column, Patient, Time, Bio, Divider, Title, Btn } = require("./styles");
let isEmpty = true;

const TimeCompare = (date, time, past) => {

    const today = moment().format("YYYY-MM-DD")
    const today_time = moment().add(10, 'M').format("HH:mm:ss a")
    const appointment = moment(date).format("YYYY-MM-DD")
    const app_time = moment(time, "hh:mm:ss").format("HH:mm:ss a")
    
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
    
// const IsToday = (date) => {
//     const [value, setValue] = useState(new Date());
//     var result = [];
//     const appointment = moment(date).format("MM-DD-YYYY");
//     const checked = result.find(x=>x===moment(date).format("MM-DD-YYYY"));
   
//         if(moment(Calen.value).format("MM-DD-YYYY") == appointment){
//             return true;
//         }
//     }

const PatientsList = (props) => {

    isEmpty = true;

    return (
        <PatientContainer>
            {!props.past && <Title>Upcoming Patients</Title>}
            {props.past && <Title>Past Patients</Title>}
            <PatientElementContainer>
                {props.data.map((data, i) => (
                    <>
                        {TimeCompare(data.reserved_date, data.reserved_time, props.past) && (
                        
                            <Column>
                                <PatientElement onClick={({ target }) => props.setFunction(props.data[i])}
                                displayed={props.clicked} clicked={data}>

                                    <PatientImage img={data.img} />
                                    
                                    <PatientInfoContainer>
                                        <Patient>{data.firstname} {data.lastname}</Patient>
                                        {/* <Bio>{data.sex}, {data.birth}</Bio> */}
                                        <Time>{data.reserved_time}</Time>
                                    </PatientInfoContainer>
                                    
                                        {/*  */}
                                        {/* <SymptomsContainer>
                                            {props.symptoms([data.cough, data.vomit, data.fever, data.sore_throat,
                                            data.phelgm, data.runny_nose, data.nauseous, data.out_of_breath, data.stomachache,
                                            data.chills, data.muscle_sickness, data.other]).map((symptom) => (
                                                <SymptomsBubble>{symptom}</SymptomsBubble>
                                            ))}
                                        </SymptomsContainer> */}
                                    
                                </PatientElement>
                            </Column>

                        )}
                    </>

                ))}
                {isEmpty && <Column>There is no appointment left</Column>}
            </PatientElementContainer>
        </PatientContainer>
    );
}

export default PatientsList;
