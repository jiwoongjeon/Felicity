import styled from "styled-components";

export const Mostouter = styled.div`
    width : 100%;
    height: 100vh;
    display: grid;
    overflow: auto;
    background-color : #F8F9FA;
    grid-template-columns: 0.02fr 0.5fr 2fr 1fr 0.02fr;
    grid-template-rows: 0.1fr 1fr;
    grid-template-areas:
        ". cat path login ."
        ". cat video video ."
`;

export const Directory = styled.div`
    grid-area: path;
    margin-top:10px;
    margin-bottom:20px;
`;

export const User = styled.div`
    grid-area: login;
    margin-top:10px;
    margin-bottom:20px;
    margin-right:3px;
`;

export const Cat = styled.div`
    grid-area: cat;
    margin-right:30px;
`;

export const Video = styled.div`
    grid-area: video;
    margin-right:3px;
    margin-bottom:5px;
    place-content: stretch stretch;
`;

export const List = styled.div`
    grid-area: video;
    margin-right:3px;
    margin-bottom:5px;
    place-content: stretch stretch;
    overflow-x: hidden;
`;
