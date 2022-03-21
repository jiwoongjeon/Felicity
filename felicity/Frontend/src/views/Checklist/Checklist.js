import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import {
    ContentLayout,
} from "./layout";
import RecentPost from "../../Components/RecentPost";
import Checklists from "../../Components/Checklists";
import { propTypes } from "react-bootstrap/esm/Image";
import UserRedirect from "../UserRedirect";

function Checklist(props) {
  return (

    <Mostouter>
      <UserRedirect isRole={!props.isDoctor}/>

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

export default Checklist;