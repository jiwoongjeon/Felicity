import React, { useState, useEffect, useContext } from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';
import { ProfilePage } from "../../Components/ProfilePage";
import UserRedirect from "../UserRedirect";
import Axios from "axios";
import API_URL from "../../API/server-ip";
import { SocketContext } from "../../API/video";

function Profile(props) {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"))
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [time, setTime] = useState("")

  const { changeDoctorAvailableTime, UTCToLocal } = useContext(SocketContext);

  useEffect(() => {
    if (props.isDoctor) {
      Axios.post(`${API_URL}/dstatus`, {doctorId: jwt})
      .then((response) => {
        if (response.data) {
          const [tmpDateA, LocalTimeA] = UTCToLocal("2022-06-12", response.data[0].timea)
          const [tmpDateB, LocalTimeB] = UTCToLocal("2022-06-12", response.data[0].timeb)
          const time = LocalTimeA + " ~ " + LocalTimeB
          setName(response.data[0].fullname)
          setEmail(response.data[0].email)
          setTime(time)
        }
      })
    }
    else {
      Axios.post(`${API_URL}/pstatus`, {patientId: jwt})
      .then((response) => {
        if (response.data) {
          setName(response.data[0].fullname)
          setEmail(response.data[0].email)
        }
      })
    }
  }, [])

  return (

    <Mostouter>
      {!jwt && <UserRedirect isRole={!props.isDoctor}/>}
      
    <Cat>
        <Header isDoctor={props.isDoctor}/>
    </Cat>

    <Directory>
        <Path directory="Profile"/>
    </Directory>

    <User>
        <Login />
    </User>


    <Video>
      <ProfilePage name={name} email={email} time={time} isDoctor={props.isDoctor} jwt={jwt} changeTime={changeDoctorAvailableTime} />
    </Video>



    </Mostouter>


  );
}

export default Profile;
