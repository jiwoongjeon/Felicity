import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import { ContentLayout } from "./layout";
import Checklists from "./MHTrev";
import UserRedirect from "../../Components/UserRedirect";

function ChecklistPage(props) {
  
  const jwt = JSON.parse(sessionStorage.getItem("jwt"))
  
  return (

    <Mostouter>
      {!jwt &&<UserRedirect isRole={!props.isDoctor}/>}

    <Cat>
      <Header isDoctor={props.isDoctor}/>
    </Cat>

    <Directory>
        <Path directory="Checklist"/>
    </Directory>

    <User>
        <Login />
    </User>


    <Video>
        <ContentLayout>
          <Checklists isDoctor={props.isDoctor}/>
        </ContentLayout>
    </Video>

    </Mostouter>

  );
}

export default ChecklistPage;