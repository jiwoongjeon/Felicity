import styled from "styled-components";

export const ContentLayout = styled.div`
    width : 100%;
    height: 170%;
    display: grid;

    grid-template-columns: 2fr 1fr;
    grid-template-rows: 1fr 1fr 2fr 3fr;
    grid-template-areas:
        "sche emer"
        "sche conv"
        "reco conv"
        "pres conv";
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
`;

export const RecordBox = styled.div`
    grid-area: reco;
`;

export const PrescriptionBox = styled.div`
    grid-area: pres;
`;

export const ConversationBox = styled.div`
    grid-area: conv;
`;


