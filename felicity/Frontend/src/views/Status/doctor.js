import React from "react"
import { useState } from "react";
import Header from '../../Components/Header/Header';
import {Mostouter,Cat,List,Directory,User} from './layout';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import RecentPost from "../../Components/RecentPost";
import { POST_DATA, PAGE_DATA } from "./tempData";

function StatusDoctor(props) {

  const [allSelect, setAll] = useState(true);
  const [internalSelect, setInternal] = useState(false);
  const [EBinSelect, setEBin] = useState(false);
  const [orthopedicsSelect, setOrthopedics] = useState(false);

  const [newestSelect, setNewest] = useState(true);
  const [oldestSelect, setOldest] = useState(false);

  function setToAll() {
      setAll(true)
      setEBin(false)
      setInternal(false)
      setOrthopedics(false)
  }

  function setToEBin() {
      setAll(false)
      setEBin(true)
      setInternal(false)
      setOrthopedics(false)
  }

  function setToInternal() {
      setAll(false)
      setEBin(false)
      setInternal(true)
      setOrthopedics(false)
  }

  function setToOrthopedics() {
      setAll(false)
      setEBin(false)
      setInternal(false)
      setOrthopedics(true)
  }

  function setToNewest() {
      setNewest(true)
      setOldest(false)
  }

  function setToOldest() {
      setNewest(false)
      setOldest(true)
  }



  return (
    <Mostouter>

    <Cat>
      <Header isDoctor={props.isDoctor}/>
    </Cat>
    <Directory>
    <Path directory="Recent Post"/>
    </Directory>

    <User>
        <Login />
    </User>

    <List>
        <RecentPost setToAll={setToAll} setToEBin={setToEBin} setToInternal={setToInternal} setToOrthopedics={setToOrthopedics}
        setToNewest={setToNewest} setToOldest={setToOldest}
        allSelect={allSelect} internalSelect={internalSelect} EBinSelect={EBinSelect} orthopedicsSelect={orthopedicsSelect} 
        newestSelect={newestSelect} oldestSelect={oldestSelect} 
        postData={POST_DATA} pageData={PAGE_DATA}/>
    </List>

    </Mostouter>

  );
}

export default StatusDoctor;