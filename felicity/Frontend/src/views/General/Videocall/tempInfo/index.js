import Axios from "axios";
import API_URL from "../../../../API/server-ip";
import { useContext, useState, useEffect } from "react";
import { SocketContext } from "../../../../API/video";
import { InfoBoxContainer, Label, Content, SymptomBubble, Name, Line } from "./styles";

export const InfoBox = () => {

    const { role, did, psex, pname, pbirth, symptoms, wounded_area } = useContext(SocketContext);

    const [doctorData, setDoctorData] = useState({ name: "loading data from server", profession: "loading data from server", email: "loading data from server" });

    useEffect(() => {
        Axios.post(`${API_URL}/doctor_info`, {"doctor_id": did})
        .then((response) => {
            let name = response.data[0].firstname + " " + response.data[0].lastname;
            setDoctorData({ name: name, profession: response.data[0].profession, email: response.data[0].email });
          })
    }, []);

    
    return (
        <InfoBoxContainer>
            {!role && <Label>Patient Info</Label>}
            {role && <Label>Doctor Info</Label>}

            {/* Past medical records need to be added */}
            {!role &&
            <Content>
                <Name>{pname}</Name>
                <Line>Date of birth: {pbirth}</Line>
                <Line>Sex: {psex}</Line>
                <Line>Underlying Disease: *** Working ***</Line>
                <Line>Wounded Area: {wounded_area}</Line>
                <Line>Symptom: <SymptomBubble>{symptoms}</SymptomBubble></Line>
            </Content>}
            {role &&
            <Content>
                <Name>Dr. {doctorData.name}</Name>
                <Line>Profession: {doctorData.profession}</Line>
                <Line>Education: *** Working ***</Line>
                <Line>Phone: *** Working ***</Line>
                <Line>Email: {doctorData.email}</Line>
            </Content>
            }
        </InfoBoxContainer>
    );
};

export default InfoBox;