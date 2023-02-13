import styled from "styled-components";

export const InfoBoxContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 6%;
    border-radius: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    box-shadow: 0px 5.25px 8.25px rgba(0, 0, 0, 0.02);
`;

export const Label = styled.p`
    color: black;
    font-size: large;
    font-weight: bold;
    margin: 10px 0px 10px 0px;
`;

export const Content = styled.div`
    width: 100%;
    height: 90%;
    padding: 5%;
    margin-top: 3px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    background-color: #F8F9FA;
    text-align: left;
    row-gap: 5px;
`;

export const Name = styled.p`
    font-size: large;
    font-weight: bold;
    color: #718096;
`;

export const Line = styled(Name)`
    font-size: medium;
    font-weight: 500;
`;

export const SymptomBubble = styled.div`
    width: 60%;
    border-radius: 5px;
    color: white;
    background-color: #48BB78;
`;