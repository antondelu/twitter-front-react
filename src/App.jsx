import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./containers/ContainerHome";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Profile } from "./containers/ContainerProfile.jsx";
import { Error } from "./components/Error.jsx";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/error" element={<Error />} />
        <Route
          path="/home"
          element={<Home refresh={refresh} setRefresh={setRefresh} />}
        />
        <Route
          path="/:username"
          element={<Profile refresh={refresh} setRefresh={setRefresh} />}
        />
      </Routes>
    </div>
  );
}

export default App;
