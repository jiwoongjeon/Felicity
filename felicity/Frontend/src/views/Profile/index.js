import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';
import { ProfilePage } from "../../Components/ProfilePage";
import UserRedirect from "../UserRedirect";


function Profile(props) {

  return (

    <Mostouter>
      <UserRedirect isRole={!props.isDoctor}/>
      
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
      <ProfilePage name="Justin Lee" email="justin212553@gmail.com"/>
    </Video>



    </Mostouter>


  );
}

export default Profile;
