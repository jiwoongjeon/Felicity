import { AiFillCamera } from "react-icons/ai";

const { NewBoardContainer, Header, WriteContainer, TitleInput, ContentInput, WriteSubContainer, SubmitBtn, Column, Divider  } = require('./styles')


export const BoardNew = (props) => {

    return(
        <NewBoardContainer>
            <Header>New Question</Header>

            <WriteContainer>
                <TitleInput />
                <Divider />

                <WriteSubContainer>
                    <Column>
                        <AiFillCamera style={{color: '#000', fontSize: '20px', alignItems:'left'}}></AiFillCamera>
                    </Column>

                    <Divider />

                    <ContentInput 
                    rows = '5'/>

                </WriteSubContainer>
                <Divider />
                <SubmitBtn>Submit</SubmitBtn>

            </WriteContainer>

        </NewBoardContainer>

    );
}