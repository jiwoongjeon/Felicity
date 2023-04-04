import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostContainer = styled.div`
width:100%;
height:100%;
min-width: 850px;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 30px;
background: white;
border-radius: 20px;
box-shadow: 0px 4px 5px 0px #EDEEEF;
`;

export const Header = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-align: left;
  margin-bottom: 20px;
`;

export const PostElementContainer = styled.div`
width:100%;
height:70%;
margin-bottom:10px;
flex-direction: column;
overflow-y: auto;
&::-webkit-scrollbar {
  width: 0px;
}
`;

export const PostElement = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  text-decoration:none;
  align-items: center;
  cursor:pointer;
`;

export const ContentElement = styled.div`
  flex: ${props => props.content? 8 : 9 };
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const Column_alert = styled.div`
  width:100%;
  flex-direction: row;
  margin-top: 50px;
  text-align: center;
  font-weight: bold;
  color: #aaaaaa;
`;

export const ColumnBottom = styled.div`
  width:100%;
  display:flex;
  flex-direction: row;
  padding: 5px;
  justify-content: center;
`;

export const Divider = styled.div`
  width:100%;
  display: flex;
  background: #E3E8F0;
  margin-bottom: 5px;
  padding: 1px;
  border-radius: 2px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  flex-direction: row;
  overflow-x: auto;
  `;

export const CategoryBubble = styled.div`
display: flex;
margin-right: 20px;
font-size:18px;
font-weight: bold;
color: #A0AEC0;
white-space: nowrap;
cursor:pointer;
&:hover { color: #3D7EFF; }
&:active { color: #004FEB; }
`;

export const CategoryBubbleSelected = styled.div`
display: flex;
margin-right:20px;
font-size:18px;
font-weight: bold;
color: #0075FF;
white-space: nowrap;
cursor:pointer;
&:hover { color: #3D7EFF; }
&:active { color: #004FEB; }
`;

export const NewestLabel = styled.p`
  font-weight: bold;
  font-size:18px;
  margin-bottom:18px;
  color: #A0AEC0;
  margin-right: 20px;
  cursor:pointer;
  &:hover { color: #3D7EFF; }
  &:active { color: #004FEB; }
`;

export const OldestLabel = styled.p`
font-weight: bold;
font-size:18px;
margin-bottom:18px;
color: #A0AEC0;
cursor:pointer;
&:hover { color: #3D7EFF; }
&:active { color: #004FEB; }
`;

export const NewestLabelSelected = styled.p`
  font-weight: bold;
  color: #0075FF;
  font-size:18px;
  margin-bottom:18px;
  margin-right: 20px;
  cursor:pointer;
  &:hover { color: #3D7EFF; }
  &:active { color: #004FEB; }
`;

export const OldestLabelSelected = styled.p`
  font-weight: bold;
  font-size:18px;
  margin-bottom:18px;
  color: #0075FF;
  cursor:pointer;
  &:hover { color: #3D7EFF; }
  &:active { color: #004FEB; }
`;

export const DateLabel = styled.p`
  flex:2;
  margin-bottom:18px;
  font-weight: bold;
  color: #A0AEC0;
  `;
export const StateLabel = styled.p`
  flex: 1.5;
  margin-bottom:18px;
  margin-right: 17px;
  font-weight: bold;
  color: #A0AEC0;
`;
  
export const SymptomsContainer = styled.div`
width:100%;
display: flex;
align-items:center;
flex-direction: row;
margin-bottom: 10px;
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

export const NoneBubble = styled.div`
width:100px;
border-radius: 12px;
background-color: #A0AEC0;
color:white;
padding: 10px;
margin-right: 10px;
font-weight: bold;
text-align:center;
height:36px;
`;

export const Title = styled.p`
  margin-top: 18px;
  text-align: left;
  margin-bottom:16px;
  font-weight: bold;
  overflow-y: hidden;
  color:black;
`;

export const Content = styled.p`
  height: 50px;
  color: #A0AEC0;
  margin-bottom:16px;
  text-align: left;
  overflow-y: hidden;
`;
export const Date = styled.p`
  display:flex;
  flex: 2;
  font-weight: bold;
  white-space: wrap;
  justify-content: center;
  align-items: center;
`;
export const Id = styled.p`
  display:flex;
  flex: 1;
  color: #A0AEC0;
  font-weight: bold;
  white-space: wrap;
  justify-content: center;
  align-items: center;
  margin-left: 1%;
  margin-right: 1%;
`;
export const State = styled.p`
  display:flex;
  flex: 1.5;
  color: #A0AEC0;
  margin-right: 2%;
  font-weight: bold;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
`;

export const UnState = styled.p`
  display:flex;
  flex: 1.5;
  color: #FF800B;
  margin-right: 2%;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

export const Search = styled.div`
  min-width:170px;
  flex:1;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: white;
  border: 0.5px solid #E2E8F0;
  box-sizing: border-box;
  border-radius: 15px;
`;

export const WriteButton = styled(Link)`
  border-radius: 12px;
  background-color: #0075FF;
  color:white;
  padding: 10px 40px 10px 40px;
  margin-right: 10px;
  font-weight: bold;
  text-align:center;
  height:36px;
  text-decoration:none;
  justify-self:right;
  align-self:right;
  &:hover { background-color: #3D7EFF; }
  &:active { background-color: #004FEB; }
`;

export const PageContainer = styled.div`
  min-width:300px;
  flex-direction: row;
  box-sizing: border-box;
  border-radius: 15px;
  align-items:center;
  justify-content:center;
`;

export const PageNavigatorLabel = styled.p`
  min-width:80px;
  font-weight: bold;
  color: #0075FF;
  padding: 5px 0px 5px 0px;
  border-radius: 10px;
  margin-left:30px;
  margin-right:30px;
  cursor:pointer;
  &:hover { background-color: #3D7EFF; }
  &:active { background-color: #004FEB; }
`;

export const PageNumberContainer = styled.div`
  width:100%;
  min-width:50px;
  display:flex;
  flex-direction: row;
  justify-self:center;
  background-color: white;
  overflow-x:hidden;
  overflow-y:hidden;
`;

export const PageNumberLabel = styled.p`
  font-weight: bold;
  border-radius: 10px;
  color:white;
  background-color: #0075FF;
  padding:5px 13px 5px 13px;
  margin-left:10px;
  margin-right:10px;
  font-size:18px;
  cursor:pointer;
  &:hover { background-color: #3D7EFF; }
  &:active { background-color: #004FEB; }
`;

export const PageNumber = styled.p`
  font-weight: bold;
  border-radius: 9px;
  color:#A0AEC0;
  padding:5px 13px 5px 13px;
  margin-left:10px;
  margin-right:10px;
  cursor:pointer;
  font-size:18px;
  &:hover { color: white; background-color: #3D7EFF; }
  &:active { color: white; background-color: #004FEB; }
`;