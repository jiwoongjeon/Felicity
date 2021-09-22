import './App.css';
import { Layout } from './components/Layout';
import  Header  from './components/Header/Header' ;
// import { Table } from './components/Table';
import Board from './views/Board';


function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
        <Board/>
      </Layout>
    </div>
  );
}

export default App;
