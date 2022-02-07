import styled from "styled-components";
import { Link } from "react-router-dom";

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
height: 80%;
display: flex;
flex-direction: column;
overflow-y: auto;
`;

export const PostElement = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration:none;
`;

export const ContentElement = styled.div`
  flex: 10;
  display: flex;
  margin-left: 1%;
  flex-direction: column;
`;

export const Column = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  padding: 5px;
`;

export const ColumnBottom = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  padding: 5px;
  justify-content:space-between;
  flex-wrap: wrap;
`;

export const Divider = styled.div`
  display: flex;
  background: #E3E8F0;
  margin-bottom: 5px;
  padding: 1px;
  border-radius: 2px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  height: 70px;
  width: 100%;
  background: #F7F9FC;
  flex-direction: row;
  padding-left: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  justifyContent: center;
  alignItems: center;
  overflow-x: auto;
  `;

export const CategoryBubble = styled.div`
display: flex;
border-radius: 20px;
margin-top: 1.3%;
margin-left: 25px;
margin-right: 25px;
font-weight: 1000;
color: #4A5568;
white-space: nowrap;
&:hover {
  color: #0457f9;
}
&:active {
  color: #004FEB;
}
`;

export const NewestLabel = styled.p`
  font-weight: bold;
  color: #a0aec0;
  margin-right: 10px;
`;
export const OldestLabel = styled.p`
  font-weight: bold;
  color: #a0aec0;
`;
export const DateLabel = styled.p`
  flex:2;
  margin-top: 4px;
  font-weight: bold;
  color: #a0aec0;
  `;
export const StateLabel = styled.p`
  flex: 1.5;
  margin-top: 4px;
  margin-right: 2%;
  font-weight: bold;
  color: #a0aec0;
`;
  
export const SymptomsContainer = styled.div`
height: 200px;
flex: 7;
display: flex;
flex-direction: row;
margin-bottom: 10px;
`;

export const SymptomsBubble = styled.div`
height:100%;
display: flex;
border: 2px solid #CBD5E0;
border-radius: 8px;
padding-top: 1px;
padding-bottom: 1px;
padding-left: 15px;
padding-right: 15px;
margin-right: 10px;
font-weight: bold;
color: #0047D2;
`;
export const Title = styled.p`
  max-height: 25px;
  margin-top: 10px;
  text-align: left;
  font-weight: bold;
  overflow-y: hidden;
  color:black;
`;

export const Content = styled.p`
  max-height: 50px;
  color: #a0aec0;
  text-align: left;
  overflow-y: hidden;
`;
export const Date = styled.p`
  flex: 2;
  color: #718096;
  margin-top: 60px;
  font-weight: bold;
  white-space: nowrap;
`;
export const State = styled.p`
  flex: 1.5;
  color: #718096;
  margin-top: 60px;
  margin-right: 2%;
  font-weight: bold;
  white-space: nowrap;
`;

export const UnState = styled.p`
  flex: 1.5;
  color: #FF800B;
  margin-top: 60px;
  margin-right: 2%;
  font-weight: bold;
`;

export const Search = styled.div`
  min-width:170px;
  width: 25%;
  height: 40px;
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

export const WriteButton = styled(Link)`
    height: 40px;
    background-color: #0075FF;
    border-radius: 15px;
    padding: 7px 30px 0px 30px;
    color: white;
    font-style: normal;
    font-weight: bold;
    text-decoration:none;
    white-space: nowrap;
    &:hover {
      color: white;
      background-color: #3D7EFF;
    }
    &:active {
      color: white;
      background-color: #004FEB;
    }
`;

export const PageContainer = styled.div`
  min-width:300px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: white;
  box-sizing: border-box;
  border-radius: 15px;
  justify-content:flex-start;
  overflow-x:hidden;
  overflow-y:hidden;
`;

export const PageNavigatorLabel = styled.p`
  min-width:80px;
  font-weight: bold;
  color: #0075FF;
  padding: 5px 0px 5px 0px;
  margin-left:30px;
  margin-right:30px;
  &:hover {
    color: #3D7EFF;
  }
  &:active {
    color: #004FEB;
  }
`;

export const PageNumberContainer = styled.div`
  min-width:50px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: white;
  box-sizing: border-box;
  border-radius: 15px;
  justify-content:flex-start;
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
  &:hover {
    color: white;
    background-color: #3D7EFF;
  }
  &:active {
    color: white;
    background-color: #004FEB;
  }
`;

export const PageNumber = styled.p`
  font-weight: bold;
  border-radius: 10px;
  color:#718096;
  padding:5px 13px 5px 13px;
  margin-left:10px;
  margin-right:10px;
  &:hover {
    color: white;
    background-color: #3D7EFF;
  }
  &:active {
    color: white;
    background-color: #004FEB;
  }
`;