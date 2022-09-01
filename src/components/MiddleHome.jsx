import React from "react";
import "../Home.css";
import { useState } from "react";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LoopIcon from "@mui/icons-material/Loop";

function MiddleHome() {
  const [tweet, setTweet] = useState("");
  const tweets = ["hola", "jola", "hola", "hola", "jola", "hola"];
  return (
    <>
      <div className="col-10 col-lg-6 col-xxl-6 bg-black">
        <div className="d-flex justify-content-between mt-3 mb-1">
          <h4 className=" mx-1 text-white">Home</h4>
          <img src="/stars_logo.png" height="30px" alt="" />
        </div>
        <div className="text-white mt-3">
          <form action="/addTweet" method="post">
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
              {tweets.map((t, index) => (
                <>
                  <li className="tweetHome d-flex" key={index}>
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
                      {t}
                      <div className="iconosTweet d-flex justify-content-around">
                        <ModeCommentIcon />
                        <LoopIcon />
                        <FavoriteIcon />
                        <FileUploadIcon />
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
