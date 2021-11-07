import styled from "styled-components";

export const CameraContainer = styled.div`
  height: 576px;
  width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: flex-center;
  background: green;
  border-radius: 8px;
  overflow-y:hidden;
  overflow-x:hidden;
`;

export const Caption = styled.p`
  margin-top: -100px;
  font-weight: bold;
  color: white;
  z-Index: 1;
  font-size: 50px;
  background: #000000aa
`;
