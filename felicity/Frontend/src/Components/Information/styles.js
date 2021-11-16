import styled from "styled-components";

export const MainContainer = styled.div`
    width: 85%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-color : white;
    border-radius:20px;
    padding: 20px;

`;
export const PatientInfo = styled.div`
    display: flex;
    flex-direction: column;
    height: 30%;
    margin-bottom: 40px;
`;
export const PatientInfoTitle = styled.div`
    font-weight: 600;
    color : #2D3748;
    font-size: 18px;
    text-align: start;
    margin-bottom: 20px;
`;

export const PatientInfoBox = styled.div`
    width: 80%;
    border-radius:20px;
    background-color: #F8F9FA;
    text-align: start;
    padding: 27px;
`;
export const Label = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const Name = styled.text`
    color:#718096;
    font-size: 14px;
    font-weight:600;
`;

export const Cat = styled.text`
    color:#A0AEC0;
    font-size: 12px;
    font-weight:light;
    margin-right: 5px;
`;
export const Content = styled.text`
    color:#718096;
    font-size: 12px;
    font-weight:500;
`;
export const Info = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3px 0px;
`;

export const Symptom = styled.div`
    background-color : #48BB78;
    border-radius: 8px;
    font-size: 12px;
    color: white;
    font-weight:500;
    padding: 2px 12px;
    margin-right: 2px;
`;

export const ChatBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 60%;

`;

export const ChatScroll = styled.div`
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
`;


export const ChatTitle = styled.div`
    font-weight: 600;
    color:#2D3748;
    font-size: 18px;
    text-align: start;
    margin-bottom: 20px;
`;

export const ChatList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 16px;
`;

export const ChatName = styled.div`
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background-color: #C4C4C4;
    color:#2D3748;
    line-height: 52px;
    font-size: 14px;
    font-weight: 600;
`;
export const Chat = styled.div`
    width: 70%;
    background-color:#F8F9FA;
    font-size: 12px;
    border-radius: 12px;
    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export const ChatContent = styled.div`
    color: #718096;
    font-size: 12px;
    width: 80%;
    text-align: start;
`;
export const ChatTime = styled.div`
    color: #A0AEC0;
    font-size: 12px;
    width: 20%;
`;



export const Type = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #F8F9FA;
    border: 1px solid #000000;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 13px;
    margin-top: 17px;
`;
export const Block = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
`;
export const CheckList = styled.div`
    background-color: #0075FF;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 160px;
    height: 40px;
    padding-top: 12px;
    padding-bottom: 10px;
    padding-left: 17px;
    border-radius: 12px;

`;

export const CheckContent = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 40px;
`;

export const IconBox = styled.div`
    padding-right: 5px;
    font-size: 12px;
    cursor: pointer;
    color: #718096;
`;

export const TypeContent = styled.input.attrs({
    type: "text",
    placeholder: "Ask to your doctor or note something for yourself",
})`
    width: 100%;
    color:#718096;
    font-size: 12px;
    font-weight:500;
    border: none;
    outline: none;
    background-color: #F8F9FA;
`