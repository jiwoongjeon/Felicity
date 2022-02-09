import { parseWithOptions } from "date-fns/fp";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const PatientContainer = styled.div`
  width: 100%;
  min-width: 300px;
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
  height:100%;
  width:100%;
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  `;

export const Divider = styled.div`
  width:100%;
  display: flex;
  background: #E3E8F0;
  margin-bottom: 5px;
  padding: 1px;
  border-radius: 2px;
`;

export const PatientImage = styled.div`
  width:100%;
  height:100%;
  border-radius: 8px;
  background-image:  url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const Patient = styled.p`
  text-align: left;
  font-weight: bold;
  margin-top: 0px;
  font-size: 20px;
`;

export const Bio = styled.p`
  flex:1;
  text-align: right;
  color: #a0aec0;
  margin-top:0px;
  margin-right: 10px;
  font-size: 20px;
`;

export const DetailLabel = styled.p`
  font-weight: bold;
  text-align: left;
`;

export const Detail = styled.p`
  text-align: left;
  margin-left: 7px;
`;

export const Btn = styled(Link)`
  width: 100%;
  height: 50px;
  background: #0075ff;
  border-radius: 10px;
  font-weight: 550;
  color: white;
  padding-top: 10px;
  text-decoration:none;
   &:hover {
      color: white;
    }
`;

export const DefaultLabel = styled.p`
  text-align: center;
  font-weight: bold;
  font-family: Roboto;
  color: #aaaaaa;
  margin-top: 10%;
  font-size: 20px;
`;