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

function Checklist() {
  return (

    <Mostouter>

    <Cat>
         <Header />
    </Cat>

    <Directory>
        <Path />
    </Directory>

    <User>
        <Login />
    </User>


    <Video>
        <ContentLayout>
          <Checklists />
        </ContentLayout>
    </Video>

    </Mostouter>

  );
}

export default Checklist;