import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import needhelp from '../assets/needhelp_highres.png'
import LogoImg from '../assets/telep_logo_horizon.png';
//import react pro sidebar components
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

const { HelpContainer, MenuButton, ActiveButton } = require("./styles");


const Header = (props) => {

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <MenuButton to='./Home'>
                <img src={LogoImg} className='logo' alt='logo' width={170} />
              </MenuButton>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">

              {props.isDoctor &&
                <MenuItem active={true} icon={<AiOutlinePlus />}>Meet new patients
                  <MenuButton to={`./Meeting`}></MenuButton></MenuItem>}
              {!props.isDoctor &&
                <MenuItem active={true} icon={<AiOutlinePlus />} >See your doctor
                    <MenuButton to={`/MHT1`}></MenuButton></MenuItem>}

              <MenuItem icon={<AiFillHome />}> <NavLink to='./Home' activeStyle={{color: '#0075FF'}} >Home</NavLink>
      
              </MenuItem>
              <MenuItem icon={<AiOutlineBarChart />}><NavLink to='./Status' activeStyle={{color: '#0075FF'}} >Status</NavLink>

              </MenuItem>

              {!props.isDoctor &&
                <MenuItem icon={<MdFormatListBulleted />} ><NavLink to='./RecentPost' activeStyle={{color: '#0075FF'}} >Recent Post</NavLink>
                  </MenuItem>}
              <MenuItem icon={<IoIosDocument />}><NavLink to='./Checklist' activeStyle={{color: '#0075FF'}} >My Checklist</NavLink>
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
            <HelpContainer img={needhelp}>
              <ActiveButton>Active</ActiveButton>
            </HelpContainer>
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