import {React, useContext, useState, useEffect} from "react";
import axios from "axios";
import UserRedirect from "../../../Components/UserRedirect";
import { Full, PrescriptionContainer, Logo, Title, Row, Patient, Doctor, 
    Date, Department, InputContainer, Label, Medication, Amount, DrugRoute, Cautions, SmallInput, RouteInput, CautionInput, SubmitButton, SubmitButtonDisabled } from "./styles";
import LogoImg from "../../../Components/assets/square_logo.png";
import { SocketContext } from "../../../../API/video";
import API_URL from "../../../../API/server-ip";
import moment from "moment";

function PrescriptionPage() {
    
    const [next, setNext] = useState("");
    const [after, setAfter] = useState("");
    const [complete, setComplete] = useState("");
    const [finished, setFinished] = useState("");

    /*const pid = JSON.parse(window.sessionStorage.getItem("pid"));
    const did = JSON.parse(window.sessionStorage.getItem("did"));*/
    /*const rid = JSON.parse(window.sessionStorage.getItem("rid"));*/
    const [pname, setPname] = useState("");
    const [dname, setDname] = useState("");
    
    const [department, setDepartment] = useState("");
    const {pid, did, rid} = useContext(SocketContext);
    const today = moment().format("YYYY-MM-DD").split("-");

    //Set Patient Name, Doctor Name, Date
    useEffect(() => {
        axios.post(`${API_URL}/pstatus`, {"patientId": pid})
                .then((response) => {
                    setPname(response.data[0].fullname);
            })
        axios.post(`${API_URL}/dstatus`, {"doctorId": did})
                .then((response) => {
                    setDname(response.data[0].fullname);
            })
        
        axios.post(`${API_URL}/readDepartment`, {"doctorId": did})
                .then((response) => {
                    
                    setDepartment(response.data[0].department);
                })
        
    }
    , [])
    
    const writePrescription = (medicine, amount, drugRoute, caution) => {
        axios.post(`${API_URL}/writePrescription`, { "rid": rid, "pid": pid, "did": did, 
        "department": department, "date": today.join("-"), "medicine": medicine,
        "amount": amount, "drugRoute": drugRoute, "caution": caution})
            .then((response) => {
                if (response.data[0].errMsg) {
                    console.log(response.data[0]);
                }
                console.log(response.data[0])
            })
    }

    
    
    return (
        <Full>
            <PrescriptionContainer>

                <Logo src={LogoImg} />

                <Title>Prescription</Title>
                <Row>
                    <Patient>Patient Name: {pname}</Patient>
                    <Date>{today[1]}/{today[2]}/{today[0]}</Date>
                </Row>
                <Row>
                    <Doctor>Doctor Name: {dname}</Doctor>
                    <Department>{department}</Department>
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
                                    : <SubmitButton onClick = {() => writePrescription(next, after, complete, finished)} to={'/Doctor/Home'}>Next</SubmitButton>}
                    <SubmitButton to={'/Doctor/Home'}>Cancel</SubmitButton>
                </Row>
            </PrescriptionContainer>
            
        </Full>
    );
}

export default PrescriptionPage;