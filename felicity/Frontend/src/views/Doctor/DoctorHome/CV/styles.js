import { parseWithOptions } from "date-fns/fp";
import styled from "styled-components";
import { Link } from "react-router-dom";
import default_profile from "../../../Components/assets/default_profile.png";

export const PatientContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  background: white;
  border-radius: 20px;
  justify-content: center;
  overflow-y:auto;
`;

export const Column = styled.div`
  height:100%;
  width:100%;
  display: flex;
  flex-direction: column;
  overflow:auto;
  
  &::-webkit-scrollbar {
    width: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  `;

export const Note = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 20px;
  padding-top: 20px;
  padding-left: 20px;
  background-color: #F9F9F9;
  margin: 10px 0px 10px 0px;
  overflow: hidden;
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
  width: 130px;
  height: 130px;
  margin: 10px;
  margin-bottom: 50px;
  margin-top: 30px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center center;
  border-radius: 20px;
  background-image: url(${props => props.img? props.img : default_profile });
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  align-content: space-evenly;
`;

export const Title = styled.p`
  text-align: left;
  font-weight: bold;
  margin-top: 20px;
  font-size: 20px;
  padding-left: 10px;
`;

export const Patient = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 20px;
  `;

export const Bio = styled.p`
  text-align: left;
  color: black;
  font-size: 20px;
`;

export const Box = styled.p`
  align-self: center;
  padding-left: 50px;
`;

export const DetailLabel = styled.p`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  min-width: 150px;
  padding-left: 10px;
`;

export const Detail = styled.p`
  flex: 4;
  text-align: left;
  margin-left: 7px;
  padding-left: 10px;

`;

export const Btn = styled(Link)`
  width: 100%;
  height: 50px;
  background: #0075ff;
  border-radius: 10px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  padding-top: 10px;
  text-decoration:none;
   &:hover {
      color: white;
    }
`;

export const DefaultLabel = styled.p`
  text-align: center;
  font-weight: regular;
  color: #aaaaaa;
  margin-top: 20%;
  font-size: 20px;
`;

export const SaveBtn = styled(Link)`
  width: 100px;
  height: 40px;
  background: #FF800B;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding-top: 0.5em;
  &:hover {
    color: white
  }
`;