import { CModal, CModalBody } from "@coreui/react";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const TweetModal = ({ refresh, setRefresh }) => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [infoUser, setInfoUser] = useState([]);
  const [tweet, setTweet] = useState("");
  const store = useSelector((state) => state);
  const myUser = store.login;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userNameProfile = async () => {
      const response = await axios.get(
        `http://localhost:8000/${myUser.username}`,
        {
          headers: { Authorization: "Bearer " + myUser.token },
        }
      );
      setInfoUser(response.data);
    };
    userNameProfile();
  }, []);

  async function addTweets(tweet) {
    const response = await axios({
      method: "post",
      url: "http://localhost:8000/tweet",
      data: { text: tweet },
      headers: {
        Authorization: `Bearer ${myUser.token}`,
        "Content-Type": "application/json",
      },
    });
    setVisible(false);
    setTweet("");
    setRefresh(!refresh);
    dispatch({
      type: "CREAR_TWEET",
      payload: response.data._id,
    });
    return response;
  }

  return (
    <>
      <button
        className="btn btn-primary text-center fs-5 rounded-pill btn-lg p-2 ps-5 pe-5 mt-3 fw-bold"
        onClick={() => setVisible(!visible)}
      >
        Tweet
      </button>
      <CModal
        className="modal-iniciar-sesions difuminado"
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalBody className="bg-black">
          <form onSubmit={(e) => e.preventDefault()} className=" row">
            <div className="d-flex">
              <div className="fotoPerfil">
                <img
                  src={infoUser.image}
                  className="imgFotoPerfil mt-3 zindex-10"
                  alt="foto-perfil"
                  width="60px"
                  height="60px"
                />
              </div>
              <div className="crearTweet d-flex flex-column">
                <div className="form-floating text-white">
                  <textarea
                    name="text"
                    className="input crearTweetInput"
                    placeholder="Whats happening?"
                    id="floatingTextarea2"
                    maxLength="140"
                    value={tweet}
                    onChange={(e) => setTweet(e.target.value)}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-between me-1">
                  <img src="/image_logo.png" height="50px" alt="" />
                  <button
                    type="submit"
                    onClick={() => addTweets(tweet)}
                    className="btn btn-light rounded-pill buttonTweetHome"
                  >
                    <p className="font-weight-bold">Tweet</p>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </CModalBody>
      </CModal>
    </>
  );
};
