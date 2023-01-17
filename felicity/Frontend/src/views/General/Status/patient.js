import React, { useEffect, useState } from "react"
import Header from '../../../Components/Header/Header';
import { Mostouter, Cat, List, Directory, User } from './layout';
import Path from '../../../Components/Path';
import Login from '../../../Components/Login';

import DoctorList from "../../Patients/DoctorList";
import UserRedirect from "../../UserRedirect";
import Axios from "axios";
import API_URL from "../../../API/server-ip";


function StatusPatient() {
  const [doctorList, setDoctorList] = useState([])

  useEffect(() => {
    Axios.get(`${API_URL}/available-doctor`)
      .then((response) => {
        console.log(response.data)
        setDoctorList(response.data);
      })
  }, [])
  const jwt = JSON.parse(sessionStorage.getItem("jwt"))

  return (

    <Mostouter>
      {!jwt && <UserRedirect isRole={true} />}

      <Cat>
        <Header isDoctor={false} />
      </Cat>
      <Directory>
        <Path directory="Doctor List" />
      </Directory>

      <User>
        <Login />
      </User>

      <List>
        <DoctorList doctorList={doctorList} />
      </List>

    </Mostouter>


  );
}

export default StatusPatient;