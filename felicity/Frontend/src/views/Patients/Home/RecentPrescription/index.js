
import moment from "moment";


const { PrescriptionContainer, DescriptionText, Header, PrescriptionList, RowBox, Line, HeaderText, ViewAll, PrescriptionElement, PrescriptionText, Image_Medicine, Id, Date, Detail, ViewAllButton, Footer, Doctor, Column, DepartmentContainer } = require("./styles");
const counter = 0;
const today = moment().format("MM-DD-YYYY");
const tempdata = [{id: "Juhwan Jung", department: "Dentistry and agriculture", did: "Doctor Jay", date: "08-21-1999",description: "SUMMARY The ENGINEERING INTERN will work within a specific area of Engineering that fits one's area of study and experience. AeroVironment is an engineering innovator and that means we seek individuals with a broad background of technical skills and the desire to tackle real-world challenges. To qualify for an Engineering Internship, one must be a Junior or higher in one of our preferred majors; possess a desire to build things; have a strong engineering aptitude and thrive working in a team environment. One will have real responsibilities that impact actual products and help pave the way on our development path. Whether one is part of a team designing a new unmanned aircraft to be used for planetary surveillance, or working to test and verify design modifications to flight hardware/software systems, or helping to resolve flight behavior issues on a miniature unmanned aerial vehicle, your AeroVironment internship will challenge you, stimulate you and provide you with real-world experience at one of America's most innovative and creative tech companies. POSITION RESPONSIBILITIES",caution: "Do not take it while you are on Tylenol",count: "3 times a day"},{id: "Juhwan Jung", department: "Orthopedics",did: "Justin",date: "04-11-2023",description: "medicine for all"},{id: "Juhwan Jung", department: "Dentistry", did: "Kenzie", date: "08-21-1999",description:"huhiohbouygiugohjbljhbgiugvouhbohj dfghjkjhgf fghjkjhgfc  fghjgfghjhgfghjbjhb"},{id: "Juhwan Jung", department: "Dentistry", did: "Doctor Jay", date: "08-21-1999",description:"sxdcvbnbvxxcvbn"}];
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
                        <RowBox><DepartmentContainer>{data.department}</DepartmentContainer><Date>{data.date}</Date></RowBox>
                        <PrescriptionText>Prescription</PrescriptionText>
                        <Line></Line>
                        <Id>By {data.did}</Id>
                        <DescriptionText>Description</DescriptionText>
                        <Detail>{data.description}</Detail>
                        <ViewAllButton>Detail..</ViewAllButton>
                    </PrescriptionElement>
                        ))}
                        { counter == 0 && <Column>There is no recent prescription</Column>}
                        
            </PrescriptionList>
        </PrescriptionContainer>
    );
}

export default RecentPrescription;

