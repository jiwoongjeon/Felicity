import styled from "styled-components";

export const Mostouter = styled.div`
    width : 100%;
    height: 100vh;
    display: grid;
    overflow: auto;

    grid-template-columns: 0.5fr 2fr 1fr;
    grid-template-rows: 1fr 1fr 7fr 2fr;
    grid-template-areas:
        "cat path login"
        "cat list list"
        "cat list list"
        "cat list list";
    gap : 10px;
    background-color : #F8F9FA;
`;

export const Cat = styled.div`
    grid-area:cat;
    background-color: #F8F9FA;
    margin-left: 20px;
    margin-right: 10px;
`;

export const List = styled.div`
    grid-area: list;
    margin-left: 20px;
    margin-right: 10px;
    margin-bottom: 2%;
`;

export const Directory = styled.div`
    grid-area:path;
    background-color: #F8F9FA;
`;

export const User = styled.div`
    grid-area:login;
    background-color: #F8F9FA;
`;
