import styled from "styled-components";

export const ProfileContainer = styled.div`
width: 600px;
height: 800px;
display: flex;
flex-direction: column;
align-items: flex-start;
background: white;
border-radius: 50px;
padding-left: 40px;
box-shadow: 0px 4px 5px 0px #EDEEEF;
`

export const PictureContainer = styled.div`
width: 25%;
min-width:350px;
padding-top:20px;
display: flex;
flex-direction: column;
align-items: center;
`
export const Header = styled.div`
display: flex;
justify-content: space-between;
`
export const InfoContainer = styled.div`
width: 70%;
padding-top:20px;
display: flex;
flex-direction: column;
align-items: flex-start;
border-radius: 50px;
`

export const Language = styled.div`
width: 100%;
height: 3%;
display: flex;
flex-direction: column;
align-items: center;
`

export const LangLabel = styled.div`
display: flex;
width: 100px;
height: 30px;
align-self: center;
background: blue;
border-radius: 20px;
margin-top: 100%;
border: 0;
outline: 0;
color: white;
font-style: normal;
font-weight: bold;
font-size: 100%;
font-family: Roboto;
text-decoration:none;


align-items: center;
justify-content: center;
margin-bottom: 1%;
`


export const PhotoArea = styled.div`
  width:100px;
  height:100px;
  border-radius: 30px;
  color: blue;
`
export const EducationBox = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  allign-self: center;
  color: blue;
`
export const Divider = styled.div`
  
  width: 130%;
  height: 0px;
  border: 0.5px solid rgba(0, 0, 0, 0.15);
`;

export const PatientLabel = styled.p`
font-weight: bold;
text-align: left;
color: black;
font-size: 200%;
margin-top 5%;
white-space: nowrap;
`;

export const DoctorLabel = styled.p`
font-weight: bold;
text-align: left;
color: black;
font-size: 20px;
margin-top: 10%;
`;

export const DoctorLabel2 = styled.p`
font-weight: bold;
text-align: left;
color: black;
font-size: 20px;
margin-top: 20%;
`;

export const Content = styled.p`
  margin-top: 3%;
  font-weight: bold;
  font-size: 150%;
  text-align: left;
  margin-bottom:50px;
`;

export const TimeButton = styled.div`
    width: 25%;
    height: 50px;
    allign-self: left;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FF800B;
    border-radius: 20px;
    border: 0;
    outline: 0;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 100%;
    &:hover {
      color: white;
      background-color: #FF902A  ;
    }
    &:active {
      color: white;
      background-color: #E97204;
    }
    
`;

export const DeleteButton = styled.div`
    width: 200px;
    height: 50px;
    background-color: #FF800B;
    margin-top:10px;
    border-radius: 20px;
    padding-top: 10px;
    border: 0;
    outline: 0;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    &:hover {
      color: white;
      background-color: #FF902A  ;
    }
    &:active {
      color: white;
      background-color: #E97204;
    }
`;

export const Button = styled.div`
  width: 20%;
  height: 5%;
  align-self: flex-end;
  background: blue;
  border-radius: 20px;
  padding-top: 5px;
  margin-top: 7%;
  border: 0;
  outline: 0;
  color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-decoration:none;
  &:hover {
    color: white;
    background-color: #3D7EFF;
  }
  &:active {
    color: white;
    background-color: #004FEB;
  }
  margin-right: 10%;
`

export const Row = styled.div`
`