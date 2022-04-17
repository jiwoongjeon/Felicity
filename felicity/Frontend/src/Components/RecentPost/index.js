import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const { PostContainer, Header, PostElementContainer, SymptomsContainer, Divider, SymptomsBubble, CategoryContainer, CategoryBubble,
    PostElement, Column, Date, NewestLabel, DateLabel, StateLabel, OldestLabel, Title, Content, ContentElement, State, UnState,
    Search, SearchIcon, SearchContent, WriteButton, ColumnBottom, PageContainer, PageNavigatorLabel, PageNumberLabel, PageNumber, PageNumberContainer,
    CategoryBubbleSelected, NewestLabelSelected, OldestLabelSelected, Column_alert} = require("./styles");
    

export const RecentPost = (props) => {


    return (
        <PostContainer>

            <Header>Recent Posts</Header>

            <CategoryContainer>
                {!props.allSelect && <CategoryBubble onClick={({target}) => props.setToAll()}>
                    All Clinics</CategoryBubble>}
                {props.allSelect && <CategoryBubbleSelected>
                    All Clinics</CategoryBubbleSelected>}

                {!props.internalSelect && <CategoryBubble onClick={({target}) => props.setToInternal()}>
                    Internal Medicine</CategoryBubble>}
                {props.internalSelect && <CategoryBubbleSelected>
                    Internal Medicine</CategoryBubbleSelected>}

                {!props.EBinSelect && <CategoryBubble onClick={({target}) => props.setToEBin()}>
                    Ear-Nose-And-Throat Department</CategoryBubble>}
                {props.EBinSelect && <CategoryBubbleSelected>
                    Ear-Nose-And-Throat Department</CategoryBubbleSelected>}
                    
                {!props.orthopedicsSelect && <CategoryBubble onClick={({target}) => props.setToOrthopedics()}>
                    Orthopedics</CategoryBubble>}
                {props.orthopedicsSelect && <CategoryBubbleSelected>
                    Orthopedics</CategoryBubbleSelected>}
                    
            </CategoryContainer>

            <Column>
                <ContentElement>
                    <Column>
                        {props.newestSelect && <NewestLabelSelected>Newest</NewestLabelSelected>}
                        {!props.newestSelect && <NewestLabel onClick={({target}) => props.setToNewest()}>
                            Newest</NewestLabel>}

                        {props.oldestSelect && <OldestLabelSelected>Oldest</OldestLabelSelected>}
                        {!props.oldestSelect && <OldestLabel onClick={({target}) => props.setToOldest()}>
                            Oldest</OldestLabel>}
                            
                    </Column>
                </ContentElement>
                <DateLabel>DATE</DateLabel>
                <StateLabel>STATE</StateLabel>
            </Column>

            <PostElementContainer>
                <Divider />
                {props.postData.map((data, i) => (
                    <PostElement to={'./Board?' + data.id}>
                        <Column>
                            <ContentElement>
                                <Title>{data.title}</Title>
                                <Content>{data.content}</Content>
                                <SymptomsContainer>
                                    {props.postData[i].symptoms.map((symptom) => (
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

                {!props.postData[0] && <Column_alert>There is no post to show</Column_alert>}

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
                {!props.isDoctor && <WriteButton to={'./Newpost'}>Write A New Post</WriteButton>}
            </ColumnBottom>

        </PostContainer>
    );
}

export default RecentPost;