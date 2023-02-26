import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100%;
    min-width: 300px;
    height: 100%;
    min-height: 600px;
    position: relative;
    background-color: grey;
    border-radius : 15px;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.02);
`;

export const MainVideoContainer = styled.div`
    width: 100%;
    height: 100%;
    /* position: static; */
`;

export const VideoContainer = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius : 5px;
    transform: rotateY(180deg);
    -webkit-transform:rotateY(180deg); /* Safari and Chrome */
    -moz-transform:rotateY(180deg); /* Firefox */
`;

export const SubtitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position:absolute;
    bottom: 3%;
    /* z-index: 250; */
`;

export const RecordBox = styled.div`
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Record = styled.button`
    margin: 5px 0px 0px 5px;
    width: 50px;
    height: 30px;
    border: none;
    border-radius: 10%;
    color : white;
    background-color: #CF4942;
    line-height: 25px;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const TextArea = styled.p`
    padding : 10px;
    border-radius: 10px;
    display: flex;
    color: ${props => props.color};
    text-align:center;
    background-color: rgba(0, 0, 0, 0.70);
    margin-bottom:0px;
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
    border-radius : 15px;
`;

export const Block = styled.div`
    width: 40%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 20px;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 15px;
    font-weight: 600;
    line-height: 10px;
`;

export const Button = styled.button`
    width: ${props => props.color? '250px' : '150px'};
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.color? props.color : '#0075FF'};
    border-radius: 15px;
    margin: 30px 25px 25px 25px;
    border: 0;
    outline: 0;
    color: white;
    font-size: 15px;
    font-weight: 550;
    line-height: 10px;
`;


export const Patient = styled.div`
    width: 20%;
    height: 35%;
    border-radius: 5px;
    position: absolute;
    top: 20px;
    left: 20px;
    /* z-index: 200; */
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
`;

export const Group = styled.div`
    width: 100%;
    height: 100%;
`;

export const Name = styled.div`
    width: 80%;
    border-radius: 5px;
    color: #2D3748;
    background-color: rgba(255, 255, 255, 0.82);
    font-weight: bold;
    align-self: center;
    position: absolute;
    bottom: 1%;
    left: 10%;
    margin: 0px 0px 6% 0px;
`;