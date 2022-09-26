import styled from "styled-components";
import { Link } from "react-router-dom";
import BadgeUnstyled, { badgeUnstyledClasses } from '@mui/base/BadgeUnstyled';

export const HelpContainer = styled.div`
width: 80%;
height: 200px;
display: flex;
flex-direction: column;
margin: 30px;
margin-right: 30px;
background-image: url(${props => props.img});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 15px;
`;

export const ActiveButton = styled(Link)`
height:23%;
width:88%;
background: #ffffff;
border-radius: 15px;
margin-top: 139px;
margin-left: 19px;
padding-top: 10px;
font-weight: bold;
text-align: center;
text-decoration:none;
color: black;
`;

export const MenuButton = styled(Link)`
    width: 100%;
    height: 100%;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    text-decoration:none;
    color:black;
`;

export const NavLink = styled(Link)`
    color: black;
`

export const StyledBadge = styled(BadgeUnstyled)`
box-sizing: border-box;
margin: -300px;
padding: 0;
top: 300px;
font-size: 14px;
list-style: none;
font-family: IBM Plex Sans, sans-serif;
position: relative;
display: inline-block;
line-height: 1;


& .${badgeUnstyledClasses.badge} {
  z-index: 1;
  min-width: 25px;
  height: 25px;
  padding: 0 0px;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  white-space: nowrap;
  text-align: center;
  background: #DF3E3F;
  border-radius: 30px;
  box-shadow: 0 0 0 0;
  position: absolute;
  top: 25px;
  right: -313px;
  transform: translate(50%, -50%);
  transform-origin: 100% 0;
}
`;

export const StyledBadge2 = styled(BadgeUnstyled)`
box-sizing: border-box;
margin: -300px;
padding: 5px;
top: 295px;
font-size: 14px;
list-style: none;
font-family: IBM Plex Sans, sans-serif;
position: relative;
display: inline-block;
line-height: 1;


& .${badgeUnstyledClasses.badge} {
  z-index: 1;
  min-width: 15px;
  height: 15px;
  padding: 0 0px;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  white-space: nowrap;
  text-align: center;
  background: #DF3E3F;
  border-radius: 30px;
  box-shadow: 0 0 0 0;
  position: absolute;
  top: 25px;
  right: -313px;
  transform: translate(50%, -50%);
  transform-origin: 100% 0;
}
`;

export const Divider = styled.div`
  width:100%;
  display: flex;
  background: #E3E8F0;
  margin-bottom: 5px;
  padding: 1px;
  border-radius: 2px;
`;