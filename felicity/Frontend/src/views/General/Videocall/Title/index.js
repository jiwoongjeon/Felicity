import { Container, TitleContainer, ButtonContainer, IconBox, End } from "./styles";
import { IoMdVideocam } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";
import { SocketContext } from "../../../../API/video.js";
import {useContext} from "react";
import {NavLink} from "react-router-dom"
import {MainContainer} from "./styles"
const Title = (props) => {
  const { leaveCall, DoctorNote, rid, sid, stopVideoOnly, stopAudioOnly } = useContext(SocketContext);

  function leave(note, rid, sid, role) {
    console.log('leave');
    DoctorNote(note, rid, sid);
    leaveCall(rid, role);
    
  }

  function stopVideo(stream) {
    console.log('video');
    stopVideoOnly(stream);
    
  }

  function stopAudio(stream) {
    console.log('audio');
    stopAudioOnly(stream);
  }
  
  return (
    <Container>
      
      <TitleContainer>
        Dr.{props.doctorName}'s room with {props.patientName}
      </TitleContainer>

      <ButtonContainer>
        <IconBox>
          <IoMdVideocam style={{ color: 'white', fontSize: '40px' }} onClick={() => stopVideo(props.stream)} />
        </IconBox>
        <IconBox>
          <MdKeyboardVoice style={{ color: 'white', fontSize: '40px' }} onClick={() => stopAudio(props.stream)}/>
        </IconBox>
        <End>
          <NavLink to = "./rating">
          <FaPhoneAlt style={{ color: 'white', fontSize: '30px' }} onClick={() => leaveCall(props.note, props.rid, props.sid, props.role)} >
          </FaPhoneAlt>
          </NavLink>
        </End>
      </ButtonContainer>

    </Container>
  );
};

export default Title;