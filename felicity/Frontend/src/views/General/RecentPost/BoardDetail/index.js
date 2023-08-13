import React, { useEffect } from "react";
import TextField from '@mui/material/TextField';
import moment from "moment";
import { CacheProvider } from "@emotion/react";
import { SocketContext } from "../../../../API/video";


const { BoardContainer, Column, Search, SearchContent, SearchIcon, Divider, ContentContainer, Title, ContentSubContainer, PhotoArea, WrittenBy, WrittenByLabel,
    State, UnState, Date, Content, ReplyBtn, Blank, BottomBoardContainer, WrittenByBottom, TitleBottom, DateBottom, StateBottom, UnStateBottom, WriteContainer,
    WriteSubContainer, ColumnTitle, SubmitBtn, CancelBtn, SymptomsContainer, SymptomsBubble, SymptomsBubbleUnchecked, OtherBox, BackButtom,
    Comment, 
    DateComment,
    MHT} = require('./styles')

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
    const role = JSON.parse(sessionStorage.getItem("role"))
    const [isReply, setReplyState] = React.useState(false)
    const [content, setContent] = React.useState('');
    const [comment, setComment] = React.useState([]);
    var MHTData;
    var post_content = '';
    var wounded_area, depart, time, severity, reason = '';

    if (props.data.content.includes("Wounded area")) {
        MHTData = props.data.content.split("\n",5);
        wounded_area = MHTData[0].split(": ")[1];
        depart = MHTData[1].split(": ")[1];
        time = MHTData[2].split(": ")[1];
        severity = MHTData[3].split(": ")[1];
        reason = MHTData[4].split(": ")[1];
        post_content = props.data.content.split("Expected reason: ")[1].split(reason)[1]
        if (post_content == '' || post_content == '\n') {
            post_content = 'This post does not have a content.'
        }
    }
    else {
        post_content = props.data.content;
    }

    useEffect(() => {
        if (props.data.state) {
            console.log("DETAIL PAGE", props.data)
            props.readComment(props.data.id, setComment)
        }
    }, [])

    let button;
    const handleContent = (event) => { setContent(event.target.value); };

    function sendComment() {
        setReplyState(false)
        if(props.data.state == 0) props.data.state = 1
        props.sendComment(props.data.id, role, jwt, content, setComment)
    }

    function back() {
        props.setIsBoard(false)
        props.GetPage(props.page, true)
    }

    if (content == '') { button = <CancelBtn onClick={({ target }) => setReplyState(!isReply)}>Cancel</CancelBtn> }
    else { button = <SubmitBtn onClick={() => sendComment()}>Submit</SubmitBtn> }

    return(
        <BoardContainer>
            <Column>
                <BackButtom onClick={({ target }) => back()}>Back</BackButtom>
            </Column>
            <Divider />
                <ContentContainer>
                    <ContentSubContainer>
                        <Title>Q: {props.data.title}</Title>
                        <Date>{props.data.category}</Date>
                        <Column>
                            { props.data.state === 1 && <State>Answered</State>}
                            { props.data.state === 0 && <UnState>Not Answered</UnState>}
                        </Column>
                        <Date>Posted on {props.data.date}</Date>
                    </ContentSubContainer>
                    <Divider />

                    <ContentSubContainer>
                        <Content>{post_content}</Content>
                    </ContentSubContainer>
                    <ContentSubContainer>
                        <Divider />
                        <UnState>Medical Health Form</UnState>
                        <MHT>
                            Wounded area: {wounded_area}<br />
                            Expected Department: {depart}<br />
                            Injured time: {time}<br />
                            Severity: {severity}<br />
                            Expected reason: {reason}<br />
                        </MHT>
                        <Column>
                            {sy([props.data.symptoms.cough, props.data.symptoms.vomit, props.data.symptoms.fever, props.data.symptoms.sore_throat,
                                props.data.symptoms.phelgm, props.data.symptoms.runny_nose, props.data.symptoms.nauseous, props.data.symptoms.out_of_breath,
                                props.data.symptoms.stomachache, props.data.symptoms.chills, props.data.symptoms.muscle_sickness,
                                props.data.symptoms.other]).map((symptom) => (
                                <SymptomsBubble>{symptom}</SymptomsBubble>
                            ))}
                        </Column>
                    </ContentSubContainer>
                    <Blank />
                    <Divider />

                    <ContentSubContainer>
                        <UnState>Comments</UnState>
                        {(props.data.state === 1 && props.commentsLoad) ?? comment.map((c) => (
                            <>
                                <Column>
                                    {c.role === 1 && <State>Patient's Reply:</State>}
                                    {c.role === 0 && <UnState>Doctor's reply: {c.firstname + " " + c.lastname}</UnState>}
                                    <DateComment>{c.time}</DateComment>
                                </Column>
                                <Comment>{c.comment}</Comment>
                                <Divider />
                            </>
                        ))}
                        <Column>
                            {/* <PhotoArea img={props.userData.img}/> */}
                            {!isReply && 
                                <ReplyBtn onClick={({ target }) => setReplyState(!isReply)}>Reply</ReplyBtn>}
                            {isReply && 
                                <WriteContainer>
                                    <WriteSubContainer>
                                        <TextField rows={18} multiline fullWidth variant="standard" placeholder="Write Contents..." value={content} onChange={handleContent}/>
                                    </WriteSubContainer>
                                    <Divider />
                                    {button}
                                </WriteContainer>}
                        </Column>
                    </ContentSubContainer>


                </ContentContainer>
            <Divider />
        </BoardContainer>
    );
}

export default BoardDetail;
