import { propTypes } from "react-bootstrap/esm/Image";
import { Container, ConversationContainer, ConversationList, Header, IconArea, InfoArea, PhotoArea, Preview, ReplyBtn, Username, Column } from "./styles";
import moment from "moment";
const counter = 0;
const today = moment().format("MM-DD-YYYY");
const Data = [
  // {
  //   id: 1,
  //   img: "",
  //   username: "Dr.Lee",
  //   preview: "Hi! I need more\ninformations...",
  // },
  // {
  //   id: 2,
  //   img: "",
  //   username: "Dr.Esra",
  //   preview: "Can you change...",
  // },
  // {
  //   id: 2,
  //   img: "",
  //   username: "Dr.Esra",
  //   preview: "Can you change...",
  // },
  // {
  //   id: 2,
  //   img: "",
  //   username: "Dr.Esra",
  //   preview: "Can you change...",
  // },
  // {
  //   id: 2,
  //   img: "",
  //   username: "Dr.Esra",
  //   preview: "Can you change...",
  // },
  // {
  //   id: 2,
  //   img: "",
  //   username: "Dr.Esra",
  //   preview: "Can you change...",
  // },
  // {
  //   id: 2,
  //   img: "",
  //   username: "Dr.Esra",
  //   preview: "Can you change...",
  // },
  // {
  //   id: 2,
  //   img: "",
  //   username: "Dr.Esra",
  //   preview: "Can you change...",
  // },
];

export const Conversations = (props) => {
  return (
    <Container>
      <Header>Conversations</Header>
      <ConversationList>
        {props.username && props.data.map((data) => (
          <ConversationContainer>
            {counter += 1}
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
        { counter == 0 && <Column>There is no recent conversation</Column>}
      </ConversationList>

    </Container>
  );
};

export default Conversations;
