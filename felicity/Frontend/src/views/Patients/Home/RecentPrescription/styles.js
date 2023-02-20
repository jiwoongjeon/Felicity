import styled from "styled-components";
import default_profile from '../../../Components/assets/default_profile.png'
import { Link } from "react-router-dom";

export const PrescriptionContainer = styled.div`
width:100%;
height:600px;
flex-direction: column;
align-items: flex-start;
padding: 10px;
background: #ffffff;
border-radius: 20px;
box-shadow: 0px 4px 5px 0px #EDEEEF;

`;

export const Header = styled.div`
width: 95%;
margin:20px;
display: flex;
flex-direction: row;
align-items: flex-start;
`

export const Footer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: flex-start;
`

export const HeaderText = styled.div `
flex:1;
font-size:20px;
text-align:left;
`

export const ViewAll = styled.div`
flex:1;
margin-top: 5px;
color: #ff8011;
font-weight:bold;
text-align:right;
`;

export const PrescriptionList = styled.div`
width: 95%;
height: 500px;
display:flex;
flex-direction:row;
gap: 20px;
margin-left: 40px;
overflow-x: scroll;
`;

export const PrescriptionElement = styled.div`
  min-width: 300px;
  height: 80%;
  display: flex;
  padding: 10px;
  border: 3px;
  margin-right: 5px;
  flex-direction: column;
  background-color: #F9F9F9;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Image_Medicine = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 10px;
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Date = styled.div`
font-size:14px;
color: rgba(156, 163, 175);
height: 100%;
display: flex;
align-items: center;
`

export const Id = styled.div`
text-align:center;
margin-top:5px;
font-size:12px;
`


export const Detail = styled.div`
height:40%;
text-align:left;
margin-top:5%;
margin-left:5%;
color: rgba(156, 163, 175);
overflow-y: scroll;
background-color: white;
border-radius: 10px;
padding: 5px;
`

export const Doctor = styled.div`
height:120%;
width:20%;
background-image:  url(${props => props.img? props.img : default_profile });
background-position: center;
background-repeat: no-repeat;
background-size: cover;
border-radius: 40px;
`

export const ViewAllButton = styled(Link)`
  height:7%;
  width:40%;
  font-weight:bold;
  text-align:center;
  border:solid;
  border-width:2px;
  border-radius: 15px;
  font-weight: bold;
  color: #0075ff;
  font-size:14px;
  margin-top: 9%;
  align-self: center;
  justify-content: center;
  text-decoration:none;

`;

export const Column = styled.div`
  width:100%;
  padding: 5px;
  flex-direction: column;
`;

export const DepartmentContainer = styled.div`
  display: flex;
  justify-content: center;
  width:fit-content;;
  height: 100%;
  background-color: #0075ff;
  border-radius: 15px;
  color: white;
  align-items: center;
  font-size: 13px;
  padding: 7px;
  font-weight:


`;

export const PrescriptionText = styled.div`
  font-size: 25px;
  margin-top: 5%;

`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 7%;
  justify-content: space-between;
  align-items: center;
  margin-right: 1%;
  margin-top: 2%;
  margin-left: 3%;
`;

export const Line = styled.div`
  display: flex;
  align-self: center;
  border-bottom: 1px solid rgb(80, 80, 78);
  width: 70%;


`

export const DescriptionText = styled.div `
  font-weight:bold;
  font-size:15px;
  text-align:left;
  margin-left: 5%;
  margin-top: 5%;
`