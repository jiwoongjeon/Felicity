import React from "react";

import {
MainContainer,
ParentDirectory,
CurrentDirectory,
Directory,
Title,
} from "./styles";

const Path = () => {
  return (
  <MainContainer>
    <Directory>
        <ParentDirectory>
        Pages /
        </ParentDirectory>
        <CurrentDirectory>
        Meeting
        </CurrentDirectory>
    </Directory>
    <Title>
        Meeting with your Doctor
    </Title>
  </MainContainer>

  );
};

export default Path;