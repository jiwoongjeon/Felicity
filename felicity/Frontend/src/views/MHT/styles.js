import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color : #F8F9FA;
`;

export const QuestionContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 5%;
`;

export const Logo = styled.img`
    height: 38px;
    width: 35.67px;
`;

export const Title = styled.div`
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    margin-top: 40px;
    color: #002D84;
`;

export const SubTitle = styled.div`
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
    color: #002D84;
`;

export const Label = styled.div`
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    margin-top: 5%;
`;

export const SubmitButton = styled(Link)`
    width: 500px;
    height: 40px;
    background-color: #0075FF;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 40px;
    padding-top: 5px;
    border: 0;
    outline: 0;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-decoration:none;
    &:hover {
      color: white;
      background-color: #3D7EFF;
    }
    &:active {
      color: white;
      background-color: #004FEB;
    }
`;

export const Row = styled.div`
    width:100%
    flex-align:row;
`

export const MoveButton = styled(Link)`
    width:40%;
    height: 40px;
    background-color: #0075FF;
    border-radius: 20px;
    margin-top: 43px;
    margin-left:5%;
    padding-top: 5px;
    border: 0;
    outline: 0;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-decoration:none;
    &:hover {
      color: white;
      background-color: #3D7EFF;
    }
    &:active {
      color: white;
      background-color: #004FEB;
    }
`;

export const InputBox = styled.div`
    width: 100%;
    height: 40px;
    border: 0.5px solid #E2E8F0;
    padding-top:5px;
    box-sizing: border-box;
    border-radius:15px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: white;
`;

export const SliderBox = styled.div`
    width: 100%;
    height: 60px;
    padding-top:5px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const RadioBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 24px;
    padding-left: 5px;
`;

export const CheckboxBox = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
`;

export const BodyInput =  styled.input.attrs(({ type }) => ({
    type:  type || "text",
    placeholder: "Required *"
  }))`
      width: 95%;
      height: 80%;
      border: none;
      outline: none;
      font-size: 12px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      color: black;
  `;

  
export const ReasonInput =  styled.input.attrs(({ type }) => ({
    type:  type || "text",
    placeholder: "Optional "
  }))`
      width: 95%;
      height: 80%;
      border: none;
      outline: none;
      font-size: 12px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      color: black;
  `;

  export const DepartmentInput =  styled.input.attrs(({ type }) => ({
    type:  type || "text",
    placeholder: "Optional "
  }))`
      width: 95%;
      height: 80%;
      border: none;
      outline: none;
      font-size: 12px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      color: black;
  `;

  export const OtherInput =  styled.input.attrs(({ type }) => ({
    type:  type || "text",
    placeholder: "Optional "
  }))`
      width: 95%;
      height: 80%;
      border: none;
      outline: none;
      font-size: 12px;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      color: black;
  `;
  