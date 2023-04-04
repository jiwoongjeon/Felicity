import React from "react"

import { First, Second, PageTitle, DoctorName, Department, LongDivider, ShortDivider, 
    Date, Name, PatientName, MedicineName, Med, Amount, Instructions, 
    DrugRoute, Info, Caution, Outline, Third, CautionDivider, Fourth } from "./styles";
import Patient from "../../Home";

function PrescriptionRev() {
    return (
        <Outline>
            <First>
                <PageTitle>Prescription</PageTitle>
                <Date>02.21.23</Date>
            </First>
            <LongDivider/>
            <Second>
                <DoctorName>Dr. Arushi</DoctorName>
                <Department>Dentistry</Department>
            </Second>
            <ShortDivider/>
            <Third>
                <PatientName>Patient</PatientName>
                <Name>Bam Abadeyo</Name>
                <MedicineName>MedicineName</MedicineName>
                <Med>Metformin HCL</Med>
                <Amount>500 mg Tablet</Amount>
                <Instructions>Instructions</Instructions>
                <DrugRoute>Take 1 tablet orally 2 times a day</DrugRoute>
            </Third>
            <Fourth>
                <Info>Important Information</Info>
                <CautionDivider/>
                <Caution>
                    Talk to your Dr. about the use of alcohol while taking this drug.

                    Severe vomiting or diarrhea may cause dehydration. If these occur, call MD.
                    
                    Drug may cause lactic acidosis. If symptoms develop, seek medical help.
                </Caution>
            </Fourth>
            
        </Outline>
    );
}

export default PrescriptionRev