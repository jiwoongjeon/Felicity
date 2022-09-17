import React, { useState, useContext } from "react";
import { Badge, Stack} from "@mui/material";
import { styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";
import needhelp from '../assets/needhelp_highres.png'
import LogoImg from '../assets/telep_logo_horizon.png';
import {i, isEmpty} from '../MeetingPage';
import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled';
import Axios from "axios";
import API_URL from "../../API/server-ip";
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
import { SocketContext } from "../../API/video";
import { StyledBadge } from "./styles.js"


const { HelpContainer, MenuButton, ActiveButton } = require("./styles");


// const StyledBadge = styled(BadgeUnstyled)`
// box-sizing: border-box;
// margin: 0;
// padding: 0;
// font-size: 14px;
// list-style: none;
// font-family: IBM Plex Sans, sans-serif;
// position: relative;
// display: inline-block;
// line-height: 1;


// & .${badgeUnstyledClasses.badge} {
//   z-index: 1;
//   min-width: 25px;
//   height: 25px;
//   padding: 0 0px;
//   color: #fff;
//   font-weight: 400;
//   font-size: 15px;
//   line-height: 25px;
//   white-space: nowrap;
//   text-align: center;
//   background: #DF3E3F;
//   border-radius: 30px;
//   box-shadow: 0 0 0 0;
//   position: absolute;
//   top: 25px;
//   right: -313px;
//   transform: translate(50%, -50%);
//   transform-origin: 100% 0;
// }
// `;


function CheckCount(){
  const { count, setCount } = useContext(SocketContext);
 
  if (count >= 1){
    return true;
  }

  else{
    return false;
  }

  
}

function PutCount(){
  const { count, setCount } = useContext(SocketContext);
  return count;
}

export const Header = (props) => {

  
  const { count, setCount } = useContext(SocketContext);

 
  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };


  const jwt = JSON.parse(sessionStorage.getItem("jwt"))
    const show = JSON.parse(sessionStorage.getItem("show"))
    const [scheduleData, setScheduleData] = React.useState([])
    const [visible, setVisible] = useState(true)

    const { startCall, UTCToLocal } = useContext(SocketContext);


    // Axios.post(`${API_URL}/patient_schedule`, { "patient_id": jwt })
    //     .then((response) => {
    //         for (var i = 0; i < response.data.length; i++) {
    //             var [date, time] = UTCToLocal(response.data[i].reserved_date, response.data[i].reserved_time)
    //             response.data[i].reserved_date = date
    //             response.data[i].reserved_time = time
    //             count += 1;
    //             console.log(count)
    //         }
    //         setScheduleData(response.data)

    //     })

   

// if (scheduleData){
//   count += 1
// }

  return (
   
       
    <>

      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <MenuButton to='./Home'>
                <img src='/images/telep_logo_horizon.png' className='logo' alt='logo' width={170} />
              </MenuButton>
            </div>
          </SidebarHeader>

          {props.isDoctor &&
          <>
          {CheckCount &&
          <Stack spacing={4} direction="row">
             <StyledBadge badgeContent={PutCount()}/>
          </Stack>
          }
          </>
          }

          <SidebarContent>
          
            <Menu iconShape="square">

             
              {props.isDoctor &&
            
           
              
              
            
                <MenuItem active={true} icon={<AiOutlinePlus />}>Meet new patients  
                  
                  <MenuButton to={`./Meeting`}>
                  </MenuButton>          
                  
                  </MenuItem>
                  
                  }
                  
              {!props.isDoctor &&
                <MenuItem active={true} icon={<AiOutlinePlus />} >See your doctor
                    <MenuButton to={`/MHT1`}></MenuButton></MenuItem>}

              <MenuItem icon={<AiFillHome />}> <NavLink to='./Home' activeStyle={{color: '#0075FF'}} >Home</NavLink>
      
              </MenuItem>
              <MenuItem icon={<AiOutlineBarChart />}><NavLink to='./Status' activeStyle={{color: '#0075FF'}} >Board</NavLink>
                  
              </MenuItem>

              {!props.isDoctor &&
                <MenuItem icon={<MdFormatListBulleted />} ><NavLink to='./RecentPost' activeStyle={{color: '#0075FF'}} >Recent Post</NavLink>
                  </MenuItem>}
              <MenuItem icon={<IoIosDocument />}><NavLink to='./Checklist' activeStyle={{color: '#0075FF'}} >My Records</NavLink>
                </MenuItem>
              <MenuItem icon={<IoMdPerson />}><NavLink to='./Profile' activeStyle={{color: '#0075FF'}} >Profile</NavLink>      
                </MenuItem>

              {props.isDoctor &&
                <MenuItem icon={<IoIosChatboxes />}><NavLink to='./Patient-Conversation' activeStyle={{color: '#0075FF'}} >Patient Conversation</NavLink> 
                </MenuItem>}
              {props.isDoctor &&
                <MenuItem icon={<IoIosChatbubbles />}><NavLink to='./Doctor-Conversation' activeStyle={{color: '#0075FF'}} >Doctor Conversation</NavLink> 
                </MenuItem>}
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