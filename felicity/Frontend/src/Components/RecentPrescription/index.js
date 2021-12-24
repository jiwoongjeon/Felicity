import { PRESCRIPTION_RECORD } from "./tempData";
const { PrescriptionContainer, Header, PrescriptionList, HeaderText, ViewAll, PrescriptionElement, Image_Medicine, Id, Date, Detail, ViewAllButton, Footer, Doctor } = require("./styles");

export const RecentPrescription = () => {
    return (
        <PrescriptionContainer>
            <Header>
                <HeaderText>Recent Prescription</HeaderText>
                <ViewAll>View All</ViewAll>
            </Header>
            <PrescriptionList>
                {PRESCRIPTION_RECORD.map((data, i) => (
                    <PrescriptionElement>
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
            </PrescriptionList>
        </PrescriptionContainer>
    );
}

export default RecentPrescription;