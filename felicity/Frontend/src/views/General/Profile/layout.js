import styled from "styled-components";

export const ContentLayout = styled.div`
    width : 100%;
    min-width: 900px;
    height: 100%;
    min-height: 700px;
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        "info info2";
    background-color : #F8F9FA;
    gap: 25px;
    position: relative;
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

export const UserInfo = styled.div`
    grid-area:info;
    width:100%;
    height: 90%;
    margin-left: 30px;
`;

export const UserInfo2 = styled.div`
    grid-area:info2;
    width:100%;
    height: 90%;
`;

