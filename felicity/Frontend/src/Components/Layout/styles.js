import styled from "styled-components";
import temp_image from '../assets/MaskGroup.png';
import temp_image2 from '../assets/patient.png';

export const ContentLayout = styled.div`
    width : 100%;
    height: 100%;
    display: grid;

    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr 8fr;
    grid-template-areas:
        "title empty"
        "video empty"
        "video info";
    background-color : #F8F9FA;
    gap: 10px;
`;

export const Empty = styled.div`
    grid-area:empty;
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


