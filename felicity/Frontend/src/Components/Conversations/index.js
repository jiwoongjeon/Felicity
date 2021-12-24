import { Container, ConversationContainer, Header, IconArea, InfoArea, PhotoArea, Preview, ReplyBtn, Username } from "./styles";

const Data = [
  {
    id: 1,
    img: "https://i.imgur.com/mNJWYVi.png",
    username: "Dr.Lee",
    preview: "Hi! I need more\ninformations...",
  },
  {
    id: 2,
    img: "https://i.imgur.com/mNJWYVi.png",
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
          <PhotoArea img = {data.img}/>
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
