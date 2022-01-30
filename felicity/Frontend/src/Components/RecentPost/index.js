import { useState } from "react";
import {CATEGORY_DATA, POST_DATA} from "./tempData";
import { IoMdSearch } from "react-icons/io";

const { PostContainer, Header, PostElementContainer, SymptomsContainer, Divider, SymptomsBubble, CategoryContainer, CategoryBubble,
    PostElement, Column, Date, NewestLabel, DateLabel, StateLabel, OldestLabel, Title, Content, ContentElement, State, UnState,
    Search, SearchIcon, SearchContent, WriteButton } = require("./styles");


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
                    <PostElement>
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
                            { data.state && 
                            <State>Answered</State>}
                            { !data.state && 
                            <UnState>Not Answered</UnState>}
                        </Column>
                        <Divider></Divider>
                    </PostElement>
                    
                    
                    ))}
            </PostElementContainer>

            <Column>
                <Search>
                    <SearchIcon><IoMdSearch style={{color: '#718096', fontSize: '20px'}}/></SearchIcon>
                    <SearchContent />
                </Search>
                <WriteButton to={'/newpost'}>Write A New Post</WriteButton>
            </Column>

        </PostContainer>
    );
}

export default RecentPost;