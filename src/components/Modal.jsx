import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useState } from "react";
// import sendingData from "../services/service";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export const Modal = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <button
        className="btn btn-iniciar-sesion rounded-pill"
        onClick={() => setVisible(!visible)}
      >
        <p className="iniciar-texto mt-1 fw-bold">Iniciar sesión</p>
      </button>
      <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader>
          <CModalTitle>Inicia sesión en Twitter</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div className="text-white">
            <form action="" onSubmit={(e) => e.preventDefault()}>
              <label>username</label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
              <label>password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="primary">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};
