import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import {
    ContentLayout,
    PatientBox,
    InfoBox
} from "./layout";
import PatientList from '../../Components/PatientsList';
import CV from '../../Components/CV';


function App() {
  return (
    <div className="App">
    <Mostouter>

    <Cat>
         <Header />
    </Cat>

    <Directory>
        <Path />
    </Directory>

    <User>
        <Login />
    </User>


    <Video>
        <ContentLayout>
            <PatientBox>
                <PatientList />
            </PatientBox>

            <InfoBox>
                <CV />
            </InfoBox>
        </ContentLayout>
    </Video>


    </Mostouter>


    </div>
  );
}

export default App;
