import React from "react";
import Video from '../Video';
import Title from '../Title';
import Information from '../Information';
import {
    ContentLayout,
    Empty,
    TitleBox,
    VideoBox,
    InfoBox
} from "./styles";

const Layout = () => {
  return (
  <div className="Layout">
    <ContentLayout>

    <VideoBox>
        <Video />
    </VideoBox>

    <Empty />
    <TitleBox>
        <Title />
    </TitleBox>

    <InfoBox>
    <Information />
    </InfoBox>

    </ContentLayout>
    </div>
  );
};

export default Layout;