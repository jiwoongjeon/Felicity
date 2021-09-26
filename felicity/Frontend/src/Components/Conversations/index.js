import { Container, ConversationContainer, Header, IconArea, InfoArea, PhotoArea, Preview, ReplyBtn, Username } from "./styles";

const Data = [
  {
    id: 1,
    username: "Dr.Lee",
    preview: "Hi! I need more\ninformations...",
  },
  {
    id: 2,
    username: "Dr.Esra",
    preview: "Can you change...",
  },
];

export const Conversations = () => {
  return (
    <Container>
      <Header>Conversations</Header>
      {Data.map((data) => (
        <ConversationContainer>
          <PhotoArea></PhotoArea>
          <InfoArea>
            <Username>{data.username}</Username>
            <Preview>{data.preview}</Preview>
          </InfoArea>
          <IconArea>
            <ReplyBtn>REPLY</ReplyBtn>
          </IconArea>
        </ConversationContainer>
      ))}
    </Container>
  );
};

export default Conversations;
