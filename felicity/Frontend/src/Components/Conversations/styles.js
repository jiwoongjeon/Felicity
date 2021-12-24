import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80%;
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
  margin-bottom: 50px;
  font-weight: bold;
  font-size:20px;
`;

export const ConversationContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 95%;
  margin-bottom: 30px;

`;

export const PhotoArea = styled.div`
  flex: 1.5;
  height: 100%;
  border-radius: 8px;
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InfoArea = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
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
`;

export const IconArea = styled.div`
  flex: 1;

`;

export const ReplyBtn = styled.p`
  color: #FF800B;
  font-weight: bold;
`;