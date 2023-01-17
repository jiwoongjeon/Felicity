import styled from "styled-components";
import { Link } from "react-router-dom";

export const HelpContainer = styled.div`
margin-right: 30px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
background: #ff8109;
border-radius: 20px;
box-shadow: 0px 4px 5px 0px #EDEEEF;
`;

export const Header = styled.div`
margin: 30px;
margin-top: 50px;
font-weight:bold;
font-size:20px;
color: white;
`

export const NowButton = styled(Link)`
height:23%;
width:88%;
background: #ffffff;
border-radius: 15px;
margin-top:0px;
margin-left: 30px;
padding-top: 10px;
font-weight: bold;
text-align: center;
color: black;
text-decoration:none;
`;