import React from "react"
import Header from '../../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../../Components/mostouter';
import Chat_Doc from "./Chat_Doc";
import Path from '../../../Components/Path';
import Login from '../../../Components/Login';
import { ProfilePage } from "../../../Components/ProfilePage";
import UserRedirect from "../../UserRedirect";


function DoctorChat(props) {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"))

  return (

    <Mostouter>
      {!jwt && <UserRedirect isRole={!props.isDoctor}/>}
      
    <Cat>
        <Header isDoctor={props.isDoctor}/>
    </Cat>

    <Directory>
        <Path directory="Doctor-Conversation"/>
    </Directory>

    <User>
        <Login />
    </User>


    <Video>
      <Chat_Doc />
    </Video>



    </Mostouter>


  );
}

export default DoctorChat;
