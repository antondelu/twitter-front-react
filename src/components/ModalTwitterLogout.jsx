import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../LogoutModal.css";
import { useSelector } from "react-redux";

export const ModalTwitterLogout = ({ infoUser }) => {
  const [visible, setVisible] = useState(false);
  const store = useSelector((state) => state);
  const myUser = store.login;
  const navigate = useNavigate();

  function logout() {
    console.log("entre");
    myUser.token = null;
    navigate("/");
  }

  return (
    <>
      <button
        className="bg-black text-white"
        onClick={() => setVisible(!visible)}
      >
        <h5 className="mt-3">Logout @{infoUser.username} </h5>
      </button>
      <CModal
        className="difuminado"
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <div className="bg-black text-white d-flex flex-column align-items-center justify-content-center p-4 ">
          <CModalBody>
            <h2 className="text-primary d-flex justify-content-center ">
              <TwitterIcon />
            </h2>
            <h3>Log out of Twitter?</h3>
            <h5>
              You can always log back in at any time. If you just want to switch
              accounts, you can do that by adding an existing account.
            </h5>
            <div className="d-flex justify-content-center my-3">
              <button className="btn btn-light btn-lg" onClick={() => logout()}>
                Logout
              </button>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark border btn-lg">Cancel</button>
            </div>
          </CModalBody>
        </div>
      </CModal>
    </>
  );
};
