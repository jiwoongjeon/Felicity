import './App.css';

import pc from './components/assets/pc.png'
import rc from './components/assets/rc.png'

import { Mostouter } from './components/mostouter';
import { Layout } from './components/Layout2nd';
import { Layoutouter } from './components/Layouting';
import Header from './components/Header/Header';
import Calen from './components/Calendar2';
import Schedule from './components/Schedule';
import VideoComponent from './components/VideoComponent';

import RecentPost from './components/RecentPost';
import PatientsList from './components/PatientsList';
import Infos from './components/Infos'
// import { LayoutOuter } from './components/LayoutOuter copy';


function App() {
  return (
    <div className="App">
      <Mostouter>
        <Header />
          <Layoutouter>
            {/* 1st column */}
            <VideoComponent />
            {/* 2nd column */}
            <Infos/>
            {/* 3rd column */}
            <Mostouter>
            </Mostouter>

            </Layoutouter>

        </Mostouter>
    </div>
  );
}

export default App;
