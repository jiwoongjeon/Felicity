import styled from "styled-components";
import default_profile from "../../../../Components/assets/default_profile.png";

export const PatientContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  padding-left: 25px;
  padding-right: 25px;
  background: white;
  justify-content: center;
  border-radius: 20px;
`;

export const Column = styled.div`
  width:100%;
  padding: 5px;
  flex-direction: column;
`;

export const Title = styled.p`
  flex: 1;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin: 10px;
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
cursor:pointer;
overflow:hidden;
background-color: #F9F9F9;
padding: 20px;
border-radius: 20px;
`;

export const PatientInfoContainer = styled.div`
width: 80%;
display: flex;
flex-direction: row;
`;

export const SymptomsContainer = styled.div`
width:100%;
max-width:340px;
display: flex;
flex-direction: row;
margin-top: -10px;
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

export const PatientImage = styled.div`
  // flex: 2.7;
  height: 80px;
  width: 80px;
  border-radius: 20px;
  background-image: url(${props => props.img? props.img : default_profile });
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const Patient = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 100%;
  align-self: center;
  margin-left: 50px;
  flex: 2.5;
`;

export const Bio = styled.p`
  text-align: left;
  color: #a0aec0;
  margin-top:2px;
  margin-left: 30px;
  font-size: 15px;
`;

export const Time = styled.p`
  text-align: center;
  font-weight: bold;
  word-break: keep-all;
  color: white;
  align-self: center;
  background-color: #6CBEDC;
  border-radius: 10px;
  padding: 10px;
  flex: 1;
`;

export const Detail = styled.p`
  flex: 1;
  font-weight: bold;
  margin-top: 6px;
`;

