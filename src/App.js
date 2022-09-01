import { Sedibar } from "./components/Sedibar.jsx";
import "./App.css";
import MiddleHome from "./components/MiddleHome";

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-3"> </div>
        <MiddleHome />
        <div className="col-3 "> </div>
      </div>
    </div>
  );
}

export default App;
