import styled from "styled-components";

export const PostContainer = styled.div`
  width: 60%;
  height:40%;
  margin-top: 50px;
  margin-left: 50px;
  display: grid;
  orientation: vertical;
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
`;

export const PostElementContainer = styled.div`
width: 100%;
height: 100%%;
display: flex;
flex-direction: column;
margin-top: 20px;
margin-bottom: 5%;
`;

export const PostElement = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
  verticalAlign:center;
  padding: 5px;
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
  flex-direction: row;
  verticalAlign:center;
  padding-left: 20px;
`;

export const CategoryBubble = styled.div`
height:100%;
display: flex;
background: #ff8011;
border-radius: 20px;
padding-top: 2px;
padding-bottom: 2px;
padding-left: 10px;
padding-right: 10px;
margin-right: 10px;
font-weight: bold;
color: white;
`;

export const Edit = styled.div`
height:100%;
display: flex;
background: #c1c1c1;
border-radius: 20px;
padding-top: 2px;
padding-bottom: 2px;
padding-left: 15px;
padding-right: 15px;
margin-right: 10px;
font-weight: bold;
color: white;
`;

export const NoLabel = styled.p`
  flex: 1;
  font-weight: bold;
  font-size: 12px;
  color: #a0aec0;
`;
export const SymptomsLabel = styled.p`
  flex: 7;
  text-align: left;
  font-weight: bold;
  font-size: 12px;
  color: #a0aec0;
`;
export const DateLabel = styled.p`
  flex: 3;
  font-weight: bold;
  font-size: 12px;
  color: #a0aec0;
`;

export const SymptomsContainer = styled.div`
flex: 7;
display: flex;
flex-direction: row;
`;

export const SymptomsBubble = styled.div`
height:70%;
display: flex;
background: #0075ff;
border-radius: 8px;
padding-top: 2px;
padding-bottom: 2px;
padding-left: 15px;
padding-right: 15px;
margin-right: 10px;
font-weight: bold;
color: white;
`;

export const No = styled.p`
  flex: 1;
  margin-top: 4px;
  color: gray;
`;
export const Patient = styled.p`
  flex: 12;
  margin-top: 4px;
  margin-left: 40px;
  text-align: left;
  font-weight: bold;
`;
export const Date = styled.p`
  flex: 3;
  margin-top: 2px;
  margin-top: 4px;
  font-weight: bold;
`;