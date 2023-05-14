import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    min-height: 800px;
`;

export const LoginContainer = styled.div`
    width: 650px;
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    background-color: white;
    border-radius: 30px;
    min-height: 800px;
`;

export const LoginSubContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self:center;
`;

export const Logo = styled.img`
    display:flex;
    align-self:center;
    width: 60px;
    height: auto;
    margin-top: 60px;
`;

export const Title = styled.div`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    margin-bottom:50px;
    margin-top: 15px;
    letter-spacing: 2px;
`;

export const SubTitle = styled.div`
    text-align: middle;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    margin-top: 25px;
    margin-bottom: 10px;
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
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    margin-left: 13px;
    margin-bottom: 3px;
`;

export const LabelRecursive = styled.div`
    text-align: left;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    margin-top: 12px;
    color:red;
`;

export const LoginInput =  styled.input.attrs(({ type }) => ({
    type:  type || "text",
    placeholder: 'Type your username'
}))`
    width: auto;
    height: 80%;
    border: none;
    outline: none;
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    color: black;
    background-color: #F0F0F0;
    padding-left: 5px;
`;



export const PwInput = styled.input.attrs(({ type }) => ({
    type:  type || "password",
    placeholder: "Type your password"
}))`
    width: auto;
    height: 80%;
    border: none;
    outline: none;
    font-size: 12px;
    font-style: normal;
    font-weight: normal;
    color: black;
    background-color: #F0F0F0;
    padding-left: 5px;
`;

export const Rowbox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 4px;
    text-align: left;
`;

export const PwLabel = styled.div`
    text-align: left;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    margin-left: 13px;
    margin-bottom: 0px;
    
`;

export const UrlLink = styled.a`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: #0075FF;
    text-decoration: none;
`;

export const TextLink = styled.a`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    color: black;
`;

export const Checkbox =  styled.input.attrs(({ type }) => ({
    type:  type || "checkbox"
}))`
    border: 1px solid #0075FF;
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

export const SubmitButton = styled.button`
    width: 100px;
    height: 35px;
    align-self: center;
    background: linear-gradient(99.09deg, #010F98 0%, #6CBEDC 100%);
    border-radius: 20px;
    padding-top: 5px;
    border: 0;
    outline: 0;
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
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

export const RoleButton = styled.button`
    width: 300px;
    height: 50px;
    align-self: center;
    background: #F0F0F0;
    border-radius: 10px;
    padding-top: 5px;
    border: 0;
    outline: 0;
    color: black;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    text-decoration:none;
    margin-top: 20px;

`;

export const LangButton = styled.button`
    position: absolute;
    width: 100px;
    height: 50px;
    bottom: 7.5%;
    right: 170px;


    align-self: right;
    background: #F0F0F0;
    border-radius: 10px;
    padding-top: 5px;
    border: 0;
    outline: 0;
    color: white;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    text-decoration:none;
    background: #6CBEDC;


`;

export const GrayContainer = styled.div`

    height: 100vh;
    width: 100%;
    background: rgba(135, 135, 135, 0.45);
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    min-height: 800px;

`;

export const LangButton2 = styled.button`
    position: absolute;
    width: 100px;
    height: 50px;
    bottom: 7.5%;
    right: 50px;


    align-self: right;
    background: #F0F0F0;
    border-radius: 10px;
    padding-top: 5px;
    border: 0;
    outline: 0;
    color: black;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    text-decoration:none;

`;

export const Divider = styled.div`
    align-self: center;
    width: 250px;
    border: 0.5px solid #000000;
    margin-top: 30px;
`;

export const RoleSubmitButton = styled(Link)`
    flex:1;
    width: 40%;
    height: 40px;
    background-color: #0075FF;
    border-radius: 20px;
    margin-top: 43px;
    padding-top: 5px;
    border: 0;
    outline: 0;
    margin-left:10px;
    margin-right:10px;
    color: white;
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
    display: flex;
    flex-direction: row;
    width: 100%;
`;

export const Signup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.5);
    margin-top: 32px;
    

`;

export const SignupLink = styled(Link)`
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    color: rgb(255,0,0);
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
    /* padding-top: 5px; */
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: #F0F0F0;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    text-align: left;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
`;