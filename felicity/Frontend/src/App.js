import './App.css';
import { Layout } from './components/Layout2nd';
import { LayoutOuter } from './components/LayoutOuter';
import Header from './components/Header/Header';
import Board from './views/Board';
import Calen from './components/Calendar2';
import Schedule from './components/Schedule';

function App() {
  return (
    <div className="App">

      <LayoutOuter>
        {/* 1st column */}
        <Header />
        {/* 2nd column */}
        <Layout>
          <Calen />
          <Schedule />
        </Layout>
        {/* 3rd column */}


      </LayoutOuter>

    </div>
  );
}

export default App;
