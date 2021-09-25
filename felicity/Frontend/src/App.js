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


        
      <Layout>
        <Calen/>
      </Layout>
      
    </div>
  );
}

export default App;
