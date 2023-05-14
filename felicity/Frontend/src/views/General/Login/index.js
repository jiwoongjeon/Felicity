import LoginPage from "./LoginPage"
import React, { useContext } from "react";
import { SocketContext } from "../../../API/video"

function Login() {
  const { postPatientLogin, postDoctorLogin } = useContext(SocketContext);
  return (

    <LoginPage patientL={postPatientLogin} doctorL={postDoctorLogin} />

  );
}

export default Login;


