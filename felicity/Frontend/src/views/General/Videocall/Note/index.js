import { useState, useEffect, useContext } from 'react';
import { NoteContainer, Label, Text, NoteBackground, SaveBtn, Row } from "./styles";
import { SocketContext } from "../../../../API/video";

export const Note = (props) => {
    const { ReadNote, rid } = useContext(SocketContext);
    const [isNote, setIsNote] = useState(false);

    useEffect(() => {
        ReadNote(rid, setIsNote, props.setNote);
    }, [])

    return (
        <NoteContainer>
            <Row>
                <Label>Note</Label>
                <SaveBtn>Save Note</SaveBtn>
            </Row>
            
            <NoteBackground>
                {isNote ? <Text placeholder='Type here ...' value={props.note} onChange={({ target }) => props.setNote(target.value)}/> : <Text disabled={true} placeholder='Loading...'/> }
            </NoteBackground>            
        </NoteContainer>
    );
};

export default Note;