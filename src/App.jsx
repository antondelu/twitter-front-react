import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./containers/ContainerHome";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Profile } from "./containers/ContainerProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
