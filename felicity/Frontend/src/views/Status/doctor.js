import React from "react"
import { useState } from "react";
import Header from '../../Components/Header/Header';
import {Mostouter,Cat,List,Directory,User} from './layout';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import RecentPost from "../../Components/RecentPost";
import { POST_DATA, PAGE_DATA } from "./tempData";
import UserRedirect from "../UserRedirect";

function StatusDoctor(props) {
    
  const jwt = JSON.parse(sessionStorage.getItem("jwt"))

  const [allSelect, setAll] = useState(true);
  const [internalSelect, setInternal] = useState(false);
  const [EBinSelect, setEBin] = useState(false);
  const [orthopedicsSelect, setOrthopedics] = useState(false);
  const [newestSelect, setNewest] = useState(true);
  const [oldestSelect, setOldest] = useState(false);

  const [index, setIndex] = useState(0);

  const [posts, setPosts] = useState(POST_DATA);
  const [pages, setPages] = useState(PAGE_DATA);


  function setToAll() {
      setAll(true)
      setEBin(false)
      setInternal(false)
      setOrthopedics(false)
      setPosts(POST_DATA)
  }

  function setToEBin() {
      setAll(false)
      setEBin(true)
      setInternal(false)
      setOrthopedics(false)
      setPosts(POST_DATA.filter(post => post.category === "Ear-Nose-And-Throat Department"))
  }

  function setToInternal() {
      setAll(false)
      setEBin(false)
      setInternal(true)
      setOrthopedics(false)
      setPosts(POST_DATA.filter(post => post.category === "Internal Medicine"))
  }

  function setToOrthopedics() {
      setAll(false)
      setEBin(false)
      setInternal(false)
      setOrthopedics(true)
      setPosts(POST_DATA.filter(post => post.category === "Orthopedics"))
  }

  function setToNewest() {
      setNewest(true)
      setOldest(false)
      setPosts(posts.sort((a,b) => {
          return a.id < b.id ? 1 : -1
      }))
  }

  function setToOldest() {
      setNewest(false)
      setOldest(true)
      setPosts(posts.sort((a,b) => {
        return a.id > b.id ? 1 : -1
    }))
  }

  
  function IndexIncrement() {
    setIndex(index + 1)
    // getPage((index * 5) + 1)
  }

  function IndexReduction() {
    setIndex(index - 1)
    // getPage((index * 5) + 5)
  }

  function GetPage(page) {
    console.log(page)
    /*
    Axios -> Receive posts data where...

    -------------------------------Case of Newest
    if (last_page > page)
    { 
        id = 
            {(last_page * 5) - ((page - 1) * 5)}
            ~ 
            {(last_page * 5) - (page * 5) + 1}
    }

    if (last_page == page)
    {
        id = 
            (last_page % 5)
            ~ 
            1
    }

    -------------------------------Case of Oldest
    if (last_page > page)
    { 
        id = 
            {(page - 1) * 5 + 1}
            ~ 
            {page * 5}
    }

    if (last_page == page)
    {
        id = 
            {(last_page - 1) * 5}
            ~
            end of data
    }
    */
    setPages(PAGE_DATA)
  }



  return (
    <Mostouter>
        {!jwt && <UserRedirect isRole={!props.isDoctor}/>}

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
        <RecentPost
        setToAll={setToAll} setToEBin={setToEBin} setToInternal={setToInternal} setToOrthopedics={setToOrthopedics}
        setToNewest={setToNewest} setToOldest={setToOldest}
        allSelect={allSelect} internalSelect={internalSelect} EBinSelect={EBinSelect} orthopedicsSelect={orthopedicsSelect} 
        newestSelect={newestSelect} oldestSelect={oldestSelect} 
        postData={posts} pageData={pages} index={index} setIndex={setIndex} GetPage={GetPage}
        IndexIncrement={IndexIncrement} IndexReduction={IndexReduction}

        isDoctor={props.isDoctor}/>
    </List>

    </Mostouter>

  );
}

export default StatusDoctor;