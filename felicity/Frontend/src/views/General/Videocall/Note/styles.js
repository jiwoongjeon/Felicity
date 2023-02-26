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

export const Label = styled.p`
    font-size: large;
    font-weight: bold;
    margin: 10px 0px 10px 0px;
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