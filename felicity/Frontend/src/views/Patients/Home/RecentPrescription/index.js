
import moment from "moment";


const { PrescriptionContainer, Header, PrescriptionList, HeaderText, ViewAll, PrescriptionElement, Image_Medicine, Id, Date, Detail, ViewAllButton, Footer, Doctor, Column } = require("./styles");
const counter = 0;
const today = moment().format("MM-DD-YYYY");

export const RecentPrescription = (props) => {
    return (
        <PrescriptionContainer>
            <Header>
                <HeaderText>Recent Prescription</HeaderText>
                <ViewAll>View All</ViewAll>
            </Header>
            <PrescriptionList>
                {moment(props.date).format("MM-DD-YYYY") < today && props.prescription_data.map((data) => (
                    <PrescriptionElement>
                        {counter += 1}
                        <Image_Medicine img = {data.img}></Image_Medicine>
                        <Date>{data.date}</Date>
                        <Id>{data.id}</Id>
                        <Detail>{data.description}</Detail>
                        <Footer>
                            <ViewAllButton>VIEW All</ViewAllButton>
                            <Doctor img = {data.doctor_img}></Doctor>
                        </Footer>
                    </PrescriptionElement>
                        ))}
                        { counter == 0 && <Column>There is no recent prescription</Column>}
            </PrescriptionList>
        </PrescriptionContainer>
    );
}

export default RecentPrescription;