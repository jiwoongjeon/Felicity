import styled from "styled-components";

export const MainContainer = styled.div`
    width: 80%;
    height: 70%;
    display: flex;
    flex-direction: row;
    padding: 20px 20px 0px 20px;
    justify-content: space-around;
    vertical-align: middle;
`;

export const Search = styled.div`
    width: 50%;
    height: 38.64px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: white;
    border: 0.5px solid #E2E8F0;
    box-sizing: border-box;
    border-radius: 15px;
`;

export const SearchIcon = styled.div`
    width: 20px;
    height: 20px;
    border: none;
    outline: none;
    margin: 9px 9px 0 0;
    padding-left: 10px;
`;

export const SearchContent = styled.input.attrs({
    type: "text",
    placeholder: "Type here...",

})`
    width: 70px;
    margin-top: 9px;
    font-size: 14px;
    border: none;
    outline: none;
`;

export const Account = styled.div`
    width: 90px;
    height: 16px;
`;

export const AccountIcon = styled.div`
    font-size: 18px;
    background-color: #F8F9FA;
    color: #718096;
    font-weight: 500;
    border: none;
    outline: none;
    padding: 9px 0;
    cursor: pointer;
`;



export const Setting = styled.button`
    background-color:  #F8F9FA;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const Noti = styled.button`
    background-color:  #F8F9FA;
    border: none;
    outline: none;
    cursor: pointer;
`;





