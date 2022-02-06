import { useState } from "react";
import {CATEGORY_DATA, POST_DATA} from "./tempData";
import { IoMdSearch } from "react-icons/io";

const { PostContainer, Header, PostElementContainer, SymptomsContainer, Divider, SymptomsBubble, CategoryContainer, CategoryBubble,
    PostElement, Column, Date, NewestLabel, DateLabel, StateLabel, OldestLabel, Title, Content, ContentElement, State, UnState,
    Search, SearchIcon, SearchContent, WriteButton, ColumnBottom, PageContainer, PageNavigatorLabel, PageNumberLabel, PageNumber, PageNumberContainer } = require("./styles");


export const RecentPost = () => {


    return (
        <PostContainer>

            <Header>Recent Posts</Header>

            <CategoryContainer>
                {CATEGORY_DATA.map((category) => (
                    <CategoryBubble>{category.id}</CategoryBubble>
                ))}
            </CategoryContainer>

            <Column>
                <ContentElement>
                    <Column>
                        <NewestLabel>Newest</NewestLabel>
                        <OldestLabel>Oldest</OldestLabel>
                    </Column>
                </ContentElement>
                <DateLabel>DATE</DateLabel>
                <StateLabel>STATE</StateLabel>
            </Column>

            <PostElementContainer>
                <Divider />
                {POST_DATA.map((data, i) => (
                    <PostElement to={'./Board?' + data.id}>
                        <Column>
                            <ContentElement>
                                <Title>{data.title}</Title>
                                <Content>{data.content}</Content>
                                <SymptomsContainer>
                                    {POST_DATA[i].symptoms.map((symptom) => (
                                        <SymptomsBubble>{symptom.id}</SymptomsBubble>
                                    ))}
                                </SymptomsContainer>
                            </ContentElement>
                            <Date>{data.date}</Date>
                            { data.state && <State>Answered</State>}
                            { !data.state && <UnState>Not Answered</UnState>}
                        </Column>
                        <Divider></Divider>
                    </PostElement>

                    ))}
            </PostElementContainer>

            <ColumnBottom>
                <Search>
                    <SearchIcon><IoMdSearch style={{color: '#718096', fontSize: '20px'}}/></SearchIcon>
                    <SearchContent />
                </Search>
                <PageContainer>
                    <PageNavigatorLabel>Previous</PageNavigatorLabel>
                    <PageNumberContainer>
                    <PageNumberLabel>1</PageNumberLabel>
                    <PageNumber>2</PageNumber>
                    <PageNumber>3</PageNumber>
                    <PageNumber>4</PageNumber>
                    <PageNumber>5</PageNumber>
                    <PageNumber>...</PageNumber>
                    <PageNumber>10</PageNumber>
                    </PageNumberContainer>
                    <PageNavigatorLabel>Next</PageNavigatorLabel>
                </PageContainer>
                <WriteButton to={'./Newpost'}>Write A New Post</WriteButton>
            </ColumnBottom>

        </PostContainer>
    );
}

export default RecentPost;