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
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

export const SymptomsBubble = styled.div`
height:30px;
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
