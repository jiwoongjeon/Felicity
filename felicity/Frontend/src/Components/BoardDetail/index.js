import { IoMdSearch } from "react-icons/io";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { BOARD_DATA, USER_DATA } from "./tempData";

const { BoardContainer, Column, Search, SearchContent, SearchIcon, Divider, ContentContainer, Title, ContentSubContainer, PhotoArea, WrittenBy, WrittenByLabel,
    State, UnState, Date, Content, ReplyBtn, Blank, BottomBoardContainer, WrittenByBottom, TitleBottom, DateBottom, StateBottom, UnStateBottom } = require('./styles')


export const BoardDetail = (props) => {

    return(
        <BoardContainer>
            <Column>
                <Search>
                    <SearchIcon><IoMdSearch style={{color: '#718096', fontSize: '20px'}}/></SearchIcon>
                    <SearchContent />
                </Search>
            </Column>
            <Divider />
            {BOARD_DATA.map((data, i) => (
                <ContentContainer>
                    <ContentSubContainer>
                        <Title>Q: {data.title}</Title>
                        <Column>
                            <PhotoArea img={data.img}/>
                            <ContentSubContainer>
                                <WrittenByLabel>Written By</WrittenByLabel>
                                <WrittenBy>{data.writer}</WrittenBy>
                            </ContentSubContainer>
                        </Column>
                        <Column>
                            { data.state && <State>Answered</State>}
                            { !data.state && <UnState>Not Answered</UnState>}
                            <Date>{data.date}</Date>
                        </Column>
                    </ContentSubContainer>
                    <Divider />

                    <ContentSubContainer>
                        <Content>{data.content}</Content>
                    </ContentSubContainer>
                    <Divider />

                    <ContentSubContainer>
                        <Blank />
                        {USER_DATA.map((user, i) => (
                            <Column>
                                <PhotoArea img={user.img}/>
                                <ReplyBtn>Reply</ReplyBtn>
                            </Column>
                        ))}
                        <Blank />
                    </ContentSubContainer>
                    
                </ContentContainer>
            ))}

            <Divider />
                {BOARD_DATA.map((data, i) => (
                    <BottomBoardContainer>
                        <GoTriangleUp style={{color: '#545455', marginTop: '10px'}}></GoTriangleUp>
                        <WrittenByBottom>{data.up_writer}</WrittenByBottom>
                        <TitleBottom>{data.up_title}</TitleBottom>
                        <DateBottom>{data.up_date}</DateBottom>
                        { data.up_status && <StateBottom>Answered</StateBottom>}
                        { !data.up_status && <UnStateBottom>Not Answered</UnStateBottom>}
                    </BottomBoardContainer>
                ))}
            <Divider />
                {BOARD_DATA.map((data, i) => (
                    <BottomBoardContainer>
                        <GoTriangleDown style={{color: '#545455', marginTop: '10px'}}></GoTriangleDown>
                        <WrittenByBottom>{data.down_writer}</WrittenByBottom>
                        <TitleBottom>{data.down_title}</TitleBottom>
                        <DateBottom>{data.down_date}</DateBottom>
                        { data.down_status && <StateBottom>Answered</StateBottom>}
                        { !data.down_status && <UnStateBottom>Not Answered</UnStateBottom>}
                    </BottomBoardContainer>
                ))}
            <Divider />
        </BoardContainer>
    );
}