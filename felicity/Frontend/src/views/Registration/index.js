import RegistrationPage from "../../Components/RegistrationPage"
import React, { useContext } from "react";
import ReactDOM from "react-dom";

import { SocketContext } from "../../API/video"

function Registration() {
  const { postPatientLogin, postDoctorLogin } = useContext(SocketContext);
  return (

    <RegistrationPage patientL={postPatientLogin} doctorL={postDoctorLogin} />


  );
}

export default Registration;
