import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title , Chat,Video, Empty} from '../../Components/mostouter';
import Layout from '../../Components/Layout';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

// import { LayoutOuter } from './components/LayoutOuter copy';


function Videocall(props) {
  return (
    <Mostouter>

    <Cat>
         <Header isDoctor={props.isDoctor} />
    </Cat>

    <Directory>
      {props.isDoctor &&
        <Path directory="Meeting" title="Meeting with your Patient" meeting={true}/>}
      {!props.isDoctor &&
        <Path directory="Meeting" title="Meeting with your Doctor" meeting={true}/>}
        
    </Directory>

    <User>
        <Login />
    </User>


    <Video>
        <Layout />
    </Video>


    </Mostouter>


  );
}

export default Videocall;
