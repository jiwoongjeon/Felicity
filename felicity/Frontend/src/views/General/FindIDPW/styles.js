import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color : #F8F9FA;
    min-height: 800px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 30px;
    box-shadow: 0px 4px 5px 0px #EDEEEF;
`;

export const SubContainer = styled.div`
    width: 600px;
    padding: 30px;
    border-radius:20px;
    display: flex;
    flex-direction: column;
    background-color:white;
    justify-content: flex-start;
    height: 85%;
    align-self: center;
    background-color: #FFFFFF;
    min-height: 800px;
    box-shadow: 0px 4px 5px 0px #EDEEEF;
`;
export const Logo = styled.img`
    height: 38px;
    width: 35.67px;
`;

export const Title = styled.div`
    text-align: left;
    font-weight: bold;
    font-size: 24px;
    color: black;
    font-family: Roboto;
    font-style: normal;
    margin: 20px 0px 20px 0px;
`;

export const SubTitle = styled.div`
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin: 30px 0px 20px 0px;
    width: auto;
    color: black;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
`
export const Button = styled.button`
    width: auto;
    cursor: pointer;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    color: white;
    font-size: 16px;
    margin: 20px;
    border-radius: 12px;
    border: none;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    background-color: #0075FF;
    &:hover {
        color: white;
        background-color: #3D7EFF;
        }
        &:active {
        color: white;
        background-color: #004FEB;
        }
`;


export const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const IDContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const PWContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FindContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 100%;

`

export const Find2Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-color: #ddd;
    border-top-width: 1;
    border-bottom-width: 1;
`

export const Label = styled.div`
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    margin: 20px 0px 10px 24px;
    width: auto;
    color: black;
`;
export const FirstnameInput = styled.input.attrs(({ type }) => ({
    type:  type || "text",
    placeholder: 'Enter your firstname.'
  }))`
      width: 90%;
      height: 100%;
      padding: 10px;
      margin-left: 15%;
      margin-right: 15%;
      margin: 5px 0px;
      border: outset;
      border-radius: 3px;
      outline: none;
      font-size: 16px;
      font-style: italic;
      font-weight: normal;
      font-family: Roboto;
      color: black;
      background-color: #F0F0F0;
      align-self: center;
  `;
export const LastnameInput = styled.input.attrs(({ type }) => ({
    type:  type || "text",
    placeholder: 'Enter your lastname.'
  }))`
      width: 90%;
      height: 100%;
      padding: 10px;
      margin: 5px 0px;
      border: outset;
      border-radius: 3px;
      outline: none;
      font-size: 16px;
      font-style: italic;
      font-family: Roboto;
      font-weight: normal;
      color: black;
      background-color: #F0F0F0;
      align-self: center;
  `;
export const EmailInput = styled.input.attrs(({ type }) => ({
    type:  type || "text",
    placeholder: 'Enter your email address.'
  }))`
      width: 90%;
      height: 100%;
      padding: 10px;
      margin-left: 15%;
      margin-right: 15%;
      margin: 5px 0px;
      border: outset;
      border-radius: 3px;
      outline: none;
      font-size: 16px;
      font-style: italic;
      font-family: Roboto;
      font-weight: normal;
      color: black;
      background-color: #F0F0F0;
      align-self: center;
  `;

export const NewPWInput = styled.input.attrs(({ type }) => ({
    type:  type || "text",
    placeholder: 'Enter a new password.'
  }))`
      width: 90%;
      height: 100%;
      padding: 10px;
      margin-left: 15%;
      margin-right: 15%;
      margin: 10px 0px;
      border: outset;
      border-radius: 3px;
      outline: none;
      font-size: 16px;
      font-style: italic;
      font-family: Roboto;
      font-weight: normal;
      color: black;
      background-color: #F0F0F0;
      align-self: center;
  `;

  export const ConfirmPWInput = styled.input.attrs(({ type }) => ({
    type:  type || "text",
    placeholder: 'Confirm your new password.'
  }))`
      width: 90%;
      height: 100%;
      padding: 10px;
      margin-left: 15%;
      margin-right: 15%;
      margin: 30px 10px;
      border: outset;
      border-radius: 3px;
      outline: none;
      font-size: 16px;
      font-style: italic;
      font-family: Roboto;
      font-weight: normal;
      color: black;
      background-color: #F0F0F0;
      align-self: center;
  `;

  export const ChangePWButtonDisabled = styled.button`
  width: 50%;
  height: 40px;
  background-color: #A0AEC0;
  border-radius: 12px;
  margin-top: 20px;
  margin-left: 20px;
  border: 0;
  outline: 0;
  color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  text-decoration:none;
  text-align:center;
  cursor: not-allowed; 
  &:hover {
      color: white;
      background-color: #cccccc;
    }
`
export const ChangePWButton = styled.button`
    width: 50%;
    height: 40px;
    background-color: #0075FF;
    border-radius: 12px;
    margin-top: 20px;
    margin-left: 20px;
    border: 0;
    outline: 0;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    text-decoration:none;
    text-align:center;
    &:hover {
    color: white;
    background-color: #3D7EFF;
    }
    &:active {
    color: white;
    background-color: #004FEB;
    }
    cursor: pointer;
`

export const ResetContainer = styled.div`
    width: 100%;
`
export const WrongReenterContainer = styled.div`
    width: 100%;
`

export const SigninLink = styled(Link)`
    color: #FF800B;
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    margin-top: 15px;
    text-decoration: underline;
    &:hover {
    color: red;
    }
    cursor: pointer;
`
export const ResetSuccess = styled.div`
    text-decoration: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    width: 100%;
    display: flex;
    flex-direction: column;
`