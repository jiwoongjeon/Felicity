import styled from "styled-components";

export const ContentLayout = styled.div`
    width : 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr 2fr 3fr;
    grid-template-areas:
        "sche emer"
        "sche conv"
        "reco conv"
        "pres pres";
    background-color : #F8F9FA;
    gap: 10px;
    padding-bottom: 20px;
    padding-right: 20px;
`;

export const EmergencyBox = styled.div`
    grid-area:emer;
`;

export const ScheduleBox = styled.div`
    grid-area: sche;
    max-height:400px;
`;

export const RecordBox = styled.div`
    grid-area: reco;
    max-height:400px;
`;

export const PrescriptionBox = styled.div`
    grid-area: pres;

`;

export const ConversationBox = styled.div`
    grid-area: conv;
    max-height:610px;
`;


