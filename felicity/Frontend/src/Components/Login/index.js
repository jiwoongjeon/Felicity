import React from "react";

import { IoMdSettings, IoIosNotifications, IoMdSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { SocketContext } from "../../API/video"
import {IconContext} from "react-icons"


import {
MainContainer,
Account,
AccountIcon,
Setting,
Noti,
} from "./styles";

const Login = () => {

  function sessionClose () { //stores items in sessionStorage
    window.sessionStorage.clear();
    document.location.href = '/';
  }

  return (
  <MainContainer>

    <Account onClick={sessionClose}>
        <AccountIcon> <IoPerson style={{color: '#718096', fontSize: '15px'}} />Log Out</AccountIcon>
    </Account>

    {/* <Setting><IoMdSettings style={{color: '#718096', fontSize: '20px'}}/></Setting>
    <Noti><IoIosNotifications style={{color: '#718096', fontSize: '20px'}}/></Noti> */}

  </MainContainer>

  );
};

export default Login;