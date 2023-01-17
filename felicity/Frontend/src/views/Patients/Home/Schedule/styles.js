import styled from "styled-components";
import { Link } from "react-router-dom";
import { normalizeUnits } from "moment";

export const ScheduleContainer = styled.div`
  margin-right: 30px;
  width: 100%;
  height: 100%;
  min-width:500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  background: white;
  border-radius: 20px;
  box-shadow: 0px 4px 5px 0px #EDEEEF;
`;

export const Header = styled.p`
  margin: 20px;
  font-weight: bold;
  font-size: 20px;
`;

export const AppointmentContainer = styled(Link)`
  width: 90%;
  height: 65px;
  min-width:300px;
  margin-left: 40px;
  margin-bottom: 10px;
  padding: 20px;
  border: 3px;
  flex-direction: row;
  background-color: #F8F9FA;
  border-radius: 10px;
  display:flex;
  text-decoration:none;
  align-self: start;
`;

export const AppointmentList = styled.div`
width: 100%;
height: 80%;
flex-direction: column;
overflow-y: auto;
&::-webkit-scrollbar {
  width: 10px;
}
`;

export const CancelButton = styled(Link)`
flex:1;
width: 10%;
height: 50%
color: white;
border-radius: 10px;
font-weight:bold;
text-decoration:none;
`;

export const FstColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const First = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 5px;
text-decoration:none;
`;

// export const Column = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

export const Column = styled.div`
  width:100%;
  padding: 5px;
  flex-direction: column;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Date = styled.div`
  flex:1;
  min-width:100px;
  margin: 0px;
  margin-right: 15px;
  font-weight: bold;
  color: #0075FF;
`;

export const TimeEmail = styled.p`
flex:1;
  color: rgba(107, 114, 128);
  text-align:left;
//   font-size: 14px;
`;

export const DeleteIcon = styled.button`
  margin: 0px;
  margin-right: 13px;
  font-weight: bold;
  color: rgba(239, 68, 68);
  background-color: #F8F9FA;
  outline: none;
  border: none;

`;

export const EditIcon = styled.button`
  margin: 0px;
  font-weight: bold;
  color: rgba(55, 65, 81);
  background-color: #F8F9FA;
  outline: none;
  border: none;
`;

export const DoctorEmail = styled.p`
flex:5;
  color: rgba(156, 163, 175);
  margin-left: 10px;
//   font-size: 14px;
text-align:left;
`;
