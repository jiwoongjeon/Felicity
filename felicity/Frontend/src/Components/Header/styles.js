import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const ActiveButton = styled.div`
height:23%;
width:88%;
background: #ffffff;
border-radius: 15px;
margin-top: 139px;
margin-left: 19px;
padding-top: 10px;
font-weight: bold;
text-align: center;
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

