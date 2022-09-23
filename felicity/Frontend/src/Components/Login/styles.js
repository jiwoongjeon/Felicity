import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: row;
    padding: 20px 20px 0px 20px;
    justify-content: end;
    vertical-align: middle;
`;

export const Account = styled(Link)`
    width: 150px;
    height: 16px;
    text-decoration:none;
    margin-top: 5%;
`;

export const AccountIcon = styled.div`
    background-color: #F8F9FA;
    color: #0075FF;
    font-weight: Bold;
    // padding: 9px;
    cursor: pointer;
    margin-right: -40%;
`;

export const Setting = styled.button`
    background-color: #F8F9FA;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left:20px;
    margin-top: 5%;

`;

export const Noti = styled.button`
    background-color: #F8F9FA;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left:10px;
    margin-right: 5%;
    margin-top: 5%;

`;





