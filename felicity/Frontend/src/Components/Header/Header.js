import React, { useContext, useState } from "react";
import needhelp from '../assets/needhelp_highres.png'
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
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";

import { SocketContext } from "../../api/video";

const { HelpContainer, ActiveButton, MenuButton } = require("./styles");


const Header = () => {

  //create initial menuCollapse state using useState hook
  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const { startCall, answerCall } = useContext(SocketContext);

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{"Felicity"}</p>
            </div>

          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={<FiHome />} >
                <MenuButton to={`/videocall`}>
                  See your patient
                </MenuButton>
              </MenuItem>
              <MenuItem icon={<FaList />}>Home
                <MenuButton to={`./Home`}></MenuButton>
              </MenuItem>
              <MenuItem icon={<FaRegHeart />}>Status
                <MenuButton to={`./Status`}></MenuButton>
              </MenuItem>
              <MenuItem icon={<RiPencilLine />}>My Checklist
                <MenuButton to={`./Checklist`}></MenuButton></MenuItem>
              <MenuItem icon={<BiCog />}>Profile</MenuItem>
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