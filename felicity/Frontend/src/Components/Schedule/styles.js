import styled from "styled-components";

export const ScheduleContainer = styled.div`
  margin-right: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  background: white;
  border-radius: 20px;
`;

export const Header = styled.p`
  margin: 20px;
  font-weight: bold;
  font-size: 20px;
`;

export const AppointmentContainer = styled.div`
  width: 90%;
  height: 100%;
  margin-left: 40px;
  margin-bottom: 10px;
  padding: 20px;
  border: 3px;
  display: flex;
  flex-direction: column;
  background: #F8F9FA;
  border-radius: 10px;
`;

export const AppointmentList = styled.div`
width: 100%;
height: 300px;
display: flex;
flex-direction: column;
overflow-y: auto;
&::-webkit-scrollbar {
  width: 10px;
}
`;

export const FstColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Date = styled.p`
  margin: 0px;
  margin-right: 15px;
//   font-size: 14px;
  font-weight: bold;
  color: #0075FF;
`;

export const TimeEmail = styled.p`
  margin: 0px;
  color: rgba(107, 114, 128);
//   font-size: 14px;
`;

export const DeleteIcon = styled.p`
  margin: 0px;
  margin-right: 13px;
  font-weight: bold;
  color: rgba(239, 68, 68);
`;

export const EditIcon = styled.p`
  margin: 0px;
  font-weight: bold;
  color: rgba(55, 65, 81);
`;

export const DoctorEmail = styled.p`
  margin: 0px;
  color: rgba(156, 163, 175);
  margin-right: 3px;
//   font-size: 14px;
`;