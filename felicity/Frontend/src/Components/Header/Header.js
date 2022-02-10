import React, { useState } from "react";
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
import { IoIosDocument, IoIosClipboard, IoMdPerson } from "react-icons/io";
import { MdFormatListBulleted } from "react-icons/md";

//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

const { HelpContainer, ActiveButton, MenuButton } = require("./styles");


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
              {/* small and big change using menucollapse state */}
              <img src={LogoImg} className='logo' alt='logo'></img>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">

              {props.isDoctor &&
                <MenuItem active={true} icon={<AiOutlinePlus />}>See your patient</MenuItem>}
              {!props.isDoctor &&
                <MenuItem active={true} icon={<AiOutlinePlus />} >See your doctor
                  {/*   <MenuButton to={`/MHT1`}></MenuButton></MenuItem>}*/}
                  <MenuButton to={"/Patient/videocall"}></MenuButton></MenuItem>}

              <MenuItem icon={<AiFillHome />}>Home
                <MenuButton to={`./Home`}></MenuButton>
              </MenuItem>
              <MenuItem icon={<AiOutlineBarChart />}>Status
                <MenuButton to={`./Status`}></MenuButton>
              </MenuItem>
              {!props.isDoctor &&
                <MenuItem icon={<MdFormatListBulleted />} >Recent Post
                  <MenuButton to={`./RecentPost`}></MenuButton></MenuItem>}
              <MenuItem icon={<IoIosDocument />}>My Checklist
                <MenuButton to={`./Checklist`}></MenuButton></MenuItem>
              <MenuItem icon={<IoMdPerson />}>Profile
                <MenuButton to={`./Profile`}></MenuButton></MenuItem>
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