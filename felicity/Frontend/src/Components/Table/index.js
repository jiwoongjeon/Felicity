import styled from "styled-components";

export const ContainerB = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3% auto;
  min-width: 80%;
  background-color: #f3f3f3;
  border-radius: 10px;
`;

export const Title = styled.h1`
  margin-left: 40px;
  font-size: var(--font-size-7);
  color: #4978a5;
`;

export const Table = styled.table`
  // border-top-style: solid;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  width: 100%;
`;

export const Row = styled.tr`
  border-bottom: 1px solid grey;
  text-align: center;
`;

export const HeaderRow = styled.tr`
  text-align: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

export const HeaderColumn = styled.th`
  padding: 10px 0;
`;

export const Column = styled.td`
  text-align: center;
  padding: 20px 0;
  text-align: ${(props) => props.textAlign ?? "center"};
`;
