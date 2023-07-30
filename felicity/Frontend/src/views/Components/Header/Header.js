import React, { useState, useContext, useEffect } from "react";
import { Badge, Stack} from "@mui/material";
import { responsiveFontSizes, styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled';
import Axios from "axios";
import API_URL from "../../../API/server-ip";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { AiFillHome, AiOutlineBarChart, AiOutlinePlus } from "react-icons/ai";
import { IoIosDocument, IoIosClipboard, IoMdPerson, IoIosChatboxes, IoIosChatbubbles } from "react-icons/io";
import { MdFormatListBulleted } from "react-icons/md";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";
import { SocketContext } from "../../../API/video";
import { StyledBadge } from "./styles.js"

const { MenuButton} = require("./styles");

export const Header = (props) => {

  const { scheduleCount, setScheduleCount } = useContext(SocketContext);

  function Check() {
    const [Count, setCount] = React.useState(0);
    useEffect(() => {
      if (!scheduleCount) {
        setScheduleCount(true)
        Axios.get(`${API_URL}/read_schedule`)
            .then((response) => {
                setCount(response.data.length)
            })
        setScheduleCount(false)
      }
    })
    if (Count == 0) {
      return "0"
    }
    else {
      return Count
    }
  }

  return (
    <>
      <div id="header">
        <ProSidebar collapsed={false}>
          <SidebarHeader>
            <div className="logotext">
              <MenuButton to='./Home'>
                <img src='/images/telep_logo_horizon.png' className='logo' alt='logo' width={170} />
              </MenuButton>
            </div>
          </SidebarHeader>

          {props.isDoctor &&
            <Stack spacing={4} direction="row">
              <StyledBadge badgeContent={Check()}/>
            </Stack> 
          }

          <SidebarContent>
            <Menu iconShape="square">

              {props.isDoctor &&
                <MenuItem active={true} icon={<AiOutlinePlus />}>Meet new patients<MenuButton to={`./Meeting`}></MenuButton></MenuItem>}
                  
              {!props.isDoctor &&
                <MenuItem active={true} icon={<AiOutlinePlus />} >See your doctor<MenuButton to={`/MHT1`}></MenuButton></MenuItem>   }
              
              <MenuItem icon={<AiFillHome />}> <NavLink to='./Home' activeStyle={{color: '#0075FF'}} >Home</NavLink></MenuItem>
              
              {!props.isDoctor &&
                <MenuItem icon={<AiOutlineBarChart />}><NavLink to='./DoctorList' activeStyle={{color: '#0075FF'}} >Doctors List</NavLink></MenuItem>}
              
              <MenuItem icon={<MdFormatListBulleted />} ><NavLink to='./RecentPost' activeStyle={{color: '#0075FF'}} >Recent Post</NavLink></MenuItem>

              {!props.isDoctor &&
                <MenuItem icon={<IoIosDocument />}><NavLink to='./Checklist' activeStyle={{color: '#0075FF'}} >My Records</NavLink></MenuItem>}
              
              <MenuItem icon={<IoMdPerson />}><NavLink to='./Profile' activeStyle={{color: '#0075FF'}} >Profile</NavLink></MenuItem>

              {props.isDoctor &&
              <>
                <MenuItem icon={<IoIosChatboxes />}><NavLink to='./Patient-Conversation' activeStyle={{color: '#0075FF'}} >Patient Conversation</NavLink></MenuItem>
                <MenuItem icon={<IoIosChatbubbles />}><NavLink to='./Doctor-Conversation' activeStyle={{color: '#0075FF'}} >Doctor Conversation</NavLink></MenuItem>
              </>}

            </Menu>

          </SidebarContent>
      
          <SidebarFooter>
            {/* <HelpContainer img={needhelp}>
              <ActiveButton>Active</ActiveButton>
            </HelpContainer> */}
            {/*<img  src={needhelp} alt=""/>*/}
            {/* <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu> */}
          </SidebarFooter>
          
        </ProSidebar>
      </div>

      
    </>
    
  );
};

export default Header;