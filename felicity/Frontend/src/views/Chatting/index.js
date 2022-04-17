import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';
import UserRedirect from "../UserRedirect";


function Chatting(props) {

  const jwt = JSON.parse(sessionStorage.getItem("jwt"))

  return (

    <Mostouter>
      {!jwt && <UserRedirect isRole={!props.isDoctor}/>}

    <Cat>
        <Header isDoctor={props.isDoctor}/>
    </Cat>

    <Directory>
        <Path directory="Chatting"/>
    </Directory>

    <User>
        <Login />
    </User>


    <Video>
    </Video>



    </Mostouter>


  );
}

export default Chatting;
