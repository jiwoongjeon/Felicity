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
    width: 90px;
    height: 16px;
    text-decoration:none;
`;

export const AccountIcon = styled.div`
    background-color: #F8F9FA;
    color: #718096;
    font-weight: Bold;
    padding: 9px;
    cursor: pointer;
`;

export const Setting = styled.button`
    background-color:  #F8F9FA;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left:20px;
`;

export const Noti = styled.button`
    background-color:  #F8F9FA;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left:10px;
`;





