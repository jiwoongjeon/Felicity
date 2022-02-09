import styled from "styled-components";

export const ContentLayout = styled.div`
    width : 100%;
    min-width: 900px;
    height: 100%;
    min-height: 700px;
    display: grid;

    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1fr 8fr;
    grid-template-areas:
        "list info"
        "list info"
        "list info";
    background-color : #F8F9FA;
    gap: 10px;
    padding-right: 20px;
`;

export const InfoBox = styled.div`
width: 100%;
min-width: 350px;
grid-area:info;
`;

export const PatientBox = styled.div`
min-width: 350px;
grid-area: list;
`;



