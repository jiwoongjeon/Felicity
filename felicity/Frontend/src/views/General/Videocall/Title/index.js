import {
    Container,
    TitleContext,
} from "./styles";

const Title = (props) => {
  return (
    <Container>

    <TitleContext>
    Dr.{props.doctorName}'s room with {props.patientName}
    </TitleContext>


    </Container>
  );
};

export default Title;