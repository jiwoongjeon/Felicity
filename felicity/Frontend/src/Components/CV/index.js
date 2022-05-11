const { PatientContainer, DetailLabel, PatientImage, Column, Patient, Bio, Divider, Btn, Row, Detail, DefaultLabel } = require("./styles");


//props.data[props.index]
export const CV = (props) => {

    return (
        <PatientContainer>
            <Column>
                <PatientImage img={props.data.img} />
                <Row>
                    <Patient>{props.data.firstname} {props.data.lastname}</Patient>
                    <Bio>{props.data.sex}, {props.data.birthday}</Bio>
                </Row>

                <Divider />

                <Patient>Detailed description</Patient>
                {!props.data.sex && <DefaultLabel>Select an appointement from left to view a detailed description</DefaultLabel>}
                {props.data.sex &&
                    <Column>
                        <Row>
                            <DetailLabel>Appointment Date: </DetailLabel>
                            <Detail>{props.data.reserved_date} {props.data.time}</Detail>
                        </Row>
                        <DetailLabel>Symptoms: </DetailLabel>
                        {props.symptoms(
                            [props.data.cough, props.data.vomit, props.data.fever, props.data.sore_throat,
                            props.data.phelgm, props.data.runny_nose, props.data.nauseous, props.data.out_of_breath,
                            props.data.stomachache, props.data.chills, props.data.muscle_sickness, props.data.other]).map((symptom) => (
                                <Detail>{symptom} </Detail>
                            ))}
                        <Row>
                            <DetailLabel>Request: </DetailLabel>
                            {props.data.request && <Detail>{props.data.request}</Detail>}
                            {!props.data.request && <Detail>None</Detail>}
                        </Row>
                        <Row>
                            <DetailLabel>Department: </DetailLabel>
                            {props.data.department && <Detail>{props.data.department}</Detail>}
                            {!props.data.department && <Detail>None</Detail>}
                        </Row>
                        <Row>
                            <DetailLabel>Wounded area: </DetailLabel>
                            <Detail>{props.data.wounded_area}</Detail>
                        </Row>
                        <Row>
                            <DetailLabel>Injured time: </DetailLabel>
                            <Detail>{props.data.injured_time}</Detail>
                        </Row>

                        <Row>
                            <DetailLabel>Severity: </DetailLabel>
                            <Detail>{props.data.severity}</Detail>
                        </Row>

                        <Row>
                            <DetailLabel>Expected reason: </DetailLabel>
                            {props.data.reason && <Detail>{props.data.reason}</Detail>}
                            {!props.data.reason && <Detail>None</Detail>}
                        </Row>

                    </Column>}
            </Column>
            <Divider />
            {props.data.sex && !props.past && <Btn onClick={() => props.startCall(props.data.rid)} to={`./videocall`}>See your patient now</Btn>}
        </PatientContainer>
    );
}

export default CV;
