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

export const LoginContainer = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 10%;
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


export const RadioWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 24px;
    padding-left: 5px;
`;

export const CheckboxWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 7px;
`;

export const RadioButton =  styled.input.attrs(({ type }) => ({
  type:  type || "radio"
}))`
`;


export const Label = styled.div`
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    margin-top: 12px;
`;
export const LoginInput =  styled.input.attrs(({ type }) => ({
  type:  type || "text",
  placeholder: "avgsdf@email.com"
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



export const PwInput = styled.input.attrs(({ type }) => ({
  type:  type || "password",
  placeholder: "password"
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

export const Rowbox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 8px;

`;

export const PwLabel = styled.div`
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
`;

export const UrlLink = styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: #0075FF;
    text-decoration: none;
`;

export const TextLink = styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: black;
`;

export const Checkbox =  styled.input.attrs(({ type }) => ({
  type:  type || "checkbox"
}))`

  border:1px solid #0075FF;
  &:active {
    border-color: #0075FF;
  }
`;

export const Rowbox2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 8px;
    margin-bottom: 8px;
border:1px solid #0075FF;
`;

export const SubmitButton = styled(Link)`
    width: 100%;
    height: 40px;
    background-color: #0075FF;
    border-radius: 20px;
    margin-top: 43px;
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

export const Signup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 12px;
`;

export const SignupLink = styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
`;

export const Icon = styled.div`
    width: 37.5px;
    border: none;
    outline: none;
    padding-left: 10px;
`;

export const InputBox = styled.div`
    width: 100%;
    height: 40px;
    padding-top: 5px;
    border: 0.5px solid #E2E8F0;
    box-sizing: border-box;
    border-radius:15px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: white;
`;

