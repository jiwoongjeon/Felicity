import styled from "styled-components";

export const ContentLayout = styled.div`
width : 100%;
min-width: 900px;
height: 100%;
min-height: 700px;

display: grid;
grid-template-columns: 0.8fr 0.02fr 1.4fr;
grid-template-rows: 1fr 0.25fr 1fr 8fr 0.25fr;
grid-template-areas:
"calen . info"
". . info"
"list . info"
"list . info"
". . .";

background-color : #F8F9FA;
// gap: 2%
position: relative;
`;

export const CalendarBox = styled.div`
background-color: #FFFFFF;
border-radius: 20px;
width: 100%;
hegiht: 100%;
min-width: 350px;
height: 100%;
grid-area: calen;
z-index: 200;
// position: relative;
box-shadow: 0px 4px 5px 0px #EDEEEF;
`;

export const InfoBox = styled.div`
width: 100%;
height: 100%;
min-width: 350px;
grid-area:info;
position: relative;
z-index: 200;
padding-right: 20px;
`;

export const PatientBox = styled.div`
min-width: 350px;
height: 100%;
grid-area: list;
position: relative;
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

