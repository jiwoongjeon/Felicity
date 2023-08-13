import './App.css';
import ROUTES, { RenderRoutes } from "./Route";

function App() {
  return (
    <div className="App">
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
