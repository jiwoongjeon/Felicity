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
    <Header />
    </Cat>
    <Directory>
    <Path />
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