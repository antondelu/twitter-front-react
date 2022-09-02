import "./App.css";
import { SedibarLeft } from "./components/SedibarLeft.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { LeftSidebar } from "./components/LeftSidebar.jsx";
import MiddleHome from "./components/MiddleHome";

function App() {
  return (
    <div className="App">
      <div className="row">
        <LeftSidebar />
        <MiddleHome />
        <SedibarLeft />
      </div>
    </div>
  );
}

export default App;
