import LoginPage from "../../Components/LoginPage"
import React, { useContext } from "react";
import ReactDOM from "react-dom";

import { SocketContext } from "../../API/video"

function Login() {
  const { postPatientLogin, postDoctorLogin } = useContext(SocketContext);
  return (

    <LoginPage patientL={postPatientLogin} doctorL={postDoctorLogin} />


  );
}

export default Login;


