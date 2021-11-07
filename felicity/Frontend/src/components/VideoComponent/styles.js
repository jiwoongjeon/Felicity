import styled from "styled-components";

export const CameraContainer = styled.div`
  height: 720px;
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: green;
  border-radius: 8px;
  overflow-y:hidden;
  overflow-x:hidden;
`;

export const Caption = styled.p`
  margin-top: -20px;
  font-weight: bold;
  color: white;
`;
