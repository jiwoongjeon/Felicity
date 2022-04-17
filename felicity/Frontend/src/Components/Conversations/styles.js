import { Link } from "react-router-dom";
import styled from "styled-components";
import default_profile from '../assets/default_profile.png'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  padding-left: 20px;
  background: white;
  border-radius: 20px;
`;

export const Header = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-weight: bold;
  font-size:20px;
`;

export const ConversationList = styled.div`
width: 95%;
height: 100%
display:flex;
flex-direction:column;
overflow-y:auto;
&::-webkit-scrollbar {
  width: 10px;
}
`;

export const ConversationContainer = styled.div`
  width: 95%;
  height: 65px;
  max-width: 95%;
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const PhotoArea = styled.div`
  width:65px;
  height:65px;
  min-width:65px;
  border-radius: 8px;
  background-image: url(${props => props.img? props.img : default_profile });
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InfoArea = styled.div`
  flex: 8;
  max-width:80%
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  overflow-y:hidden;
`;

export const Username = styled.p`
  margin: 0px;
  margin-top: 7px;
  font-weight: bold;
  text-align: left;
`;

export const Preview = styled.p`
  margin: 0px;
  margin-top: 5px;
  color: rgba(107, 114, 128);
  text-align: left;
  overflow:hidden;
`;

export const IconArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ReplyBtn = styled(Link)`
  color: #FF800B;
  font-weight: bold;
`;