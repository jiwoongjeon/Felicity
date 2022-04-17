import styled from "styled-components";
import { Link } from "react-router-dom";

export const NewAppContainer = styled.div`
width: 100%;
min-width: 750px;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
background: white;
border-radius: 20px;
padding-left: 40px;
`

export const Header = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  margin-top:3%;
  margin-bottom:2%;
`;

export const Column = styled.div`
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const  ColumnBottom = styled.div`
  width:100%;  
  display:flex;
  justify-content: right;
  flex-direction: row;
  margin-top: 20px;
`;

export const AppDetailContainer = styled.div`
width: 95%;
height: 100%;
display: flex;
flex-direction: Column;
align-items: flex-start;
background: white;
border-radius: 20px;
padding-left: 20px;

`;

export const DoctorContainer = styled.div`
width: 55%;
min-width:
height: 100%;
display: flex;
flex-direction: Column;
align-items: flex-start;
background: white;
border-radius: 20px;
padding-left: 20px;
white-space: nowrap;
`;

export const Divider = styled.div`
  width:100%;
  display:flex;
  background: #E3E8F0;
  margin-top: 20px;
  padding: 1px;
  border-radius: 2px;
`;

export const DetailLabelTop = styled.p`
font-weight: bold;
text-align: left;
color: #4A5568;
`;

export const DetailLabel = styled.p`
margin-top:40px;
font-weight: bold;
text-align: left;
color: #4A5568;
white-space: nowrap;
`;

export const DetailLabelColon = styled.div`
text-align:center;
padding: 7px 0px 7px 0px;
font-weight: bold;
color: #718096; 
margin-top: 7px;
margin-left: 20px;
margin-right: 20px;
white-space: nowrap;
`;

export const DoctorDropboxWrap = styled.div`
text-align:center;
border: 1px solid #0075FF;
border-radius: 10px;
padding: 7px 25px 7px 25px;
font-weight: bold;
color: #0075FF; 
margin-top:44px;
margin-left: 20px;
margin-bottom:6px;
white-space: nowrap;
`

export const SymptomsContainer = styled.div`
width: 660px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

export const SymptomsBubble = styled.div`
width:155px;
height:30px;
text-align:center;
background: #0075ff;
border-radius: 8px;
padding-top: 2px;
padding-bottom: 2px;
padding-left: 15px;
padding-right: 15px;
margin-right: 10px;
margin-bottom: 10px;
font-weight: bold;
color: white;
`;

export const SymptomsBubbleUnchecked = styled.div`
width:155px;
height:30px;
text-align:center;
background: white;
border: 1px solid #718096;
border-radius: 8px;
padding-top: 2px;
padding-bottom: 2px;
padding-left: 15px;
padding-right: 15px;
margin-right: 10px;
margin-bottom: 10px;
font-weight: bold;
color: #718096;
`;

export const OtherBox = styled.div`
width: 650px;
height: 40px;
border: 0.5px solid #E2E8F0;
padding-top:5px;
padding-left:20px;
box-sizing: border-box;
border-radius:15px;
display: flex;
flex-direction: row;
align-items: flex-start;
background-color: white;
`;

export const SubmitBtn = styled(Link)`
    width: 200px;
    height: 50px;
    background-color: #FF800B;
    border-radius: 20px;
    padding-top: 10px;
    margin-bottom:40px;
    border: 0;
    outline: 0;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-decoration:none;
    &:hover {
      color: white;
      background-color: #FF902A  ;
    }
    &:active {
      color: white;
      background-color: #E97204;
    }
`;