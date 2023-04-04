import React from "react";

import UserRedirect from "../../../Components/UserRedirect";
import { Full, PrescriptionContainer, Logo, Title, Row, Patient, Doctor, 
    Date, Department, InputContainer, Label, Medication, Amount, DrugRoute, Cautions, SmallInput, RouteInput, CautionInput, SubmitButton, SubmitButtonDisabled } from "./styles";
import LogoImg from "../../../Components/assets/square_logo.png";

function PrescriptionPage() {
    
    const [next, setNext] = React.useState(false);
    const [after, setAfter] = React.useState(false);
    const [complete, setComplete] = React.useState(false);
    const [finished, setFinished] = React.useState(false);

    return (
        <Full>
            <PrescriptionContainer>

                <Logo src={LogoImg} />

                <Title>Prescription</Title>
                <Row>
                    <Patient>Patient Name</Patient>
                    <Date>3/19/2023</Date>
                </Row>
                <Row>
                    <Doctor>Bam Abadeyo</Doctor>
                    <Department>Dentistry</Department>
                </Row>
                <Label>Medicine</Label>
                
                <InputContainer>
                    <SmallInput id="Med" onChange={({target}) => setNext(target.value)} />
                </InputContainer>
                

                <Label>Amount</Label>
                
                <InputContainer>
                    <SmallInput id="Amount" onChange={({target}) => setAfter(target.value)}/>
                </InputContainer>
                

                <Label>Drug Routes</Label>
             
                <InputContainer>
                    <RouteInput id="Routes" onChange={({target}) => setComplete(target.value)}/>
                </InputContainer>

            
                <Label>Cautions</Label>
                <Cautions>
                    <CautionInput id="Cautions" onChange={({target}) => setFinished(target.value)}/>
                </Cautions>
                <Row>
                    {!next ? <SubmitButtonDisabled>Next</SubmitButtonDisabled>
                        : !after ? <SubmitButtonDisabled>Next</SubmitButtonDisabled>
                            : !complete ? <SubmitButtonDisabled>Next</SubmitButtonDisabled>
                                : !finished ? <SubmitButtonDisabled>Next</SubmitButtonDisabled>
                                    : <SubmitButton to={'/Doctor/Home'}>Next</SubmitButton>}
                    <SubmitButton to={'/Doctor/Home'}>Cancel</SubmitButton>
                </Row>
            </PrescriptionContainer>
            
        </Full>
    );
}

export default PrescriptionPage;