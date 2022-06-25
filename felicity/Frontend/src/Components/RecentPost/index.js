import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

const { PostContainer, Header, PostElementContainer, SymptomsContainer, Divider, SymptomsBubble, CategoryContainer, CategoryBubble,
    PostElement, Column, Date, NewestLabel, DateLabel, StateLabel, OldestLabel, Title, Content, ContentElement, State, UnState,
    Search, SearchIcon, SearchContent, WriteButton, ColumnBottom, PageContainer, PageNavigatorLabel, PageNumberLabel, PageNumber, PageNumberContainer,
    CategoryBubbleSelected, NewestLabelSelected, OldestLabelSelected, Column_alert, Id} = require("./styles");

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
        if (array[11] !== "") {
            array1.push(array[11])
        }
        return array1
    };

export const RecentPost = (props) => {

    function board(i) {
        props.setBoard(props.postData[i])
        props.setIsBoard(true)
    }

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

                {!props.unknownSelect && <CategoryBubble onClick={({target}) => props.setToUnknown()}>
                    Unknown</CategoryBubble>}
                {props.unknownSelect && <CategoryBubbleSelected>
                    Unknown</CategoryBubbleSelected>}
                    
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
                {props.pageload > 0 & props.postload > 0 && props.postData.map((data, i) => (
                    <PostElement onClick={({ target }) => board(i)}>
                        <Column>
                            <Id>{data.id}</Id>
                            <ContentElement>
                                <Title>{data.title}</Title>
                                <Content>{data.content}</Content>
                                <SymptomsContainer>
                                    {sy([data.symptoms.cough, data.symptoms.vomit, data.symptoms.fever, data.symptoms.sore_throat,
                                        data.symptoms.phelgm, data.symptoms.runny_nose, data.symptoms.nauseous, data.symptoms.out_of_breath,
                                        data.symptoms.stomachache, data.symptoms.chills, data.symptoms.muscle_sickness,
                                        data.symptoms.other]).map((symptom) => (
                                        <SymptomsBubble>{symptom}</SymptomsBubble>
                                    ))}
                                </SymptomsContainer>
                            </ContentElement>
                            <Date>{data.category}</Date>
                            <Date>{data.date}</Date>
                            { data.state === 1 && <State>Answered</State>}
                            { data.state === 0 && <UnState>Not Answered</UnState>}
                        </Column>
                        <Divider/>
                    </PostElement> ))}

                {!props.postData[0] && <Column_alert>There is no post to show</Column_alert>}

            </PostElementContainer>
            <Divider/>

            <ColumnBottom>
                {/* <Search>
                    <SearchIcon><IoMdSearch style={{color: '#718096', fontSize: '20px'}}/></SearchIcon>
                    <SearchContent />
                </Search> */}
                <PageContainer>
                    {/* <PageNavigatorLabel onClick={({target}) => props.PageIncrement()}>Previous</PageNavigatorLabel> */}
                        <PageButton />
                    {/* <PageNavigatorLabel onClick={({target}) => props.PageReduction()}>Next</PageNavigatorLabel> */}
                </PageContainer>
                {!props.isDoctor && <WriteButton to={'./Newpost'}>Write A New Post</WriteButton>}
            </ColumnBottom>

        </PostContainer>
    );
}

export default RecentPost;