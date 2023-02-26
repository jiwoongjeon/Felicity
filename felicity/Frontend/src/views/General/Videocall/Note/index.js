import { useState, useEffect, useContext } from 'react';
import { NoteContainer, Label, Text } from "./styles";
import { SocketContext } from "../../../../API/video";

export const Note = (props) => {
    const { ReadNote, rid } = useContext(SocketContext);
    const [isNote, setIsNote] = useState(false);

    useEffect(() => {
        ReadNote(rid, setIsNote, props.setNote);
    }, [])

    return (
        <NoteContainer>
            <Label>Note</Label>
            {isNote ? <Text placeholder='Type here ...' value={props.note} onChange={({ target }) => props.setNote(target.value)}/>
            : <Text disabled={true} placeholder='Loading...'/> }
        </NoteContainer>
    );
};

export default Note;