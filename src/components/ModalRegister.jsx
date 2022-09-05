import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

export const Modal = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("hola");
  const [password, setPassword] = useState("1234");
  const [email, setEmail] = useState("1234");

  async function register() {
    const response = await axios({
      method: "post",
      url: `http://localhost:8000/register`,
      data: { username: username, password: password, email: email },
    });
    setVisible(false);
    return response;
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
              <button type="submit" onClick={() => register()}>
                Login
              </button>
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
