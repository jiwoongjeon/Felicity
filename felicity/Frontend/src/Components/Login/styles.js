import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: end;
    /* vertical-align: middle; */
`;

export const Account = styled(Link)`
    width: 150px;
    height: 16px;
    text-decoration:none;
`;

export const AccountIcon = styled.div`
    background-color: #F8F9FA;
    color: #0075FF;
    font-weight: Bold;
    // padding: 9px;
    cursor: pointer;

`;

export const Setting = styled.button`
    background-color: #F8F9FA;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const Noti = styled.button`
    background-color: #F8F9FA;
    border: none;
    outline: none;
    cursor: pointer;
`;





