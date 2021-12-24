import styled from "styled-components";

export const ContentLayout = styled.div`
    width : 100%;
    height: 167%;
    display: grid;

    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr 8fr;
    grid-template-areas:
        "list info"
        "list info"
        "list info"
        "post post";
    background-color : #F8F9FA;
    gap: 10px;
    padding-bottom: 20px;
    padding-right: 20px;
`;

export const InfoBox = styled.div`
    grid-area:info;
`;

export const PatientBox = styled.div`
    grid-area: list;
`;

export const Post = styled.div`
    grid-area: post;
`;


