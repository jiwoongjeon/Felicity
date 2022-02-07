import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';


function Profile(props) {
  return (

    <Mostouter>

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
    </Video>



    </Mostouter>


  );
}

export default Profile;
