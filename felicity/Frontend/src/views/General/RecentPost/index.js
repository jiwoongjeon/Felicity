import React, { useEffect, useContext } from "react"
import { useState } from "react";
import Header from '../../Components/Header/Header';
import { Mostouter, Directory, User, Cat, List } from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import RecentPost from "./RecentPost";
import BoardDetail from "./BoardDetail";
import UserRedirect from "../../Components/UserRedirect";
import axios from "axios";
import API_URL from "../../../API/server-ip";

import { SocketContext } from "../../../API/video";

function RecentPostPage(props) {
    
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

  const [postload, setPostLoad] = useState(0);
  const [pageload, setPageLoad] = useState(0);

  const { sendComment, readComment, commentsLoad, setCommentsLoad } = useContext(SocketContext);

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
      GetPage(1, true)
  }

  function setToOldest() {
      setNewest(false)
      setOldest(true)
      GetPage(pages.last_page, false)
  }

  
  function IndexIncrement() {
    GetPage(((index + 1) * 5) + 1, newestSelect)
    setIndex(index + 1)
  }

  function IndexReduction() {
    GetPage(((index - 1) * 5) + 5, newestSelect)
    setIndex(index - 1)
  }

  function GetPage(page, order) {
    console.log(page)

    setPostLoad(0)
    setPageLoad(0)

    axios.post(`${API_URL}/read-post`, { targetPage: page, department: department})
      .then((response) => { 
        if (order) {
          setPosts(response.data.sort((a,b) => {
            return a.id < b.id ? 1 : -1
          }))
        }
        else {
          setPosts(response.data.sort((a,b) => {
            return a.id > b.id ? 1 : -1
          }))
        }
        setPostLoad(1)
      })

    axios.post(`${API_URL}/post-page`, {department: department})
      .then((response) => {
        // console.log(response.data)
        setPages({
          current_page: page,
          last_page: response.data
        })
        if (page % 5) {
          setIndex((page - (page % 5)) / 5)
        }
        else {
          setIndex(page / 5 - 1)
        }
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
        console.log(response.data)
        setPages({
          current_page: 1,
          last_page: response.data
        })
        setPageLoad(1)
      })}, [])

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
        pageload={pageload} postload={postload} setPageLoad={setPageLoad} setPostLoad={setPostLoad} setBoard={setBoard} setIsBoard={setIsBoard}
        isDoctor={props.isDoctor}/>}

        {isBoard && <BoardDetail 
          data={board}
          setIsBoard={setIsBoard}
          isDoctor={props.isDoctor}
          sendComment={sendComment}
          GetPage={GetPage}
          readComment={readComment}
          page={pages.current_page}
          commentsLoad={commentsLoad}
          setCommentsLoad={setCommentsLoad}
        />}
    </List>

    </Mostouter>

  );
}

export default RecentPostPage;