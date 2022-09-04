import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useState } from "react";
import sendingData from "../services/service";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import "../loginModal.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import CloseIcon from "@mui/icons-material/Close";

export const RegisterModal = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("hola");
  const [password, setPassword] = useState("1234");
  const [email, setEmail] = useState("Email@mail");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function register() {
    const response = await axios({
      method: "post",
      url: "http://localhost:8000/register",
      data: { username: username, password: password, email: email },
    });
    setVisible(false);
    return response;
  }

  return (
    <>
      <button
        onClick={() => setVisible(!visible)}
        className="btn btntelefono rounded-pill"
      >
        <p className="nombreusuario-tel mt-1 fw-bold text-white">
          Regístrate con el número de teléfon...
        </p>
      </button>
      <CModal
        className="modal-iniciar-sesions difuminado"
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader className="bg-black modal-header">
          <CModalTitle className="bg-black">
            <div className="container text-center text-white">
              <TwitterIcon className="fs-2 text-center ms-5" />
              <button
                onClick={() => setVisible(false)}
                className="btn btn-dark cross rounded-pill"
              >
                <CloseIcon />
              </button>
              <h3 className="inicia-sesion text-start">
                Inicia sesión en Twitter
              </h3>
            </div>
          </CModalTitle>
        </CModalHeader>
        <CModalBody className="bg-black">
          <div className="text-white">
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <label>Username</label>
              <input
                className="bg-black texto-gris"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <label>Password</label>
              <input
                className="bg-black texto-gris"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <label>Email</label>
              <input
                className="bg-black texto-gris"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <button
                className="btnlogin-modal rounded-pill row"
                type="submit"
                onClick={() => register()}
              >
                <p className="nombreusuario-apple mt-2 fw-bold">Register</p>
              </button>
            </form>
          </div>
        </CModalBody>
        <CModalFooter className="bg-black texto-gris"></CModalFooter>
      </CModal>
    </>
  );
};
