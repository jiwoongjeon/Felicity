import styled from "styled-components";
import { Link } from "react-router-dom";
import default_profile from '../../../Components/assets/default_profile.png'

export const BoardContainer = styled.div`
width: 100%;
height: 100%;
min-width:500px;
display: flex;
flex-direction: column;
align-items: flex-start;
background: white;
border-radius: 20px;
box-shadow: 0px 4px 5px 0px #EDEEEF;
`;

export const ContentContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
background: white;
padding:20px;
padding-left:40px;
`;

export const BottomBoardContainer = styled.div`
width:100%;
display: flex;
flex-direction: row;
align-items: flex-start;
background: white;
padding-left:7%;
margin-bottom:5px;
`;


export const ContentSubContainer = styled.div`
width:100%;
display: flex;
flex-direction: column;
align-items: flex-start;
background: white;
padding-left:4%;
`;

export const Divider = styled.div`
  width:100%;
  display:flex;
  background: #E3E8F0;
  margin-bottom: 5px;
  padding: 1px;
  border-radius: 2px;
`;

export const Column = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
`;

export const Search = styled.div`
  min-width:170px;
  width: 25%;
  height: 40px;
  margin: 20px;
  margin-left: 60px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: white;
  border: 0.5px solid #E2E8F0;
  box-sizing: border-box;
  border-radius: 15px;
`;

export const SearchIcon = styled.div`
    width: 20px;
    height: 20px;
    border: none;
    outline: none;
    margin: 9px 9px 0 0;
    padding-left: 10px;
`;

export const SearchContent = styled.input.attrs({
    type: "text",
    placeholder: "Search Anything",

})`
    width: 100%;
    margin-top: 9px;
    font-size: 14px;
    border: none;
    outline: none;
`;

export const Title = styled.p`
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color:black;
`;   

export const PhotoArea = styled.div`
  width:60px;
  height:60px;
  min-width:60px;
  min-height:60px;
  border-radius: 40px;
  background-image: url(${props => props.img? props.img : default_profile });
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WrittenByLabel = styled.p`
  text-align: left;
  color:black;
`;   

export const WrittenBy = styled.p`
margin-top:-15px;  
margin-left: 10px;
text-align: left;
color:black;
`;   

export const State = styled.p`
  color: #A0AEC0;
  font-weight: bold;
  font-size:18px;
  margin-bottom:18px;
  white-space: nowrap;
`;

export const UnState = styled.p`
  color: #FF800B;
  font-weight: bold;
  font-size:18px;
  margin-bottom:18px;
  white-space: nowrap;
`;

export const Date = styled.p`
  color: #A0AEC0;
  font-size:18px;
  white-space: nowrap;
  margin-bottom:18px;
  text-align:left;
`;

export const DateComment = styled.p`
  flex:1;
  color: #A0AEC0;
  white-space: nowrap;
  text-align:right;
  margin-top: 10px;
  margin-left:10px;
`;

export const Content = styled.p`
width: 70%;
min-width:500px;
margin-top:50px;
margin-bottom:50px;
text-align:left;
white-space:pre-wrap;
`;

export const MHT = styled.p`
width: 70%;
min-width:500px;
text-align:left;
white-space:pre-wrap;
margin-bottom:16px;
`;

export const Comment = styled.p`
width: 70%;
margin-bottom:50px;
min-width:500px;
text-align:left;
white-space: nowrap;
`;

export const ReplyBtn = styled.div`
height:36px;
width:120px;
text-align:center;
border: 2px solid #0075FF;
border-radius: 8px;
margin-top:13px;
margin-left:20px;
padding-top: 3px;
font-weight: bold;
color: #0075FF;
cursor: pointer;
`;

export const Blank = styled.p`
margin-top:20px;
`
export const WrittenByBottom = styled.p`
flex:1;
margin-top:5px;
margin-bottom:5px;
margin-left: 30px;
text-align: left;
color:black;
white-space: nowrap;
`;   

export const TitleBottom = styled.p`
flex:10;
margin-top:5px;
margin-bottom:5px;
margin-left:3%;
text-align: left;
color:black;
white-space: nowrap;
`;   

export const DateBottom = styled.p`
flex:1;
margin-top:5px;
margin-bottom:5px;
margin-left:2%;
color: #A0AEC0;
white-space: nowrap;
`;

export const StateBottom = styled.p`
flex:4;
color: #A0AEC0;
font-weight: bold;
margin-top:5px;
margin-left:2%;
margin-bottom:5px;
white-space: nowrap;
`;

export const UnStateBottom = styled.p`
  flex:4;
  color: #FF800B;
  font-weight: bold;
  margin-top:5px;
  margin-left:2%;
  margin-bottom:5px;
  white-space: nowrap;
`;

export const WriteContainer = styled.div`
width: 100%;
height: 200px;
display: flex;
flex-direction: column;
border: 1px solid #0075FF;
border-radius: 8px;
margin-left:20px;
margin-top:10px;
padding-top: 3px;
font-weight: bold;
color: #0075FF;
box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.1)
`;

export const WriteSubContainer = styled.div`
width: 100%;
height: 100%;
padding-left:2%;
margin-top:10px;
overflow-y:hidden;
`;

export const ColumnTitle = styled.div`
  height:30px;
  display: flex;
  flex-direction: column;
  margin: 10px 0px 10px 30px;
  overflow-y:hidden;
`;

export const SubmitBtn = styled.div`
height:40px;
width:120px;
text-align:center;
background-color: #0075FF;
border-radius: 10px;
margin-top:13px;
margin-left:40px;
padding-top: 5px;
font-weight: bold;
color: white;
margin-bottom:1%;
cursor: pointer;
`;

export const BackButtom = styled.div`
height:40px;
width:120px;
text-align:center;
background-color: #0075FF;
border-radius: 10px;
margin-top:13px;
margin-left:40px;
padding-top: 5px;
font-weight: bold;
color: white;
margin-bottom:1%;
cursor: pointer;
`;


export const CancelBtn = styled.div`
height:40px;
width:120px;
text-align:center;
border: 1px solid #0075FF;
border-radius: 10px;
margin-top:13px;
margin-left:40px;
padding-top: 5px;
font-weight: bold;
color: #0075FF;
margin-bottom:1%;
cursor: pointer;
`;

export const SymptomsContainer = styled.div`
width:100%;
max-width:340px;
margin-top:10px;
margin-bottom:20px;
display: flex;
flex-direction: row;
overflow:hidden;
`;

export const SymptomsBubble = styled.div`
border-radius: 12px;
background-color: #FF800B;
color:white;
padding: 10px 20px 10px 20px;
margin-right: 10px;
font-weight: bold;
text-align:center;
height:36px;
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