import { parseWithOptions } from "date-fns/fp";
import styled from "styled-components";

export const PatientContainer = styled.div`
  width: 590px;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: white;
  border-radius: 20px;
  justify-content: center;
`;

export const Column = styled.div`
  flex:9;
  height:100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  flex:1
  text-align: left;
  font-weight: bold;
  margin-top: 10px;
  font-size:20px;
`;


export const Divider = styled.div`
  width:100%;
  display: flex;
  background: #E3E8F0;
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 1px;
  border-radius: 2px;
`;

export const PatientElementContainer = styled.div`
margin-top: 0px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
overflow-y: auto;
&::-webkit-scrollbar {
  width: 10px;
}
`;

export const PatientElement = styled.div`
display: flex;
flex-direction: row;
`;

export const PatientInfoContainer = styled.div`
display: flex;
flex-direction: row;
`;

export const SymptomsContainer = styled.div`
display: flex;
flex-direction: row;
margin-top: -6px;
`;

export const SymptomsBubble = styled.div`
height:100%;
display: flex;
background: #0075ff;
border-radius: 8px;
padding-top: 5px;
padding-bottom: 5px;
padding-left: 15px;
padding-right: 15px;
margin-right: 10px;
font-weight: bold;
color: white;
`;

export const PatientImage = styled.div`
  flex: 1.5;
  border-radius: 8px;
  background-image:  url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const Patient = styled.p`
  text-align: left;
  font-weight: bold;
  margin-top: 0px;
`;

export const Bio = styled.p`
  text-align: left;
  color: #a0aec0;
  margin-top:0px;
  margin-left: 10px;
`;

export const Time = styled.p`
  flex: 1;
  text-align: right;
  font-weight: bold;
  margin-top:0px;
`;

export const Detail = styled.p`
  flex: 1;
  font-weight: bold;
  margin-top: 6px;
`;
