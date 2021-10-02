import './App.css';

import pc from './components/assets/pc.png'
import rc from './components/assets/rc.png'

import { Mostouter } from './components/mostouter';
import { Layout } from './components/Layout2nd';
import { Layoutouter } from './components/Layouting';
import Header from './components/Header/Header';
import Calen from './components/Calendar2';
import Schedule from './components/Schedule';
// import { LayoutOuter } from './components/LayoutOuter copy';


function App() {
  return (
    <div className="App">
      <Mostouter>
        <Header />
          <Layoutouter>
            {/* 1st column */}

            {/* 2nd column */}
            <Layout>
              <Calen />
              <Schedule />
            </Layout>
            {/* 3rd column */}
            <Mostouter>
              <img src = {pc} alt='' />
              {/* <img src = {rc} alt='' /> */}
            </Mostouter>

            </Layoutouter>

        </Mostouter>


    </div>
  );
}

export default App;
