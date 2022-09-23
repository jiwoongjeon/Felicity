import React from "react";
import Video from '../Video';
import Title from '../Title';

import Infos from '../Infos';
import Timer from '../Timer';


import {
    ContentLayout,
    Empty,
    TitleBox,
    VideoBox,
    InfoBox
} from "./styles";

const Layout = ({ context }) => {
    return (
        <div className="Layout">
            <ContentLayout>

                <VideoBox>
                    <Video context={context} />
                </VideoBox>

                <Empty>
                    <Timer role={context.role}/>
                </Empty>

                <TitleBox>
                    <Title />
                </TitleBox>

                <InfoBox>
                    <Infos/>
                </InfoBox>

            </ContentLayout>
        </div>
    );
};

export default Layout;