import React, { useContext } from "react";
import { AiFillCamera } from "react-icons/ai";
import { InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';

const { NewBoardContainer, Header, WriteContainer, WriteSubContainer, SubmitBtn, Column, Divider, ColumnTitle, SubmitBtnDisabled } = require('./styles')


export const BoardNew = ({ sendPost }) => {

    const [title, setTitle] = React.useState('');
    const [category, setCategory] = React.useState('Select a category');
    const [content, setContent] = React.useState('');

    let button;
    const handleTitle = (event) => { setTitle(event.target.value); };
    const handleContent = (event) => { setContent(event.target.value); };
    const handleCategoryChange = (event) => { setCategory(event.target.value); };

    if (title == '' || content == '') {
        button = <SubmitBtnDisabled>Submit</SubmitBtnDisabled>
    }
    else {
        button = <SubmitBtn onClick={() => sendPost(title, content, category)}> Submit</SubmitBtn >
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
                <FormControl sx={{ minWidth: 300, textAlign: "left", marginLeft: 2, marginRight: 2 }}>
                    <InputLabel>Category</InputLabel>
                    <Select
                        value={category}
                        label="Category"
                        displayEmpty
                        onChange={handleCategoryChange}>
                        <MenuItem value={1}>All Clinics</MenuItem>
                        <MenuItem value={2}>Internal Medicine</MenuItem>
                        <MenuItem value={3}>Ear-Nose-And-Throat Department</MenuItem>
                        <MenuItem value={4}>Orthopedics</MenuItem>
                    </Select>
                </FormControl>
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