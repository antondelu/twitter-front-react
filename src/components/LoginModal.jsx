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

export const LoginModal = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("hola");
  const [password, setPassword] = useState("1234");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleSubmit() {
    const { data } = await sendingData(username, password);
    dispatch({
      type: "TOKEN",
      payload: {
        token: data.token,
        username: username,
      },
    });
    navigate("/home");
  }

  return (
    <>
      <button
        className="btn btn-iniciar-sesion rounded-pill"
        onClick={() => setVisible(!visible)}
      >
        <p className="iniciar-texto mt-1 fw-bold">Iniciar sesión</p>
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
              <button className="btngoogle-modal rounded-pill">
                <div className="container d-flex text-start">
                  <div className="row">
                    <div className="col-2 me-3">
                      <img
                        className="rounded-circle mt-1"
                        src="https://innostudio.de/fileuploader/images/default-avatar.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-8">
                    <p className="nombreusuario mb-0 fw-bold">
                      Inicia sesión como Nombre
                    </p>
                    <p className="usuario">usuario@gmail.com</p>
                  </div>
                  <div className="col-2">
                    <GoogleIcon className="mt-2 googleicon" />
                  </div>
                </div>
              </button>
              <button className="btnapple-modal rounded-pill row">
                <div className="container d-flex text-start">
                  <div className="row">
                    <div className="col-2 me-3">
                      <AppleIcon className="apple-icon" />
                    </div>
                  </div>
                  <div className="col-8">
                    <p className="nombreusuario-apple mt-2 fw-bold">
                      Registrarse con Apple
                    </p>
                  </div>
                </div>
              </button>
              <span>o</span>
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
              <button
                className="btnlogin-modal rounded-pill row"
                type="submit"
                onClick={handleSubmit}
              >
                <p className="nombreusuario-apple mt-2 fw-bold">Login</p>
              </button>
              <button
                className="btn btn-forgot-password rounded-pill text-white"
                type="submit"
              >
                <p className="forgot-text mt-1 fw-bold">
                  ¿Olvidaste tu contraseña?
                </p>
              </button>
            </form>
          </div>
        </CModalBody>
        <CModalFooter className="bg-black texto-gris">
          <span>¿No tienes una cuenta?</span>
          <span className="registrate" onClick={handleSubmit}>
            Regístrate
          </span>
        </CModalFooter>
      </CModal>
    </>
  );
};
