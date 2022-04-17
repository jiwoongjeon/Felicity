import React from "react";

import {
MainContainer,
ParentDirectory,
CurrentDirectory,
Directory,
Title,
} from "./styles";

const Path = (props) => {
  return (
  <MainContainer>
    <Directory>
        <ParentDirectory>Pages /</ParentDirectory>
        <CurrentDirectory>{props.directory}</CurrentDirectory>
    </Directory>

    {props.meeting &&
      <Title>{props.title}</Title>}
      
  </MainContainer>

  );
};

export default Path;