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

export const Modal = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("hola");
  const [password, setPassword] = useState("1234");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleSubmit() {
    const { data } = await sendingData(username, password);
    const user = await axios.get("http://localhost:8000/user/" + username);
    console.log(user.data);
    dispatch({
      type: "TOKEN",
      payload: {
        token: data.token,
        ...user.data,
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
              <button type="submit" onClick={handleSubmit}>
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
