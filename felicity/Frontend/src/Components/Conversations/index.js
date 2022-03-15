import { propTypes } from "react-bootstrap/esm/Image";
import { Container, ConversationContainer, ConversationList, Header, IconArea, InfoArea, PhotoArea, Preview, ReplyBtn, Username } from "./styles";

const Data = [
  {
    id: 1,
    img: "",
    username: "Dr.Lee",
    preview: "Hi! I need more\ninformations...",
  },
  {
    id: 2,
    img: "https://i.imgur.com/mNJWYVi.png",
    username: "Dr.Esra",
    preview: "Can you change...",
  },
  {
    id: 2,
    img: "https://i.imgur.com/mNJWYVi.png",
    username: "Dr.Esra",
    preview: "Can you change...",
  },
  {
    id: 2,
    img: "https://i.imgur.com/mNJWYVi.png",
    username: "Dr.Esra",
    preview: "Can you change...",
  },
  {
    id: 2,
    img: "https://i.imgur.com/mNJWYVi.png",
    username: "Dr.Esra",
    preview: "Can you change...",
  },
  {
    id: 2,
    img: "https://i.imgur.com/mNJWYVi.png",
    username: "Dr.Esra",
    preview: "Can you change...",
  },
  {
    id: 2,
    img: "https://i.imgur.com/mNJWYVi.png",
    username: "Dr.Esra",
    preview: "Can you change...",
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
      <ConversationList>
        {Data.map((data) => (
          <ConversationContainer>
            <PhotoArea img = {data.img}/>
            <InfoArea>
              <Username>{data.username}</Username>
              <Preview>{data.preview}</Preview>
            </InfoArea>
            <IconArea>
              <ReplyBtn to={`./Chatting`}>REPLY</ReplyBtn>
            </IconArea>
          </ConversationContainer>
        ))}
      </ConversationList>

    </Container>
  );
};

export default Conversations;
