import { parseWithOptions } from "date-fns/fp";
import styled from "styled-components";

export const PatientContainer = styled.div`
  width: 90%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 100px;
  margin-left: 50px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 30px;
  background: white;
  border-radius: 20px;
`;

export const Header = styled.p`
  width:99%;
  display:flex;
  padding-left: 10px;
  font-weight: bold;
  font-size: 18px;
  align-items: center;
  justify-content:space-between;
`;

export const Column = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.p`
  flex:1
  text-align: left;
  font-weight: bold;
`;

export const Divider = styled.div`
  width:100%;
  display: flex;
  background: #E3E8F0;
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
flex-direction: column;
`;

export const PatientInfoContainer = styled.div`
flex: 6;
display: flex;
flex-direction: column;
`;

export const SymptomsContainer = styled.div`
flex: 2;
display: flex;
flex-direction: row;
margin-top: -6px;
`;

export const SymptomsBubble = styled.div`
height:20px;
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

export const ViewAll = styled.button`
background: white;
color: #63aaff;
font-weight: bold;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 30px;
padding-right: 30px;
border: 1px solid palevioletred;
border-color: #63aaff;
border-radius: 10px;
`;

export const PatientLabel = styled.p`
  flex: 6;
  text-align: left;
  font-weight: bold;
  font-size: 12px;
  color: #a0aec0;
`;

export const TimeLabel = styled.p`
  flex: 1;
  text-align: left;
  font-weight: bold;
  font-size: 12px;
  color: #a0aec0;
`;

export const SymptomsLabel = styled.p`
  flex: 2;
  text-align: left;
  font-weight: bold;
  font-size: 12px;
  color: #a0aec0;
`;

export const DetailLabel = styled.p`
flex: 1;
text-align: center;
font-weight: bold;
font-size: 12px;
color: #a0aec0;
`;

export const PatientImage = styled.div`
  flex:0.4;
  height: 80%;
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
  margin-top: 6px;
`;

export const Bio = styled.p`
  text-align: left;
  color: #a0aec0;
  margin-top:-15px;
`;

export const Time = styled.p`
  flex: 1;
  text-align: left;
  font-weight: bold;
  margin-top: 6px;
`;

export const Detail = styled.p`
  flex: 1;
  font-weight: bold;
  margin-top: 6px;
`;