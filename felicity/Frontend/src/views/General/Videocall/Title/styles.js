import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border-radius : 20px;
    box-shadow: 0px 5.25px 8.25px rgba(0, 0, 0, 0.02);
`;

export const TitleContainer = styled.div`
    margin-left: 25px;
    font-size: 20px;
    font-weight: bold;
    color:#2D3748;
`;

export const ButtonContainer = styled.div`
    width: 20%;
    min-height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 25px;
`;

export const IconBox = styled.button`
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: #959595;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    :hover {
        border: 1px solid;
        border-color: #FFFFFF;
    }
`;

export const End = styled(Link)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #CF4942;
    display: flex;
    justify-content: center;
    align-items: center;
`;