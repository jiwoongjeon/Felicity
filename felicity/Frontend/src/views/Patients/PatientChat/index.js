import React from "react"
import Header from '../../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../../Components/mostouter';
import Conversations from "../Home/Conversations";
import Path from '../../../Components/Path';
import Login from '../../../Components/Login';
import { ProfilePage } from "../../General/Profile/ProfilePage";
import UserRedirect from "../../UserRedirect";


function Conv(props) {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"))

  return (

    <Mostouter>
      {!jwt && <UserRedirect isRole={!props.isDoctor}/>}
      
    <Cat>
        <Header isDoctor={props.isDoctor}/>
    </Cat>

    <Directory>
        <Path directory="Patient-Conversation"/>
    </Directory>

    <User>
        <Login />
    </User>


    <Video>
      <Conversations />
    </Video>



    </Mostouter>


  );
}

export default Conv;
