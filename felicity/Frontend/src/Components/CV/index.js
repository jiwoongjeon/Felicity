const { PatientContainer, DetailLabel, PatientImage, Column, Patient, Bio, Divider, Btn, Row, Detail, DefaultLabel, Title, Note, Box } = require("./styles");


//props.data[props.index]
export const CV = (props) => {
    function handleStartCall() {
        window.sessionStorage.setItem('pid', JSON.stringify(props.scheduleData[0].patient_id));
    }
    return (
        <PatientContainer>
            <Column>
            <Title>Detailed description</Title>
                {!props.data.sex && <DefaultLabel>Select an appointement from left to view a detailed description</DefaultLabel>}
                {props.data.sex &&
                    <Column>
                        <Row>
                            <PatientImage img={props.data.img}/>
                            <Box>
                                <Patient>{props.data.firstname} {props.data.lastname}</Patient>
                                <Bio>{props.data.sex} {props.data.birthday}</Bio>
                            </Box>
                        </Row>

                        <Row>
                            <DetailLabel>Department</DetailLabel> 
                            {props.data.department && <Detail>{props.data.department}</Detail>}
                            {!props.data.department && <Detail>None</Detail>}
                        </Row>

                        <Row>
                            <DetailLabel>Symptoms</DetailLabel>
                            {props.symptoms(
                                [props.data.a, props.data.b, props.data.c, props.data.d,
                                props.data.e, props.data.f, props.data.g, props.data.h,
                                props.data.i, props.data.j, props.data.k, props.data.l]).map((symptom) => (
                                    <Detail>{symptom} </Detail>
                                ))}
                            
                        </Row>

                        <Row>
                            <DetailLabel>Appointment Date</DetailLabel>
                            <Detail>{props.data.reserved_date} {props.data.time}</Detail>
                        </Row>
                        
                        <Row>
                            <DetailLabel>Request</DetailLabel>
                            {props.data.request && <Detail>{props.data.request}</Detail>}
                            {!props.data.request && <Detail>None</Detail>}
                        </Row>
                        <Row>
                            
                        </Row>
                        <Row>
                            <DetailLabel>Wounded area</DetailLabel>
                            <Detail>{props.data.wounded_area}</Detail>
                        </Row>
                        <Row>
                            <DetailLabel>Injured time</DetailLabel>
                            <Detail>{props.data.injured_time}</Detail>
                        </Row>

                        <Row>
                            <DetailLabel>Severity</DetailLabel>
                            <Detail>{props.data.severity}</Detail>
                        </Row>

                        <Row>
                            <DetailLabel>Expected reason</DetailLabel>
                            {props.data.reason && <Detail>{props.data.reason}</Detail>}
                            {!props.data.reason && <Detail>None</Detail>}
                        </Row>

                        <Row>
                            <DetailLabel>Note</DetailLabel>
                        </Row>

                        <Row>
                            <Note>
                                <DefaultLabel>Type here</DefaultLabel>
                            </Note>
                        </Row>

                    </Column>}
            </Column>
            {props.data.sex && <Btn onClick={() => { handleStartCall(); props.startCall(props.data.rid); }} to={`./videocall`}>See your patient now</Btn>}
        </PatientContainer>
    );
}

export default CV;
