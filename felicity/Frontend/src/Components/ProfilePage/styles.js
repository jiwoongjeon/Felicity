import styled from "styled-components";
import default_profile from '../assets/default_profile.png'

export const ProfileContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: row;
align-items: flex-start;
background: white;
border-radius: 20px;
padding-left: 40px;
`

export const PictureContainer = styled.div`
width: 25%;
min-width:350px;
padding-top:20px;
display: flex;
flex-direction: column;
align-items: center;
`

export const InfoContainer = styled.div`
width: 70%;
padding-top:20px;
display: flex;
flex-direction: column;
align-items: flex-start;
`

export const PhotoArea = styled.div`
  width:300px;
  height:300px;
  border-radius: 30px;
  background-image: url(${props => props.img? props.img : default_profile });
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Divider = styled.div`
  height:100%;
  display:flex;
  background: #E3E8F0;
  margin-left:20px;
  margin-right:20px;
  padding: 1px;
  border-radius: 2px;
`;

export const Label = styled.p`
font-weight: bold;
text-align: left;
color: #0075ff;
font-size:20px;
`;

export const Content = styled.p`
  font-weight: bold;
  text-align: left;
  margin-bottom:50px;
`;