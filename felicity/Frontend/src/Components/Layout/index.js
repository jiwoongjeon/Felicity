import React from "react";
import Video from '../Video';
import Title from '../Title';
import Information from '../Information';
import Infos from '../Infos';
import Timer from '../Timer';


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

    <Empty>
        <Timer />
    </Empty>

    <TitleBox>
        <Title />
    </TitleBox>

    <InfoBox>
    <Infos />
    </InfoBox>

    </ContentLayout>
    </div>
  );
};

export default Layout;