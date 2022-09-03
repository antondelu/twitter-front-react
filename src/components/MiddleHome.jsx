import React, { useEffect } from "react";
import "../Home.css";
import { useState } from "react";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoopIcon from "@mui/icons-material/Loop";
import { useSelector } from "react-redux";
import axios from "axios";

function MiddleHome() {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const store = useSelector((state) => state);
  const myUser = store.login;

  useEffect(() => {
    const getTweets = async () => {
      const response = await axios.get("http://localhost:8000/home", {
        headers: { Authorization: "Bearer " + myUser.token },
      });
      setTweets(response.data);
    };
    getTweets();
  }, []);

  async function addTweets(tweet) {
    console.log(myUser.token);
    const response = await axios({
      method: "post",
      url: "http://localhost:8000/tweet",
      data: { text: tweet },
      headers: {
        Authorization: `Bearer ${myUser.token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    setTweet(response.data);
    return response;
  }

  return (
    <>
      <div className="col-10 col-lg-5 col-xxl-5 bg-black">
        <div className="d-flex justify-content-between mt-3 mb-1">
          <h4 className=" mx-1 text-white">Home {myUser.username}</h4>
          <img src="/stars_logo.png" height="30px" alt="" />
        </div>
        <div className="text-white mt-3 middlehome">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="row d-flex ">
              <div className="fotoPerfil me-2">
                <img
                  src="/noProfileLogo.jpg"
                  className="imgFotoPerfil"
                  alt="foto-perfil"
                  width="50px"
                  height="50px"
                />
              </div>
              <div className="crearTweet d-flex flex-column bg-black">
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
                <div className="d-flex justify-content-between me-3">
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
          <hr className=" text-light" />
          <div className="row">
            <ul>
              {tweets.map((element, index) => (
                <>
                  <li className="tweetHome d-flex" key={element.id}>
                    <div className="fotoPerfil me-2">
                      <img
                        src="/noProfileLogo.jpg"
                        className="imgFotoPerfil"
                        alt="foto-perfil"
                        width="50px"
                        height="50px"
                      />
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                      {element.text}
                      <div className="iconosTweet d-flex justify-content-around">
                        <div>
                          <ModeCommentIcon /> 2
                        </div>
                        <div>
                          <LoopIcon /> 3
                        </div>

                        <div>
                          {!element.likes.includes(myUser.id) ? (
                            <span style={{ color: "#fa167f" }}>
                              <FavoriteIcon />
                            </span>
                          ) : (
                            <FavoriteIcon />
                          )}{" "}
                          {element.likes.length}
                        </div>
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
