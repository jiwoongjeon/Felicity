import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title ,Video} from '../../Components/mostouter';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

import {
    ContentLayout,
    PatientBox,
    InfoBox,
    Post
} from "./layout";
import PatientList from '../../Components/PatientsList';
import CV from '../../Components/CV';
import RecentPost from '../../Components/RecentPost';


function Doctor() {
  return (

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
            
            <Post>
                <RecentPost/>
            </Post>

        </ContentLayout>
    </Video>



    </Mostouter>


  );
}

export default Doctor;