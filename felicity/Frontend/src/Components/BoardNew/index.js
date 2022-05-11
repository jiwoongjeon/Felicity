import React, { useContext } from "react";
import { AiFillCamera } from "react-icons/ai";
import TextField from '@mui/material/TextField';

import { SocketContext } from "../../API/video";

const { NewBoardContainer, Header, WriteContainer, WriteSubContainer, SubmitBtn, Column, Divider, ColumnTitle, SubmitBtnDisabled } = require('./styles')


export const BoardNew = () => {

    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');

    let button;
    const handleTitle = (event) => { setTitle(event.target.value); };
    const handleContent = (event) => { setContent(event.target.value); };

    const { sendPost } = useContext(SocketContext);

    if (title == '' || content == '') {
        button = <SubmitBtnDisabled>Submit</SubmitBtnDisabled>
    }
    else {
        button = <SubmitBtn onClick={() => sendPost(title, content)}> Submit</SubmitBtn >
    }

    return (
        <NewBoardContainer>
            <Header>New Question</Header>

            <WriteContainer>
                <ColumnTitle>
                    <TextField
                        fullWidth
                        defaultValue={title}
                        variant="standard"
                        placeholder="Title"
                        value={title}
                        onChange={handleTitle}
                    />
                </ColumnTitle>
                <Divider />

                <WriteSubContainer>
                    {/* <Column>
                        <AiFillCamera style={{color: '#000', fontSize: '20px', alignItems:'left'}}></AiFillCamera>
                    </Column>

                    <Divider /> */}

                    <TextField
                        rows={20}
                        multiline
                        fullWidth
                        variant="standard"
                        placeholder="Write Contents..."
                        value={content}
                        onChange={handleContent}
                    />

                </WriteSubContainer>
                <Divider />
                {button}

            </WriteContainer>

        </NewBoardContainer>

    );
}