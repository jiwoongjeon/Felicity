import React, { useContext } from "react";
import { AiFillCamera } from "react-icons/ai";
import { InputLabel, MenuItem, FormControl, Select, TextField } from '@mui/material';

const { NewBoardContainer, Header, WriteContainer, WriteSubContainer, SubmitBtn, Column, Divider, ColumnTitle, SubmitBtnDisabled } = require('./styles')


export const BoardNew = ({ sendPost }) => {

    let depart = sessionStorage.getItem("depart")
    let why = sessionStorage.getItem("why")
    let time
    let time_index = sessionStorage.getItem("time")

    if (time_index == 0) time = 'Less than 24 hours'
    if (time_index == 1) time = 'Less than 3 days'
    if (time_index == 2) time = 'Less than 1 week'
    if (time_index == 3) time = 'Less than 1 month'
    if (time_index == 4) time = 'More than 1 month'

    const [title, setTitle] = React.useState('');
    const [category, setCategory] = React.useState(depart);

    if (!depart) depart = 'None'
    if (!why) why = 'None'

    const [content, setContent] = React.useState(
        'Wounded area: ' + sessionStorage.getItem("where") + '\n' +
        'Expected Department: ' + depart + '\n' +
        'Injured time: ' + time + '\n' +
        'Severity: ' + sessionStorage.getItem("level") + ' out of 10' + '\n' +
        'Expected reason: ' + why + '\n'
    );

    let button;
    const handleTitle = (event) => { setTitle(event.target.value); };
    const handleContent = (event) => { setContent(event.target.value); };
    const handleCategoryChange = (event) => { setCategory(event.target.value); };

    //if (title == '' || category == '') button = <SubmitBtnDisabled>Submit</SubmitBtnDisabled>

    return (
        <NewBoardContainer>
            <Header>Post a New Question</Header>

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
                        label="Select a category"
                        displayEmpty
                        onChange={handleCategoryChange}>
                        <MenuItem value={1}>Unknown</MenuItem>
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
                <SubmitBtn onClick={() => sendPost(title, content, category)}>Submit</SubmitBtn >


            </WriteContainer>

        </NewBoardContainer>

    );
}