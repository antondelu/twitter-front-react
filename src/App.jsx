import "./App.css";
<<<<<<< HEAD
import { SedibarLeft } from "./components/RightSedebar.jsx";
=======
>>>>>>> 8fbcb7e9d5ba780edc7b771fa204ce53b88a5d6e
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./containers/containerHome";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";

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
