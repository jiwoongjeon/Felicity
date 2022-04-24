import styled from "styled-components";

export const ChecklistsContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px;
padding-left: 3%;
padding-right: 30px;
background: white;
border-radius: 20px;
`;

export const Label = styled.div`
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    margin-top:2%;
`;

export const ChecklistsElementContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
`;

export const Answers =  styled.div`
    width: 95%;
    height: 40px;
    border: 0.5px solid #E2E8F0;
    padding-top:5px;
    padding-left:15px;
    box-sizing: border-box;
    border-radius:15px;
    display: flex;
    align-items: flex-start;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: black;
    font-align:left;
`;

export const Divider = styled.div`
  display: flex;
  background: #E3E8F0;
  margin-bottom: 5px;
  padding: 1px;
  border-radius: 2px;
`;

export const SymptomsContainer = styled.div`
width: 95%;
height: 10%;
margin-bottom:10%;
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