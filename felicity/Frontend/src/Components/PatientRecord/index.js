import { PATIENT_RECORD } from "./tempData";
const { RecordContainer, Header, RecordList, RecordElement, Date_Id, Doctor, Column, Detail, HeaderText, ViewAll } = require("./styles");

export const PatinetRecord = () => {
    return (
        <RecordContainer>
            <Header>
                <HeaderText>Patient Record</HeaderText>
                <ViewAll>View All</ViewAll>
            </Header>
            <RecordList>
            {PATIENT_RECORD.map((data) => (
                <RecordElement>
                    <Column>
                        <Date_Id>{data.id} - {data.date}</Date_Id>
                        <Doctor>{data.doctor}</Doctor>
                    </Column>
                    <Detail>See Detail</Detail>
                </RecordElement>
            ))}
            </RecordList>
        </RecordContainer>
    );
}

export default PatinetRecord;