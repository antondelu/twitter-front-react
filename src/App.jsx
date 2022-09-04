import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./containers/ContainerHome";
import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./components/Login";
import { Profile } from "./containers/ContainerProfile.jsx";
import { Error } from "./components/Error.jsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/PrivateRoutes";

function App() {
  const [refresh, setRefresh] = useState(false);
  const store = useSelector((state) => state);
  const myUser = store.login.token;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/error" element={<Error />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/home"
            element={<Home refresh={refresh} setRefresh={setRefresh} />}
          />
          <Route
            path="/:username"
            element={<Profile refresh={refresh} setRefresh={setRefresh} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
