import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const { PostContainer, Header, PostElementContainer, SymptomsContainer, Divider, SymptomsBubble, CategoryContainer, CategoryBubble,
    PostElement, Column, Date, NewestLabel, DateLabel, StateLabel, OldestLabel, Title, Content, ContentElement, State, UnState,
    Search, SearchIcon, SearchContent, WriteButton, ColumnBottom, PageContainer, PageNavigatorLabel, PageNumberLabel, PageNumber, PageNumberContainer,
    CategoryBubbleSelected, NewestLabelSelected, OldestLabelSelected, Column_alert} = require("./styles");
    

export const RecentPost = (props) => {

    let page = props.pageData.current_page;
    let last = props.pageData.last_page;
    let index = props.index;
    let offset = index * 5;
    let page_index = page - offset;

    const PageButton = () => {
        return (
            <PageNumberContainer>
                {index > 0 && <PageNumber onClick={props.IndexReduction}>...</PageNumber>}
                {page_index === 1 && <PageNumberLabel >{page}</PageNumberLabel>}
                {page_index !== 1 && 
                    <PageNumber onClick={({target}) => props.GetPage(offset + 1)}>{offset + 1}</PageNumber>}

                {page_index === 2 && <PageNumberLabel>{page}</PageNumberLabel>}
                {page_index !== 2 && offset + 2 <= last && 
                    <PageNumber onClick={({target}) => props.GetPage(offset + 2)}>{offset + 2}</PageNumber>}

                {page_index === 3 && <PageNumberLabel>{page}</PageNumberLabel>}
                {page_index !== 3 && offset + 3 <= last && 
                    <PageNumber onClick={({target}) => props.GetPage(offset + 3)}>{offset + 3}</PageNumber>}

                {page_index === 4 && <PageNumberLabel>{page}</PageNumberLabel>}
                {page_index !== 4 && offset + 4 <= last && 
                    <PageNumber onClick={({target}) => props.GetPage(offset + 4)}>{offset + 4}</PageNumber>}

                {page_index === 5 && <PageNumberLabel>{page}</PageNumberLabel>}
                {page_index !== 5 && offset + 5 <= last && 
                    <PageNumber onClick={({target}) => props.GetPage(offset + 5)}>{offset + 5}</PageNumber>}

                {last > index * 5 + 5 && <PageNumber onClick={props.IndexIncrement}>...</PageNumber>}

            </PageNumberContainer>
        )
    }

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
                <DateLabel>CATEGORY</DateLabel>
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
                                    {/* Symptom 데이터 형식이 바꼈습니다잉 */}
                                    {/* {props.postData[i].symptoms.map((symptom) => (
                                        <SymptomsBubble>{symptom.id}</SymptomsBubble>
                                    ))} */}
                                </SymptomsContainer>
                            </ContentElement>
                            <Date>{data.category}</Date>
                            <Date>{data.date}</Date>
                            { data.state && <State>Answered</State>}
                            { !data.state && <UnState>Not Answered</UnState>}
                        </Column>
                        <Divider/>
                    </PostElement> ))}

                {!props.postData[0] && <Column_alert>There is no post to show</Column_alert>}

            </PostElementContainer>

            <ColumnBottom>
                <Search>
                    <SearchIcon><IoMdSearch style={{color: '#718096', fontSize: '20px'}}/></SearchIcon>
                    <SearchContent />
                </Search>
                <PageContainer>
                    <PageNavigatorLabel onClick={({target}) => props.GetPage(page--)}>Previous</PageNavigatorLabel>
                        <PageButton />
                    <PageNavigatorLabel onClick={({target}) => props.GetPage(page++)}>Next</PageNavigatorLabel>
                </PageContainer>
                {!props.isDoctor && <WriteButton to={'./Newpost'}>Write A New Post</WriteButton>}
            </ColumnBottom>

        </PostContainer>
    );
}

export default RecentPost;