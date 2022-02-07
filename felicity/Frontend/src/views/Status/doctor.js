import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter,Cat,List,Directory,User} from './layout';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import RecentPost from "../../Components/RecentPost";

function StatusDoctor() {
  return (
    <Mostouter>

    <Cat>
      <Header isDoctor={true}/>
    </Cat>
    <Directory>
    <Path directory="Recent Post"/>
    </Directory>

    <User>
        <Login />
    </User>

    <List>
        <RecentPost />
    </List>

    </Mostouter>

  );
}

export default StatusDoctor;