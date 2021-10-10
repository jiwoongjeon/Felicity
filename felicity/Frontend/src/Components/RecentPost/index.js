import { useState } from "react";
import {CATEGORY_DATA, POST_DATA} from "./tempData";

const { PostContainer, Header, PostElementContainer, SymptomsContainer, Divider, SymptomsBubble, CategoryContainer, CategoryBubble, PostElement, Column, No, Patient, Date, NoLabel, SymptomsLabel, DateLabel, Edit } = require("./styles");


export const RecentPost = () => {
    return (
        <PostContainer>

            <Header>Recent Posts</Header>

            <CategoryContainer>
                {CATEGORY_DATA.map((category) => (
                    <CategoryBubble>{category.id}</CategoryBubble>
                ))}
                <Edit>edit</Edit>
            </CategoryContainer>

            <Column>
                    <NoLabel>NO</NoLabel>
                    <Patient></Patient>
                    <SymptomsLabel>SYMPTOMS</SymptomsLabel>
                    <DateLabel>DATE</DateLabel>
            </Column>

            <PostElementContainer>
                <Divider />
                {POST_DATA.map((data, i) => (
                    <PostElement>
                        <Column>

                            <No>{data.no}</No>
                            <Patient>{data.patient}</Patient>
                            <SymptomsContainer>
                                {POST_DATA[i].symptoms.map((symptom) => (
                                    <SymptomsBubble>{symptom.id}</SymptomsBubble>
                                ))}
                            </SymptomsContainer>
                            <Date>{data.date}</Date>

                        </Column>
                        <Divider></Divider>
                    </PostElement>
                    
                    
                    ))}
            </PostElementContainer>

        </PostContainer>
    );
}

export default RecentPost;