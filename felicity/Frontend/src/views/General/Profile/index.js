import React, { useState, useEffect, useContext } from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';
import { ProfilePage } from "./ProfilePage";
import { ProfilePage2 } from "./ProfilePage2";
import UserRedirect from "../../Components/UserRedirect";
import Axios from "axios";
import API_URL from "../../../API/server-ip";
import { SocketContext } from "../../../API/video";
import {
  ContentLayout,
  Container,
  UserInfo,
  UserInfo2
} from "./layout"



function Profile(props) {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [time, setTime] = useState("");
  const [education, setEducation] = useState("");
  const [sex, setSex] = useState("");
  const [profession, setProfession] = useState("");
  const [birth, setBirth] = useState("");
  const [underlying_disease, setUnderlying_disease] = useState("");
  
  const [isEdit, setIsEdit] = useState(false);
  
  const handleSetIsEdit = (value) => {
    setIsEdit(value);
  };

  
  
  const { changeDoctorAvailableTime, UTCToLocal } = useContext(SocketContext);
/*const handleSave = () => {
    setIsEdit(false);
    // send data to server using Axios
    Axios.post(`${API_URL}/pstatus`, {patientId: jwt})
  .then((response) => {
    if (response.data) {
      /*setEmail(response.data[0].email)
      setName(response.data[0].fullname)
      setBirth(response.data[0].birth)
      setSex(response.data[0].sex)

    }
  }) 

} */
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
          setSex(response.data[0].sex)
          setEducation(response.data[0].education)
          setProfession(response.data[0].profession)
          setBirth(response.data[0].birth)
          setProfileImage(response.data[0].profile_image)
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
          setProfileImage(response.data[0].profile_image)
          setSex(response.data[0].sex)
          setBirth(response.data[0].birth)
          setUnderlying_disease(response.data[0].underlying_disease)
        }
      })
    }
  }, [])

  const handleSetUD = (value) => {
    setUnderlying_disease(value);

  };
  const handleSetProf = (value) => {
    setProfession(value);

  };
  const handleSetEdu = (value) => {
    setEducation(value);

  };
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
      <ContentLayout>
        <UserInfo>
          <ProfilePage isDoctor={props.isDoctor} name = {name} email = {email} sex = {sex} birth = {birth} profileImage = {profileImage} underlying_disease = {underlying_disease} isEdit={isEdit} handleSetIsEdit={handleSetIsEdit}></ProfilePage>
        </UserInfo>
        <UserInfo2>
          <ProfilePage2 isDoctor={props.isDoctor} time = {time} education = {education} profession = {profession} underlying_disease = {underlying_disease} isEdit={isEdit} changeTime={changeDoctorAvailableTime} handleSetUD = {handleSetUD} handleSetEdu = {handleSetEdu} handleSetProf = {handleSetProf}> </ProfilePage2>
        </UserInfo2> 
      </ContentLayout>
    </Video>



    </Mostouter>


  );
  
}

export default Profile;
