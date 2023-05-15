import React, { useEffect, useContext, useState } from "react"
import { IoMdSettings, IoIosNotifications, IoMdSearch } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { SocketContext } from "../../../API/video"
import {IconContext} from "react-icons"
import { MainContainer, Account, AccountIcon, Setting, Noti, TranslateContainer } from "./styles";

const Login = () => {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  function sessionClose () { //stores items in sessionStorage
    window.sessionStorage.clear();
    document.location.href = '/';
    
  }

  return (
  <MainContainer>
    <TranslateContainer id="google_translate_element" />
    <Account onClick={sessionClose}>
      
        <AccountIcon> <IoPerson style={{color: '#0075FF', fontSize: '15px', marginRight: '5px'}} />Log Out</AccountIcon>
    
    </Account>

    {/* <Setting><IoMdSettings style={{color: '#718096', fontSize: '20px'}}/></Setting>
    <Noti><IoIosNotifications style={{color: '#718096', fontSize: '20px'}}/></Noti> */}

  </MainContainer>
  );
};

export default Login;