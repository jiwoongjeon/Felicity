import './App.css';
import { Layout } from './components/Layout';
import { LayoutOuter } from './components/LayoutOuter';
import  Header  from './components/Header/Header' ;
import Board from './views/Board';
import Calen from './components/Calendar2';


function App() {
  return (
    <div className="App">
      <Header/>
      <LayoutOuter>
        <Layout>
          <Calen/>
        </Layout>
      </LayoutOuter>
      
    </div>
  );
}

export default App;
