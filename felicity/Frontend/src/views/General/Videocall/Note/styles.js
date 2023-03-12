import styled from "styled-components";

export const NoteContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    border-radius: 20px;
    background-color: white;
    padding: 6%;
    box-shadow: 0px 5.25px 8.25px rgba(0, 0, 0, 0.02);
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.p`
    font-size: large;
    font-weight: bold;
    margin: 10px 0px 10px 0px;
`;

export const SaveBtn = styled.button`
  width: 85px;
  height: 30px;
  line-height: 30px;
  background: #DE3E3E;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  text-decoration: none;

  :hover {
    border: 2px solid #FFFFFF;
    border-radius: 10px;
  }
`;

export const NoteBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: #F9F9F9;
  border-radius: 10px;
  padding: 5%;
  margin-top: 10px;
`;

export const Text = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  resize: none;
  font-size: large;

  ::placeholder {
    font-size: large;
    font-weight: bold;
  }
`;