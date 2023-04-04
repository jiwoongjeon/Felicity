import styled from "styled-components";

export const ContentLayout = styled.div`
    width : 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 0fr 1fr 4fr 1fr 0fr;
    grid-template-rows: 0fr 0.4fr 1fr 1fr 1fr 1fr 0fr;
    grid-template-areas:
        ". . . . ."
        ". info title timer ."
        ". info video timer ."
        ". note video chat ."
        ". note video chat ."
        ". note video chat ."
        ". . . . .";
    grid-gap: 10px;
`;

export const NoteBox = styled.div`
    grid-area: note;
    width: 100%;
    height: 100%;
`;

export const InfoBox = styled.div`
    grid-area: info;
    width: 100%;
    height: 100%;
`;

export const TimerBox = styled.div`
    grid-area: timer;
    place-self: center center;
    padding: 60px 0px 60px 0px;
    border-radius: 20px;
    background-color: #FFFFFF;
    box-shadow: 0px 5.25px 8.25px rgba(0, 0, 0, 0.02);
`;

export const TitleBox = styled.div`
    grid-area: title;
    align-self: center;
`;

export const ChatBox = styled.div`
    grid-area: chat;
`;

export const VideoBox = styled.div`
    grid-area: video;
`;

