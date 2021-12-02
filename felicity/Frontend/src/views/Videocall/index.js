import React from "react"
import Header from '../../Components/Header/Header';
import {Mostouter, Directory, User, Cat, Title , Chat,Video, Empty} from '../../Components/mostouter';
import Layout from '../../Components/Layout';
import Path from '../../Components/Path';
import Login from '../../Components/Login';

// import { LayoutOuter } from './components/LayoutOuter copy';


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
        <Layout />
    </Video>


    </Mostouter>


    </div>
  );
}

export default App;
