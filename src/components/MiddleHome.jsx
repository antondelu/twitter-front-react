import React, { useEffect } from "react";
import "../Home.css";
import { useState } from "react";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import LoopIcon from "@mui/icons-material/Loop";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Like from "./Like";

function MiddleHome({ refresh, setRefresh }) {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const [infoUser, setInfoUser] = useState([]);
  const store = useSelector((state) => state);
  const myUser = store.login;

  const dispatch = useDispatch();

  useEffect(() => {
    const userNameProfile = async () => {
      const response = await axios.get(
        `http://localhost:8000/${myUser.username}`,
        {
          headers: { Authorization: "Bearer " + myUser.token },
        }
      );
      console.log(response.data);
      setInfoUser(response.data);
    };
    userNameProfile();
  }, [refresh]);

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios.get("http://localhost:8000/home", {
        headers: { Authorization: "Bearer " + myUser.token },
      });
      setTweets(response.data);
    };
    getTweets();
  }, [refresh]);

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
    setTweet("");
    dispatch({
      type: "CREAR_TWEET",
      payload: response.data._id,
    });
    return response;
  }

  return (
    <>
      <div className="col-lg-4 col-xxl-4 bg-black border border-dark">
        <div className="d-flex justify-content-between mt-3 mb-1">
          <h4 className="text-white header">Home</h4>
          <img src="/stars_logo.png" alt="" />
        </div>
        <div className="text-white mt-3 middlehome">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row d-flex ">
              <div className="fotoPerfil">
                <img
                  src={infoUser.image}
                  className="imgFotoPerfil"
                  alt="foto-perfil"
                />
              </div>
              <div className="crearTweet d-flex flex-column bg-black">
                <div className="form-floating text-start text-white">
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
                <div className="d-flex justify-content-between">
                  <img className="iconos-azules" src="/image_logo.png" alt="" />
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
          <hr className="text-light" />
          <div className="row">
            <ul>
              {tweets?.map((element, index) => (
                <>
                  <li className="tweetHome d-flex" key={element.id}>
                    <div className="fotoPerfil">
                      <img
                        src={element.user.image}
                        className="imgFotoPerfil"
                        alt="foto-perfil"
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                      <Link to={`/${element.username}`}>
                        <div className="d-flex">
                          <p className="username text-start fw-bold ms-2">
                            {element.username}
                          </p>
                          <p className="username text-start texto-gris ms-1">
                            @{element.username}
                          </p>
                        </div>
                      </Link>
                      <p className="texto-tweet text-start ms-2">
                        {element.text}
                      </p>
                      <div className="iconosTweet d-flex texto-gris">
                        <div>
                          <ModeCommentIcon /> 2
                        </div>
                        <div>
                          <LoopIcon /> 3
                        </div>

                        <Like
                          tweet={element}
                          refresh={refresh}
                          setRefresh={setRefresh}
                        />
                        <div>
                          <FileUploadIcon />
                        </div>
                      </div>
                    </div>
                  </li>
                  <hr></hr>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiddleHome;
