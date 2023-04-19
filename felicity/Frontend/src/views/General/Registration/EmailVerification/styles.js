import styled from "styled-components";
import {Link} from "react-router-dom";

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color : #F8F9FA;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 30px;
    box-shadow: 0px 4px 5px 0px #EDEEEF;
`;

export const SubContainer = styled.div`
    width: 650px;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    background-color: #FFFFFF;
    border-radius: 20px;
    min-height: 800px;
    padding: 30px;
    box-shadow: 0px 4px 5px 0px #EDEEEF;
`
export const Logo = styled.img`
    height: 38px;
    width: 35.67px;
    margin: 10px 20px 10px 20px;
`;

export const Title = styled.div`
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    margin: 10px 20px 10px 20px;
    color: black;

`;
export const InputContainer1 = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 10px;
`;
export const EmailInput =  styled.input.attrs(({ type }) => ({
    type:  type || "text",
    placeholder: 'Enter your email address.'
  }))`
      width: 90%;
      height: 100%;
      padding: 10px;
      margin-left: 15%;
      margin-right: 15%;
      margin-top: 10px;
      border: outset;
      border-radius: 3px;
      outline: none;
      font-size: 16px;
      font-style: italic;
      font-weight: normal;
      color: black;
      background-color: #F0F0F0;
  `;

export const SendButton = styled.button`
    width: 20%;
    height: 40px;
    background-color: #0075FF;
    border-radius: 12px;
    margin-top: 25px;
    margin-bottom: 30px;
    margin-left: 50%;
    border: 0;
    outline: 0;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    text-decoration:none;
    &:hover {
    color: white;
    background-color: #3D7EFF;
    }
    &:active {
    color: white;
    background-color: #004FEB;
    }
    cursor: grab;
`

export const InputContainer2 = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 20px;
`
export const CodeInput = styled.input.attrs(({ type }) => ({
    type:  type || "text",
    placeholder: "Enter your code."
  }))`
      width: 60%;
      height: 100%;
      padding: 10px;
      margin-left: 30%;
      border: outset;
      border-radius: 3px;
      outline: none;
      font-size: 16px;
      font-style: italic;
      font-weight: normal;
      background-color: #F0F0F0;
      color: balck
  `;

export const LabelMatchError = styled.div`
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color:red;
    margin-top: 10px;
    margin-left: 50px;
`

export const VerifyButton = styled.div`
    width: 50%;
    height: 40px;
    background-color: #0075FF;
    border-radius: 12px;
    margin-top: 20px;
    margin-left: 35%;
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
    cursor: grab;
`
export const ResendContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 100%;
    justify-content: flex-end;
    margin-bottom: 10%;
`
export const Label = styled.div`
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    margin-top: 30px;
    width: auto;
    color: black;
`;

export const ResendLabel1 = styled.div`
text-align: right;
font-family: Roboto;
font-style: italic;
font-weight: regular;
font-size: 15px;
margin-top: 30px;
width : auto;
color: black;
`

export const ResendLabel2 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    margin-left: 10px;
    margin-top: 30px;
    width: auto;
    text-decoration-line: underline;
    color: #FF800B;
    cursor: grab;
`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
`
export const Button = styled.button`
    cursor: grab;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    color: white;
    font-size: 16px;
    margin: 10px;
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

export const ContinueButton = styled(Link)`
    width: 50%;
    height: 40px;
    background-color: #0075FF;
    border-radius: 12px;
    margin-top: 10px;
    margin-left: 35%;
    padding-top: 7px;
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
`

export const RoleLabel = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: black;
    margin-bottom: 15px;
`

export const ContinueButtonDisabled = styled.button`
    width: 50%;
    height: 40px;
    background-color: #A0AEC0;
    border-radius: 12px;
    margin-top: 20px;
    margin-left: 35%;
    margin-right: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    border: 0;
    outline: 0;
    color: white;
    // font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-decoration:none;
    text-align:center;  
    &:hover {
        color: white;
        background-color: #cccccc;
      }
    cursor: not-allowed;
`;

export const SubmitButtonDisabled = styled.div`
    width: 500px;
    height: 40px;
    background-color: #A0AEC0;
    border-radius: 20px;
    margin-top: 20px;
    margin-left: 50%;
    padding-top: 5px;
    border: 0;
    outline: 0;
    color: white;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-decoration:none;
    text-align:center;
    cursor: not-allowed; 
    &:hover {
        color: white;
        background-color: #cccccc;
      }
`
export const SentLabel = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-align: center;
    margin-left: 20px;
    color: black;
    margin-bottom: 10px;
`

export const Step1 = styled.div`
      width: 100%;
      height: 30%;
`
export const Step2 = styled.div`
    width: 100%;
    height: 40%;
`
export const Step3 = styled.div`
    width: 100%;
      height: 30%;
`