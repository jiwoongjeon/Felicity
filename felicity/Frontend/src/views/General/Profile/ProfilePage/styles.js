import styled from "styled-components";
import default_profile from '../../../Components/assets/default_profile.png'

export const ProfileContainer = styled.div`
width: 600px;
height: 800px;
display: flex;
flex-direction: column;
align-items: flex-start;
background: white;
border-radius: 50px;
allign-self: center;
padding-left:50px;
padding-right:50px;
box-shadow: 0px 4px 5px 0px #EDEEEF;

`

export const PictureContainer = styled.div`
width: 25%;
min-width: 350px;
padding-top: 10%;
margin-top: 1%;
margin-bottom: 5%;
display: flex;
flex-direction: column;
align-items: center;
align-self: center;
color: black;
`

export const InfoContainer = styled.div`
width: 80%;
padding-top: 5%;
display: flex;
flex-direction: column;
align-self: center;
`

export const PhotoArea = styled.div`
width: 300px;
height: 300px;
border-radius: 50%;
background-image: url(${props => props.img? props.img : default_profile });
background-position: center;
background-repeat: no-repeat;
background-size: cover;
margin-bottom:10px;
margin-bottom:1%;
align-self: center;
`

export const Divider = styled.div`
width: 100%;
height: 0px;
margin-bottom:2%;
left: 580px;
top: 746px;
align-self: center;
border: 0.5px solid rgba(0, 0, 0, 0.15);
`;

export const Label = styled.p`
font-weight: bold;
text-align: left;
color: black;
font-size: 120%;
margin-bottom: 2%;
`;

export const Content = styled.p`
  font-weight: bold;
  text-align: left;
  margin-bottom:50px;
`;

export const TimeButton = styled.div`
    width: 200px;
    height: 50px;
    background-color: #FF800B;
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
  display: flex;
  width: 60px;
  height: 30px;
  align-self: flex-end;
  background: blue;
  border-radius: 20px;
  margin-top: 5%;
  border: 0;
  outline: 0;
  color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 100%;
  font-family: Roboto;
  text-decoration:none;
  &:hover {
    color: white;
    background-color: #3D7EFF;
  }
  &:active {
    color: white;
    background-color: #004FEB;
  }
  
  align-items: center;
  justify-content: center;
  `
  export const Button2 = styled.div`
  display: flex;
  width: 90px;
  height: 35px;
  align-self: flex-end;
  background: blue;
  border-radius: 20px;
  border: 0;
  outline: 0;
  color: white;
  font-style: normal;
  font-weight: bold;
  font-size: 90%;
  font-family: Roboto;
  text-decoration:none;
  &:hover {
    color: white;
    background-color: #3D7EFF;
  }
  &:active {
    color: white;
    background-color: #004FEB;
  }
  align-items: center;
  justify-content: center;
  margin-left: 2%;
  
  `
export const Bar = styled.div`
    display: flex;
    width: 100%;
    height: 30%;
    justify-content: space-between;
`

export const UserName = styled.div`
    font-size: 300%;
    color: black;
    
    align-self: center;
    font-weight: 600;
    `
export const Settings = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

`