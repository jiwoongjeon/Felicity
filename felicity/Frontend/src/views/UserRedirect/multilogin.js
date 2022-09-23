import React from "react";
import LogoImg from '../../Components/assets/Logo.png'
import { Block, Button, MainContainer, Row, SubTitle, Title, Logo } from "./styles.js"

function MultiLogin({isRole}) {

  return (
    <MainContainer>
      <Block>
        <Row>
          <Logo src={LogoImg} />
        </Row>
        <Title>Alert!</Title>
        <SubTitle> Your account was logged in at different location.</SubTitle>
        <Row>
          <Button to="/">Stay logged in</Button>
          <Button to="/">Logout</Button>
        </Row>
      </Block>
    </MainContainer>
  );
}

export default MultiLogin;

