import React from 'react';
import Video from '../Video';
import Title from '../Title';
import Infos from '../Infos';
import Timer from '../Timer';
import {ContentLayout, Empty, TitleBox, VideoBox, InfoBox} from "./styles";
import { useState, useEffect } from "react";
import Axios from "axios";
import API_URL from "../../API/server-ip";

const Layout = ({ context }) => {
    const [doctorName, setDoctorName] = useState();
    const [patientName, setPatientName] = useState();
    
    useEffect(() => {
      const doctorId = JSON.parse(sessionStorage.getItem("did"))
      const patientId = JSON.parse(sessionStorage.getItem("pid"))
      Axios.post(`${API_URL}/doctor_info`, { "doctor_id": doctorId})
            .then((response) => {
              setDoctorName(response.data[0].lastname)
            })
      Axios.post(`${API_URL}/patient_info`, { "patient_id": patientId})
            .then((response) => {
              setPatientName(response.data[0].firstname + " " + response.data[0].lastname)
            })
    }, [])

    return (
        <div className="Layout">
            <ContentLayout>

                <VideoBox>
                    <Video context={context}/>
                </VideoBox>

                <Empty>
                    <Timer role={context.role}/>
                </Empty>

                <TitleBox>
                    <Title doctorName={doctorName} patientName={patientName}/>
                </TitleBox>

                <InfoBox>
                    <Infos/>
                </InfoBox>

            </ContentLayout>
        </div>
    );
};

export default Layout;