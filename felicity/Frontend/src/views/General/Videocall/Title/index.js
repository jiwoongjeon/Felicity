import { Container, TitleContainer, ButtonContainer, IconBox, End } from "./styles";
import { IoMdVideocam } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";

const Title = (props) => {
  const { leaveCall, DoctorNote, rid, sid, stopVideoOnly, stopAudioOnly } = props.context;

  function leave() {
    DoctorNote(props.note, rid, sid);
    leaveCall();
  }

  function stopVideo() {
    stopVideoOnly();
  }

  function stopAudio() {
    stopAudioOnly();
  }
  
  return (
    <Container>
      
      <TitleContainer>
        Dr.{props.doctorName}'s room with {props.patientName}
      </TitleContainer>

      <ButtonContainer>
        <IconBox>
          <IoMdVideocam style={{ color: 'white', fontSize: '40px' }} onClick={() => stopVideo()} />
        </IconBox>
        <IconBox>
          <MdKeyboardVoice style={{ color: 'white', fontSize: '40px' }} onClick={() => stopAudio()}/>
        </IconBox>
        <End>
          <FaPhoneAlt style={{ color: 'white', fontSize: '30px' }} onClick={( target ) => leave() } />
        </End>
      </ButtonContainer>

    </Container>
  );
};

export default Title;