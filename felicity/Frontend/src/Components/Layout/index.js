import React from 'react';
import Video from '../Video';
import Title from '../Title';
import Infos from '../Infos';
import Timer from '../Timer';
import CallEndButton from '../CallEndButton';
import {ContentLayout, Empty, TitleBox, VideoBox, InfoBox, CallEnd} from "./styles";
import { useState, useEffect } from "react";
import Axios from "axios";
import API_URL from "../../API/server-ip";

const Layout = ({ context }) => {
    const [doctorName, setDoctorName] = useState();
    const [patientName, setPatientName] = useState();
    
    useEffect(() => {
      const doctorId = JSON.parse(sessionStorage.getItem("did"))
      const patientId = JSON.parse(sessionStorage.getItem("pid"))
      Axios.post(`${API_URL}/dstatus`, { "doctorId": doctorId})
            .then((response) => {
              setDoctorName(response.data[0].lastname)
            })
      Axios.post(`${API_URL}/pstatus`, { "patientId": patientId})
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

                <TitleBox>
                    <Title doctorName={doctorName} patientName={patientName}/>
                </TitleBox>

                <Empty>
                    <Timer role={context.role}/>
                </Empty>

                <CallEnd>
                    <CallEndButton context={context}/>
                </CallEnd>                

                <InfoBox>
                    <Infos/>
                </InfoBox>

            </ContentLayout>
        </div>
    );
};

export default Layout;