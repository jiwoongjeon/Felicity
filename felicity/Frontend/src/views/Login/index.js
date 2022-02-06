import LoginPage from "../../Components/LoginPage"
import React from "react";
import ReactDOM from "react-dom";

function Login() {
  const { postPatientLogin, postDoctorLogin } = useContext(SocketContext);
  return (

    <LoginPage patientL={postPatientLogin} doctorL={postDoctorLogin} />


  );
}

export default Login;


