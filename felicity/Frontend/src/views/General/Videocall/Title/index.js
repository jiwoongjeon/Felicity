import { Container, TitleContainer, ButtonContainer, IconBox, End } from "./styles";
import { IoMdVideocam } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { BsFillChatSquareFill } from "react-icons/bs";

const Title = (props) => {
  
  return (
    <Container>
      
      <TitleContainer>
        Dr.{props.doctorName}'s room with {props.patientName}
      </TitleContainer>

      <ButtonContainer>
        <IconBox>
          <IoMdVideocam style={{ color: 'white', fontSize: '40px' }} />
        </IconBox>
        <IconBox>
          <MdKeyboardVoice style={{ color: 'white', fontSize: '40px' }} />
        </IconBox>
        <IconBox>
          <BsFillChatSquareFill style={{ color: 'white', fontSize: '30px' }} />
        </IconBox>
        <End>
          <FaPhoneAlt style={{ color: 'white', fontSize: '30px' }} />
        </End>
      </ButtonContainer>

    </Container>
  );
};

export default Title;