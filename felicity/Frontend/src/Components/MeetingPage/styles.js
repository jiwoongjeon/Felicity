import { Link } from "react-router-dom";
import styled from "styled-components";
import default_profile from '../assets/default_profile.png'

export const PostContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
padding-left: 20px;
padding-right: 30px;
background: white;
border-radius: 20px;
`;

export const Header = styled.p`
  padding-left: 20px;
  font-weight: bold;
  font-size: 18px;
  text-align: left;
  margin-top:20px;
`;

export const PostElementContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
overflow-y: auto;
&::-webkit-scrollbar {
  width: 10px;
}
`;

export const PostElement = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderColumn = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  vertical-align:center;
  padding: 5px;
`;

export const BodyColumn = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  vertical-align:center;
  padding: 5px;
`;

export const Divider = styled.div`
  display: flex;
  background: #E3E8F0;
  margin-bottom: 5px;
  padding: 1px;
  border-radius: 2px;
`;

export const NoLabel = styled.p`
  flex: 1.1;
  text-align:left;
  padding-left:35px;
  font-weight: bold;
  font-size: 12px;
  color: #a0aec0;
`;
export const PhotoLabel = styled.p`
  flex: 1;
  font-weight: bold;
  font-size: 12px;
  color: #a0aec0;
  text-align: left;
  margin-right:80px;
`;

export const DepartLabel = styled.p`
  flex: 3.2;
  text-align: left;
  font-weight: bold;
  font-size: 12px;
  color: #a0aec0;
`;
export const AvailLabel = styled.p`
  flex: 3;
  font-weight: bold;
  font-size: 12px;
  color: #a0aec0;
`;

export const AvailContainer = styled.div`
flex: 3;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

export const AvailBubble = styled(Link)`
height: 50px;
display: flex;
background-color: #0075ff;
border-radius: 8px;
padding-top: 2px;
padding-bottom: 2px;
padding-left: 15px;
padding-right: 15px;
margin-right: 10px;
font-weight: bold;
font-size:14px;
color: white;
line-height: 45px;
text-decoration:none;
border: none;
   &:hover {
      background-color: #268aff;
    }
text-decoration:none;
`;
export const UnavailableBubble = styled.div`
height:50px;
display: flex;
background-color: #a0aec0;
border-radius: 8px;
padding-top: 2px;
padding-bottom: 2px;
padding-left: 15px;
padding-right: 15px;
margin-right: 10px;
font-weight: bold;
color: white;
line-height: 45px;

`;

export const No = styled.p`
  flex: 0.3;
  line-height: 70px;
  padding-left:35px;
  text-align: left;
  margin-top: 4px;
  margin-right:5px;
  color: gray;
`;
export const PhotoArea = styled.div`
  width:65px;
  height:65px;
  min-width:65px;
  margin-top:5px;
  border-radius: 8px;
  background-image: url(${props => props.img? props.img : default_profile });
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Patient = styled.p`
  flex: 2;
  margin-left: 20px;
  text-align: left;
  font-weight: bold;
`;

export const TimeLabel = styled.p`
  flex: 4;
  text-align: left;
  font-weight: bold;
`;

export const LevelLabel = styled.p`
  flex: 4.8;
  text-align: left;
  font-weight: bold;
  margin-top:40px;
`;

export const Department = styled.p`
  font-weight: bold;
  text-align: left;
  color: grey;
  flex-wrap:wrap;
`;
export const Time = styled.p`
  margin-top:3px;
  margin-left:30px;
  font-weight: bold;
  text-align: left;
`;
export const Name = styled.p`
  margin-top:5px;
  font-weight: bold;
  text-align: left;
`;
export const SymptomsContainer = styled.div`
width:100%;
max-width:360px;
display: flex;
flex-direction: row;
margin-left: 25px;
overflow:hidden;
`;
export const SymptomsBubble = styled.div`
height:30px;
display: flex;
background: #0075ff;
border-radius: 8px;
padding-top: 2px;
padding-left: 15px;
padding-right: 15px;
margin-right: 10px;
font-weight: bold;
color: white;
`;