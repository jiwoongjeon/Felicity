import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color : #F8F9FA;
`;


export const Block = styled.div`
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
width:100%;
text-align: center;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 30px;
margin-top: 40px;
color: #002D84;
`;

export const SubTitle = styled.div`
text-align: center;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
margin-top: 10px;
margin-bottom: 10px;
color: #002D84;
`;

export const Row = styled.div  `
display:flex;
width:100%;
justify-content: center;
flex-direction:row;
font-size: 24px;
font-weight: bold;
`

export const Button = styled(Link)`
width: 40%;
height: 40px;
display: flex;
align-items: center;
justify-content: center;
background-color: #0075FF;
border-radius: 15px;
margin: 30px 25px 25px 25px;
border: 0;
outline: 0;
color: white;
font-size: 15px;
font-weight: 550;
line-height: 10px;
text-decoration:none;
`;