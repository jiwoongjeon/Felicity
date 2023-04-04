import styled from "styled-components";
import { Link } from "react-router-dom";

export const Full = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    allign-items: center;
    background-color: #F8F9FA;
    vertical-align: center;
`;

export const PrescriptionContainer = styled.div`
    width: 800px;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-self: center;
    background-color: white;
    border-radius: 20px;
    margin-top: 10px;
    padding: 30px;
    box-shadow: 0px 4px 5px 0px #F0F0F0;
`;

export const Logo = styled.img`
    display:flex;
    align-self:center;
    width: 60px;
    height: auto;
    margin-top: 60px;
`;

export const Title = styled.div`
    // font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-color: black;
    font-size: 20px;
    padding: 10px 0px 10px 0px;
`;

export const Row = styled.div`
    width: 90%;
    height: 50px;
    align-self: center;
    display: flex;
    flex-direction: row;
    margin: 10px;
    // font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-color: black;
    font-size: 18px;
`;

export const Patient = styled.div`
    text-align: left;
    flex: 1;
`;

export const Doctor = styled.div`
    flex: 1;
    text-align: left;
`;

export const Date = styled.div`
    flex: 1;
    text-align: right;
`;

export const Department = styled.div`
    flex: 1;
    text-align: right;
`;

export const Label = styled.div`
    text-align: left;
    // font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    margin: 5% 0px 0px 10px;  
`;

export const Medication = styled.div`
    width: 100%;
    height: 40px;
    border: 0.5px solid #E2E8F0;
    padding-top: 5px;
    box-sizing: border-box;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: white;
`;

export const Amount = styled.div`
    width: 100%;
    height: 40px;
    border: 0.5px solid #E2E8F0;
    padding-top: 5px;
    box-sizing: border-box;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: white;
`;

export const DrugRoute = styled.div`
    width: 100%;
    height: 40px;
    border: 0.5px solid #E2E8F0;
    padding-top: 5px;
    box-sizing: border-box;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: white;
`;

export const Cautions = styled.div`
    width: 100%;
    height: 120px;
    border: 0.5px solid #E2E8F0;
    padding-top: 5px;
    box-sizing: border-box;
    font-size: 16px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #F0F0F0;
    padding: 5px;
`;

export const InputContainer = styled.div`
    width: 100%;
    height: 40px;
    padding-top: 5px;
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: #F0F0F0;
    padding: 5px;
`;

export const SmallInput = styled.input.attrs(({type}) => ({
    type:   type || "text",
    placeholder: "Required *"
}))`
    width: 95%;
    height: 80%;
    border: none;
    outline: none;
    font-size: 12px;
    // font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: black;
    background-color: #F0F0F0;
`;

export const RouteInput = styled.input.attrs(({type}) => ({
    type:   type || "text",
    placeholder: "Required * (ex: oral, injection, nasal etc)"
}))`
    width: 95%;
    height: 80%;
    border: none;
    outline: none;
    font-size: 12px;
    // font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: black;
    background-color: #F0F0F0;
`;

export const CautionInput = styled.input.attrs(({type}) => ({
    type:   type || "text",
    placeholder: "Required *"
}))`
    width: 95%;
    height: 80%;
    border: none;
    outline: none;
    font-size: 12px;
    // font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: black;
    background-color: #F0F0F0;
`;


export const SubmitButton = styled(Link)`
    width: 500px;   
    height: 40px;
    background-color: #0075FF;
    border-radius: 20px;
    margin-top: 20px;
    margin-left: 5px;
    margin-right: 5px;
    padding-top: 5px;
    border: 0;
    outline: 0;
    color: white;
    // font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-decoration:none;
    text-align:center;  
    &:hover {
      color: white;
      background-color: #3D7EFF;
    }
    &:active {
      color: white;
      background-color: #004FEB;
    }
`;

export const SubmitButtonDisabled = styled.div`
    width: 500px;
    height: 40px;
    background-color: #cccccc;
    border-radius: 20px;
    margin-top: 20px;
    margin-left: 5px;
    margin-right: 5px;
    padding-top: 5px;
    border: 0;
    outline: 0;
    color: white;
    // font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-decoration:none;
    text-align:center;
    cursor: not-allowed; 
    &:hover {
        color: white;
        background-color: #cccccc;
      }
`;