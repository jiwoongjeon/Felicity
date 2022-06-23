import React, { useEffect } from "react"
import { useState } from "react";
import Header from '../../Components/Header/Header';
import {Mostouter,Cat,List,Directory,User} from './layout';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import RecentPost from "../../Components/RecentPost";
//import { POST_DATA, PAGE_DATA } from "./tempData";
import UserRedirect from "../UserRedirect";
import axios from "axios";
import API_URL from "../../API/server-ip";

function StatusDoctor(props) {
    
  const jwt = JSON.parse(sessionStorage.getItem("jwt"))

  let POST_DATA = {};
  let PAGE_DATA = {};

  const [allSelect, setAll] = useState(true);
  const [internalSelect, setInternal] = useState(false);
  const [EBinSelect, setEBin] = useState(false);
  const [orthopedicsSelect, setOrthopedics] = useState(false);
  const [unknownSelect, setUnknown] = useState(false);
  const [newestSelect, setNewest] = useState(true);
  const [oldestSelect, setOldest] = useState(false);

  const [index, setIndex] = useState(0);

  const [posts, setPosts] = useState(POST_DATA);
  const [pages, setPages] = useState(PAGE_DATA);

  const [postload, setPostLoad] = useState();
  const [pageload, setPageLoad] = useState();

  function setToAll() {
      setAll(true)
      setEBin(false)
      setInternal(false)
      setOrthopedics(false)
      setUnknown(false)
      setPosts(POST_DATA)
  }

  function setToEBin() {
      setAll(false)
      setEBin(true)
      setInternal(false)
      setOrthopedics(false)
      setUnknown(false)
      setPosts(POST_DATA.filter(post => post.category === "Ear-Nose-And-Throat Department"))
  }

  function setToInternal() {
      setAll(false)
      setEBin(false)
      setInternal(true)
      setOrthopedics(false)
      setUnknown(false)
      setPosts(POST_DATA.filter(post => post.category === "Internal Medicine"))
  }

  function setToOrthopedics() {
      setAll(false)
      setEBin(false)
      setInternal(false)
      setOrthopedics(true)
      setUnknown(false)
      setPosts(POST_DATA.filter(post => post.category === "Orthopedics"))
  }

  function setToUnknown() {
      setAll(false)
      setEBin(false)
      setInternal(false)
      setOrthopedics(false)
      setUnknown(true)
      setPosts(POST_DATA.filter(post => post.category === "Unknown"))
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
    GetPage(((index + 1) * 5) + 1)
    setIndex(index + 1)
  }

  function IndexReduction() {
    GetPage(((index - 1) * 5) + 5)
    setIndex(index - 1)
  }

  function GetPage(page) {
    console.log(page)

    setPostLoad(0)
    setPageLoad(0)

    axios.post(`${API_URL}/read-post`, { targetPage: page, department: 0})
      .then((response) => {
        POST_DATA = response.data
        setToAll()
        setPostLoad(1)
      })

    axios.get(`${API_URL}/post-page`)
      .then((response) => {
        // console.log(response.data)
        setPages({
          current_page: page,
          last_page: response.data
        })
        setPageLoad(1)
      })
  }

  useEffect(() => {
    axios.post(`${API_URL}/read-post`, { targetPage: 1, department: 0})
      .then((response) => {
        setPosts(response.data)
        POST_DATA = response.data
        console.log(POST_DATA)
        setPostLoad(1)
      })
    axios.get(`${API_URL}/post-page`)
      .then((response) => {
        // console.log(response.data)
        setPages({
          current_page: 1,
          last_page: response.data
        })
        setPageLoad(1)
      })
  }, [])


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
        setToNewest={setToNewest} setToOldest={setToOldest} setToUnknown={setToUnknown}
        allSelect={allSelect} internalSelect={internalSelect} EBinSelect={EBinSelect} orthopedicsSelect={orthopedicsSelect} 
        newestSelect={newestSelect} oldestSelect={oldestSelect} unknownSelect={unknownSelect}
        postData={posts} pageData={pages} index={index} setIndex={setIndex} GetPage={GetPage}
        IndexIncrement={IndexIncrement} IndexReduction={IndexReduction}
        pageload={pageload} postload={postload}

        isDoctor={props.isDoctor}/>
    </List>

    </Mostouter>

  );
}

export default StatusDoctor;