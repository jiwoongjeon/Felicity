import styled from "styled-components";

export const ContentLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
    "calen info"
    "plist info";
    grid-gap: 15px;
`;

export const CalendarBox = styled.div`
    grid-area: calen;
    background-color: #FFFFFF;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 350px;
    box-shadow: 0px 4px 5px 0px #EDEEEF;
`;

export const InfoBox = styled.div`
    grid-area: info;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0px 4px 5px 0px #EDEEEF;
`;

export const PatientBox = styled.div`
    grid-area: plist;
    border-radius: 20px;
    box-shadow: 0px 4px 5px 0px #EDEEEF;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
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

