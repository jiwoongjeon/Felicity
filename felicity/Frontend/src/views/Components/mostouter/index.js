import styled from "styled-components";

export const Mostouter = styled.div`
    width : 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 0.02fr 0.5fr 2fr 1fr 0.02fr;
    grid-template-rows: 0.1fr 1fr 0.02fr;
    grid-template-areas:
        ". cat path login ."
        ". cat video video ."
        ". . . . .";
    grid-gap: 15px;
    background-color : #F8F9FA;
    overflow: scroll;
`;

export const Directory = styled.div`
    grid-area: path;
    margin-left: 10px;
`;

export const User = styled.div`
    grid-area: login;
`;

export const Cat = styled.div`
    grid-area: cat;
`;

export const Video = styled.div`
    grid-area: video;
`;
