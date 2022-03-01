const { PatientContainer, DetailLabel, PatientImage, Column, Patient, Bio, Divider, Btn, Row, Detail, DefaultLabel} = require("./styles");


//props.data[props.index]
export const CV = (props) => {

    return (
        <PatientContainer>
            <Column>
                <PatientImage img = {props.data.img} />
                <Row>
                    <Patient>{props.data.patient_firstName} {props.data.patient_lastName}</Patient>
                    <Bio>{props.data.sex}, {props.data.birthday}</Bio>
                </Row>

                <Divider />
                
                <Column>
                    {!props.data.sex && <DefaultLabel>Select an appointement from left to view a detailed description</DefaultLabel>}
                    {props.data.sex && <Patient>Detailed description</Patient>}
                    
                    <Row>
                        {props.data.sex && <DetailLabel>Appointment Date: </DetailLabel>}
                        <Detail>{props.data.reserved_date} {props.data.time}</Detail>
                    </Row>
                    
                    <Row>
                        {props.data.sex && <DetailLabel>Symptoms: </DetailLabel>}
                        {props.symptoms(
                            [props.data.a,props.data.b, props.data.c, props.data.d, 
                                props.data.e, props.data.f, props.data.g, props.data.h, 
                                props.data.i, props.data.j, props.data.k, props.data.l]).map((symptom) => (
                            <Detail>{symptom}, </Detail>
                        ))}
                    </Row>

                </Column>
            </Column>  
            <Divider />
            <Btn to={`./videocall`}>See your patient now</Btn>
        </PatientContainer>
    );
}

export default CV;
