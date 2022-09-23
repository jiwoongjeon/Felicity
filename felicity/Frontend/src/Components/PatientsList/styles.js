import styled from "styled-components";
import default_profile from '../assets/default_profile.png'

export const PatientContainer = styled.div`
  width: 100%;
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

export const CalenderBox = styled.div`
width: 80%;
margin: auto;
margin-top: 2%;
height: 600px;
overflow-y:auto;
&::-webkit-scrollbar {
  width: 10px;
}
`;

export const Column = styled.div`
  width:100%;
  padding: 5px;
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
cursor:pointer;
overflow:hidden;
`;

export const PatientInfoContainer = styled.div`
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

// 이거 프로필 컨테이너 사이즈 자체를 줄이고 싶은데 어케 하는건지 몰르겟습니다
// Flex 지우고 min-width를 조정하도록 하렴 - Justin
export const PatientImage = styled.div`
  flex: 2.7;
  min-width: 80px;
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
  margin-top: 0px
  font-size: 100%;
`;

export const Bio = styled.p`
  text-align: left;
  color: #a0aec0;
  margin-top:2px;
  margin-left: 30px;
  font-size: 15px;
`;

export const Time = styled.p`
  min-width:350px;
  text-align: left;
  font-weight: regular;
  margin-top: -20px;
  word-break: keep-all;
  color:#0075ff;
`;

export const Detail = styled.p`
  flex: 1;
  font-weight: bold;
  margin-top: 6px;
`;

