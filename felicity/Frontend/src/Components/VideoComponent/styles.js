import styled from "styled-components";

export const Title = styled.p`
  border-radius: 8px;
  font-weight: bold;
  padding: 2px;
  color: white;
  font-size: 20px;
  background: #0075ff
`;

export const CameraContainer = styled.div`
  height: 627px;
  width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: flex-center;
  background: #00000010 ;
  border-radius: 8px;
  overflow-y:hidden;
  overflow-x:hidden;
`;

export const Caption = styled.p`
  margin-top: -120px;
  font-weight: bold;
  color: white;
  z-Index: 1;
  font-size: 30px;
  background: #000000aa
`;
