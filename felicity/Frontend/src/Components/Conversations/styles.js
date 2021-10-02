import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;

  width: 560px;
  height: 538px;

  background: white;
`;

export const Header = styled.p`
  font-weight: bold;
`;

export const ConversationContainer = styled.div`
  display: flex;
  flex-direction: row;
//   padding-bottom: 10px;
  width: 93%;
  margin-bottom: 10px;

//   background: rgba(255, 251, 235);
`;

export const PhotoArea = styled.div`
  flex: 1;
  height: 71px;
  background: rgba(254, 243, 199);
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
`;

export const Preview = styled.p`
  margin: 0px;
  margin-top: 5px;
  color: rgba(107, 114, 128)
`;

export const IconArea = styled.div`
  flex: 1;

`;

export const ReplyBtn = styled.p`
  color: #FF800B;
  font-weight: bold;
`;