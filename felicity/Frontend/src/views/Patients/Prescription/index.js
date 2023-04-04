import PrescriptionRev from "./PrescriptionRev"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

function PrescriptionReview() {
    return (
        <Mostouter>

        <Cat>
            <Header isDoctor={false}/>
        </Cat>

        <Directory>
            <Path directory="Prescription"/>
        </Directory>

        <User>
            <Login />
        </User>


        <Video>
            <PrescriptionRev/>
        </Video>

        </Mostouter>
    )
};

export default PrescriptionReview