import './App.css';
import { Layout } from './components/Layout';
import { LayoutOuter } from './components/LayoutOuter';
import  Header  from './components/Header/Header' ;
import Board from './views/Board';
import Calen from './components/Calendar2';
import { Layout4Cal } from './components/Layout4Cal';
import { Layout4Board } from './components/Layout4Board';

function App() {
  return (
    <div className="App">
      <LayoutOuter>
        <Layout>
          <Layout4Cal>
            <Calen/>
          </Layout4Cal>
          <Layout4Board>
            <Board/>
          </Layout4Board>
            
        </Layout>
        

        <Layout>
          <Board/>
          <Board/>
        </Layout>
      </LayoutOuter>
    </div>
  );
}

export default App;
