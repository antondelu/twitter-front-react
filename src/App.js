// import { Sedibar } from "./components/Sedibar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { LeftSidebar } from "./components/LeftSidebar.jsx";
import "./App.css";

function App() {
  return (
    <div className="App bg-black">
      <div className="row">
        <LeftSidebar />
      </div>
    </div>
  );
}

export default App;
