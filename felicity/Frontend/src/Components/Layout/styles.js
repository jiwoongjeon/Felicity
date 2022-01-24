import styled from "styled-components";
import temp_image from '../assets/MaskGroup.png';
import temp_image2 from '../assets/patient.png';

export const ContentLayout = styled.div`
    width : 100%;
    min-width: 900px;
    height: 95%;
    min-height: 700px;
    display: grid;

    grid-template-columns: 75% 25%;
    grid-template-rows: 7% 15% 78%;
    grid-template-areas:
        "title empty"
        "video empty"
        "video info";
    background-color : #F8F9FA;
    gap: 10px;
    padding-right: 10px;
    //border:1px solid;
`;

export const Empty = styled.div`
    grid-area:empty;
    height: 100%;
    min-height: 300px;
    background-color: #F8F9FA;
`;

export const TitleBox = styled.div`
    grid-area:title;
    background-color: #F8F9FA;
`;

export const InfoBox = styled.div`
    grid-area:info;
    background-color: #F8F9FA;
    margin-left: 10px;
`;

export const VideoBox = styled.div`
    grid-area: video;

`;


