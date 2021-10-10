import './App.css';


import Header from './components/Header/Header';
import {Mostouter, Directory, User, Cat, Title , Chat,Video, Empty} from './components/mostouter';
import Layout from './components/Layout';
import Path from './components/Path';
import Login from './components/Login';

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
