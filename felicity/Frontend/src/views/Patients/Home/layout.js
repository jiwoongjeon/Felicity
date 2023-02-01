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
    margin-left: 30px;

`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 300;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(36,36,36,0.6);
    border-radius : 20px;
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

export const Button = styled.button`
    width: 150px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0075FF;
    border-radius: 15px;
    margin: 30px 25px 25px 25px;
    border: 0;
    outline: 0;
    color: white;
    font-size: 15px;
    font-weight: 550;
    line-height: 10px;
`;
export const Block = styled.div`
    width: 30%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 15px;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 15px;
    font-weight: 600;
    line-height: 10px;
`;
