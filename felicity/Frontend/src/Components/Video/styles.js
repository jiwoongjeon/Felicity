import styled from "styled-components";
export const MainContainer = styled.div`
    width: 100%;
    min-width: 300px;
    height: 100%;
    min-height: 600px;
    position: relative;
    background-color: grey;
    border-radius : 20px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);

`;

export const MainVideoContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 50;
`;

export const VideoContainer = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const SubtitleContainer = styled.div`
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position:absolute;
    z-index: 250;
    bottom: 80px;
`;

export const RecordBox = styled.div`
    width: 100%;
    height: 40px;
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
    border-radius : 20px;
`;

export const Block = styled.div`
    width: 40%;
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
    width: 25%;
    height: 50%;
    position:absolute;

    margin-left:auto;
    margin-right: 18.5px;
    border-radius : 15px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: end;
    z-index: 200;
`;

export const Name = styled.div`
    width: 80%;
    height: 24.02px;
    background-color: rgba(255, 255, 255, 0.82);
    border: 2px solid;
    border-radius: 5px;
    border-color: white;
    font-size: 12.6px;
    color: #2D3748;
    font-weight: 650;
    line-height: 24.02px;
    margin-bottom: 20px;
    margin-left: 10%;
`;

export const Setting = styled.div`
    width: 100%;
    height: 60px;
    display:flex;
    flex-direction: row;

    position:absolute;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.75);
    border: none;
    bottom: 0;
`;
export const IconLeft = styled.div`
    display:flex;
    flex-direction: row;
    border: none;
`;

export const IconRight = styled.div`
position: absolute;
    display:flex;
    flex-direction: row;
    border: none;
    right: 10px;
`;

export const IconBox = styled.div`
    margin: 5px 0px 0px 25px;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: #959595;
    line-height: 50px;
`;

export const Phone = styled.button`
    margin: 5px 0px 0px 20px;
    width: 52px;
    height: 52px;
    border: none;
    border-radius: 50%;
    background-color: #CF4942;
    line-height: 50px;
    align: right;
`;


