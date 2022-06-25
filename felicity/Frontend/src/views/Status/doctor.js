import React, { useEffect, useContext } from "react"
import { useState } from "react";
import Header from '../../Components/Header/Header';
import {Mostouter,Cat,List,Directory,User} from './layout';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import RecentPost from "../../Components/RecentPost";
import BoardDetail from "../../Components/BoardDetail";
import UserRedirect from "../UserRedirect";
import axios from "axios";
import API_URL from "../../API/server-ip";
import { BOARD_DATA, USER_DATA } from "./tempData";

import { SocketContext } from "../../API/video";

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

  const [department, setDepartment] = useState(0)

  const [index, setIndex] = useState(0);

  const [posts, setPosts] = useState(POST_DATA);
  const [pages, setPages] = useState(PAGE_DATA);
  const [board, setBoard] = useState([]);
  const [isBoard, setIsBoard] =useState(false);

  const [postload, setPostLoad] = useState();
  const [pageload, setPageLoad] = useState();

  const { sendComment } = useContext(SocketContext);

  function setToAll() {
      setAll(true)
      setEBin(false)
      setInternal(false)
      setOrthopedics(false)
      setUnknown(false)
      setPostLoad(0)
      setPageLoad(0)  
      setDepartment(0)
      axios.post(`${API_URL}/read-post`, { targetPage: pages.current_page, department: 0})
      .then((response) => {
        setPosts(response.data)
        setPostLoad(1)
      })
      axios.post(`${API_URL}/post-page`, { department: 0 })
      .then((response) => {
        setPages({
          current_page: 1,
          last_page: response.data
        })
        setPageLoad(1)
      })

  }

  function setToEBin() {
      setAll(false)
      setEBin(true)
      setInternal(false)
      setOrthopedics(false)
      setUnknown(false)
      setPostLoad(0)
      setPageLoad(0)  
      setDepartment(3)
      axios.post(`${API_URL}/read-post`, { targetPage: pages.current_page, department: 3})
      .then((response) => {
        setPosts(response.data)
        setPostLoad(1)
      })
      axios.post(`${API_URL}/post-page`, { department: 3 })
      .then((response) => {
        setPages({
          current_page: 1,
          last_page: response.data
        })
        setPageLoad(1)
      })

      // setPosts(POST_DATA.filter(post => post.category === "Ear"))
  }

  function setToInternal() {
      setAll(false)
      setEBin(false)
      setInternal(true)
      setOrthopedics(false)
      setUnknown(false)
      setPostLoad(0)
      setPageLoad(0)  
      setDepartment(2)
      axios.post(`${API_URL}/read-post`, { targetPage: pages.current_page, department: 2})
      .then((response) => {
        setPosts(response.data)
        setPostLoad(1)
      })
      axios.post(`${API_URL}/post-page`, { department: 2 })
      .then((response) => {
        setPages({
          current_page: 1,
          last_page: response.data
        })
        setPageLoad(1)
      })

      // setPosts(POST_DATA.filter(post => post.category === "Internal"))
  }

  function setToOrthopedics() {
      setAll(false)
      setEBin(false)
      setInternal(false)
      setOrthopedics(true)
      setUnknown(false)
      setPostLoad(0)
      setPageLoad(0)  
      setDepartment(4)
      axios.post(`${API_URL}/read-post`, { targetPage: pages.current_page, department: 4})
      .then((response) => {
        setPosts(response.data)
        setPostLoad(1)
      })
      axios.post(`${API_URL}/post-page`, { department: 4 })
      .then((response) => {
        setPages({
          current_page: 1,
          last_page: response.data
        })
        setPageLoad(1)
      })

      // setPosts(POST_DATA.filter(post => post.category === "Ortho"))
  }

  function setToUnknown() {
      setAll(false)
      setEBin(false)
      setInternal(false)
      setOrthopedics(false)
      setUnknown(true)
      setPostLoad(0)
      setPageLoad(0)  
      setDepartment(1)
      axios.post(`${API_URL}/read-post`, { targetPage: pages.current_page, department: 1})
      .then((response) => {
        setPosts(response.data)
        setPostLoad(1)
      })
      axios.post(`${API_URL}/post-page`, { department: 1 })
      .then((response) => {
        setPages({
          current_page: 1,
          last_page: response.data
        })
        setPageLoad(1)
      })

      // setPosts(POST_DATA.filter(post => post.category === "Unknown"))
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

    axios.post(`${API_URL}/read-post`, { targetPage: page, department: department})
      .then((response) => {
        setPosts(response.data)
        setPostLoad(1)
      })

    axios.post(`${API_URL}/post-page`, {department: department})
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
    axios.post(`${API_URL}/post-page`, {department: 0})
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
        {!isBoard && <RecentPost
        setToAll={setToAll} setToEBin={setToEBin} setToInternal={setToInternal} setToOrthopedics={setToOrthopedics}
        setToNewest={setToNewest} setToOldest={setToOldest} setToUnknown={setToUnknown}
        allSelect={allSelect} internalSelect={internalSelect} EBinSelect={EBinSelect} orthopedicsSelect={orthopedicsSelect} 
        newestSelect={newestSelect} oldestSelect={oldestSelect} unknownSelect={unknownSelect}
        postData={posts} pageData={pages} index={index} setIndex={setIndex} GetPage={GetPage}
        IndexIncrement={IndexIncrement} IndexReduction={IndexReduction}
        pageload={pageload} postload={postload} setBoard={setBoard} setIsBoard={setIsBoard}
        isDoctor={props.isDoctor}/>}

        {isBoard && <BoardDetail 
          data={board}
          setIsBoard={setIsBoard}
          isDoctor={props.isDoctor}
          sendComment={sendComment}
        />}
    </List>

    </Mostouter>

  );
}

export default StatusDoctor;