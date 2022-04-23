import styled from "styled-components";

export const ContentLayout = styled.div`
    width : 100%;
    min-width: 900px;
    height: 100%;
    min-height: 700px;
    display: grid;

    grid-template-columns: 1fr 1.3fr;
    grid-template-rows: 1fr 1fr 8fr;
    grid-template-areas:
        "list info"
        "list info"
        "list info";
    background-color : #F8F9FA;
    gap: 10px;
    padding-right: 20px;
    position: relative;
`;

export const InfoBox = styled.div`
width: 100%;
height: 100%;
min-width: 350px;
grid-area:info;
position: absolute;
z-index: 200;
`;

export const PatientBox = styled.div`
min-width: 350px;
height: 100%;
grid-area: list;
position: absolute;
z-index: 200;
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

