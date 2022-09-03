import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./containers/containerHome";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
