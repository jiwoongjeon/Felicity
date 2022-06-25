import React from "react";
import { IoMdSearch } from "react-icons/io";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import TextField from '@mui/material/TextField';


const { BoardContainer, Column, Search, SearchContent, SearchIcon, Divider, ContentContainer, Title, ContentSubContainer, PhotoArea, WrittenBy, WrittenByLabel,
    State, UnState, Date, Content, ReplyBtn, Blank, BottomBoardContainer, WrittenByBottom, TitleBottom, DateBottom, StateBottom, UnStateBottom, WriteContainer,
    WriteSubContainer, ColumnTitle, SubmitBtn, CancelBtn, SymptomsContainer, SymptomsBubble, SymptomsBubbleUnchecked, OtherBox, BackButtom,
    Comment } = require('./styles')

    function sy(array) {
        var array1 = []
        if (array[0] === 1) {
            array1.push("Cough")
        }
        if (array[1] === 1) {
            array1.push("Vomit")
        }
        if (array[2] === 1) {
            array1.push("Fever")
        }
        if (array[3] === 1) {
            array1.push("Sore Throat")
        }
        if (array[4] === 1) {
            array1.push("Phlegm")
        }
        if (array[5] === 1) {
            array1.push("Runny Nose")
        }
        if (array[6] === 1) {
            array1.push("Nauseous")
        }
        if (array[7] === 1) {
            array1.push("Out of Breath")
        }
        if (array[8] === 1) {
            array1.push("Stomachache")
        }
        if (array[9] === 1) {
            array1.push("Chills")
        }
        if (array[10] === 1) {
            array1.push("Muscle Sickness")
        }
        if (array[11] != "") {
            array1.push(array[11])
        }
        return array1
    };

export const BoardDetail = (props) => {

    const jwt = JSON.parse(sessionStorage.getItem("jwt"))
    const [isReply, setReplyState] = React.useState(false)
    const [content, setContent] = React.useState('');
    const [comment, setComment] = React.useState('');

    let button;
    const handleContent = (event) => { setContent(event.target.value); };

    function sendComment() {
        setComment(content)
        setReplyState(false)
        props.sendComment(props.data.id, jwt, content)
    }

    if (content == '') { button = <CancelBtn onClick={({ target }) => setReplyState(!isReply)}>Cancel</CancelBtn> }
    else { button = <SubmitBtn onClick={() => sendComment()}>Submit</SubmitBtn> }

    return(
        <BoardContainer>
            <Column>
                <BackButtom onClick={({ target }) => props.setIsBoard(false)}>Back</BackButtom>
            </Column>
            <Divider />
                <ContentContainer>
                    <ContentSubContainer>
                        <Title>Q: {props.data.title}</Title>
                        <Date>{props.data.category}</Date>
                        {/* <Column>
                            <PhotoArea img={data.img}/>
                            <ContentSubContainer>
                                <WrittenByLabel>Written By</WrittenByLabel>
                                <WrittenBy>{data.writer}</WrittenBy>
                            </ContentSubContainer>
                        </Column> */}
                        <Column>
                            { props.data.state === 1 && <State>Answered</State>}
                            { props.data.state === 0 && <UnState>Not Answered</UnState>}
                        </Column>
                        <Date>Posted on {props.data.date}</Date>
                    </ContentSubContainer>
                    <Divider />

                    <ContentSubContainer>
                        <Content>{props.data.content}</Content>
                    </ContentSubContainer>
                    <ContentSubContainer>
                        {sy([props.data.symptoms.cough, props.data.symptoms.vomit, props.data.symptoms.fever, props.data.symptoms.sore_throat,
                            props.data.symptoms.phelgm, props.data.symptoms.runny_nose, props.data.symptoms.nauseous, props.data.symptoms.out_of_breath,
                            props.data.symptoms.stomachache, props.data.symptoms.chills, props.data.symptoms.muscle_sickness,
                            props.data.symptoms.other]).map((symptom) => (
                            <SymptomsBubble>{symptom}</SymptomsBubble>
                        ))}
                    </ContentSubContainer>
                    <Blank />
                    <Divider />

                    <ContentSubContainer>
                        <State>Comment</State>
                        <Comment>{comment}</Comment>
                    </ContentSubContainer>

                    {props.isDoctor && 
                        <Column>
                        {/* <PhotoArea img={props.userData.img}/> */}
                        {!isReply && 
                            <ReplyBtn onClick={({ target }) => setReplyState(!isReply)}>
                                Reply</ReplyBtn>}
                        {isReply && 
                            <WriteContainer>
                                <WriteSubContainer>
                                    <TextField rows={18} multiline fullWidth variant="standard" placeholder="Write Contents..." value={content} onChange={handleContent}/>
                                </WriteSubContainer>
                                <Divider />
                                {button}
                            </WriteContainer>}
                        </Column>
                    }
                </ContentContainer>
            <Divider />
        </BoardContainer>
    );
}

export default BoardDetail;