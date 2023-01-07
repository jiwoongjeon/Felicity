import './App.css';
import ROUTES, { RenderRoutes } from "./Route";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}

export default App;
