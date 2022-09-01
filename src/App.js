// import { Sedibar } from "./components/Sedibar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { LeftSidebar } from "./components/LeftSidebar.jsx";
import "./App.css";
import MiddleHome from "./components/MiddleHome";

function App() {
  return (
    <div className="">
      <div className="App bg-black">
        <div className="row">
          <LeftSidebar />
          <MiddleHome />
          <div className="col-3 "> </div>
        </div>
      </div>
    </div>
  );
}

export default App;
