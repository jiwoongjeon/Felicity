import styled from "styled-components";

export const ScheduleContainer = styled.div`
  margin-left:40px;
  width: 558px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  background: white;
  border-radius: 8px;
`;

export const Header = styled.p`
  margin: 20px 20px 0px;
  font-weight: bold;
  font-size: 18px;
`;

export const AppointmentContainer = styled.div`
  width: 478px;
  height: 62px;
  margin: 20px 20px 0px;
  padding: 20px;
  border: 3px;
  display: flex;
  flex-direction: column;
  background: #F8F9FA;
  border-radius: 4px;
`;

export const FstColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Column = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
`;

export const Group = styled.div`
  margin: 0px;
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