
import Calen from "../CalenDoctor";

const { CalenderBox, PatientContainer, PatientElementContainer, SymptomsContainer, SymptomsBubble, PatientElement, PatientInfoContainer, PatientImage, Column, Patient, Time, Bio, Divider, Title, Btn } = require("./styles");


const PatientsList = (props) => {


    return (
        <PatientContainer>
            <CalenderBox>
                <Calen data = {props.data}/>
            </CalenderBox>
            <Title>Upcoming Patients</Title>
            <Divider />
            <PatientElementContainer>
                {props.data.map((data, i) => (
                    <Column>
                        <PatientElement onClick={({ target }) =>  props.setFunction(props.data[i])}>
                            <PatientImage img={data.img} />
                            <Column>
                                <PatientInfoContainer>
                                    <Patient>{data.patient_firstName} {data.patient_lastName}</Patient>
                                    <Bio>{data.sex}, {data.birthday}</Bio>
                                </PatientInfoContainer>
                                <Time>Meeting time: {data.reserved_date} {data.time}</Time>
                                <SymptomsContainer>
                                    {props.symptoms([data.a, data.b, data.c, data.d, data.e, data.f, data.g, data.h, data.i, data.j, data.k, data.l]).map((symptom) => (
                                        <SymptomsBubble>{symptom}</SymptomsBubble>
                                    ))}
                                </SymptomsContainer>
                            </Column>
                        </PatientElement>
                        <Divider />
                    </Column>
                ))}
                { !props.data.sex && <Column>There is no appointment left</Column>}
            </PatientElementContainer>
        </PatientContainer>
    );
}

export default PatientsList;
