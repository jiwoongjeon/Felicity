import React from "react";
import {
    MainContainer,
    TopHeader,
    Title,
    Context,
    Video,
    TitleContext,
    Patient,
    Img,
} from "./styles";

const MainScreen = () => {
  return (
    <MainContainer>
    <TopHeader>
    <Context>
        Pages  /  Meeting
    </Context>
    <Context>
        Meeting with your Doctor
    </Context>
    </TopHeader>


     <Title>
     <TitleContext>
        Dr. Daniel Thomas’s room with Mark Wilson
    </TitleContext>
    <TitleContext>
        Time left - 12:28
    </TitleContext>

    </Title>
    <Video>
    <Patient />
    </Video>

    </MainContainer>
  );
};

export default MainScreen;