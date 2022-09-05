import "bootstrap/dist/css/bootstrap.min.css";
import "../MiddleProfile.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import RepeatOneOutlinedIcon from "@mui/icons-material/RepeatOneOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { ModalEditProfile } from "./EditProfileModal";
import Like from "./Like";
import FollowProfile from "./FollowProfile";
export const MiddleProfile = ({ refresh, setRefresh }) => {
  const [infoUser, setInfoUser] = useState({});
  const store = useSelector((state) => state);
  const myUser = store.login;
  const { username } = useParams();

  useEffect(() => {
    const userNameProfile = async () => {
      const response = await axios.get(`http://localhost:8000/${username}`, {
        headers: { Authorization: "Bearer " + myUser.token },
      });
      setInfoUser(response.data);
    };
    userNameProfile();
  }, [refresh]);
  console.log(infoUser.username);
  async function deleteTweet(id) {
    console.log(id);
    const response = await axios.delete(`http://localhost:8000/tweet/${id}`, {
      headers: { Authorization: "Bearer " + myUser.token },
    });
    // console.log(response.data);
    setRefresh(!refresh);
  }
  return (
    <div className="col-md-4 middleprofile container d-flex border border-dark">
      <div className="container border-right border-left">
        <div className="row header">
          <button className="btn btn-dark rounded-pill col-md-1 m-1 arrowicon">
            <Link to={"/home"}>
              <ArrowBackIcon />
            </Link>
          </button>
          <div className="col-md-10">
            <h3 className="text-white text-start ms-4 fw-bold">{username}</h3>

            <h6 className="text-start ms-4 texto-gris">
              {infoUser?.tweets?.length} tweets
            </h6>
          </div>
        </div>
        <div className="row profilesection">
          <div
            className="fondo-profile text-start"
            style={{
              backgroundImage: ` url(${infoUser.coverImage})`,
              height: "200px",
            }}
          >
            <img
              className="rounded-circle avatar-profile ms-2"
              src={infoUser?.image}
              alt=""
            />
            <h3 className="text-white text-start ms-4 fw-bold mt-3w">
              {infoUser?.firstname} {infoUser?.lastname}
            </h3>
            {infoUser?.username === myUser.username ? (
              <ModalEditProfile refresh={refresh} setRefresh={setRefresh} />
            ) : (
              <FollowProfile
                user={infoUser}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            )}

            <h6 className="text-start ms-4 text-white">
              {infoUser?.description}
            </h6>
            <h6 className="text-start ms-4 texto-gris">
              Montevideo - Joined September 2022
            </h6>
            <h6 className="text-start ms-4 text-white">
              {infoUser?.following?.length} Following -{" "}
              {infoUser?.followers?.length} Followers
            </h6>

            <div className="container d-flex sections">
              <div className="text-white fw-bold mt-3">Tweets</div>
              <div className="texto-gris fw-bold mt-3">Tweets/replies</div>
              <div className="texto-gris fw-bold mt-3">Media</div>
              <div className="texto-gris fw-bold mt-3">Likes</div>
            </div>
            <hr />

            {infoUser?.tweets?.map((element, index) => {
              return (
                <>
                  <div className="tweets-section container" key={index}>
                    <div className="row">
                      <div className="col-md-1">
                        <img
                          className="rounded-circle avatar-icon ms-2"
                          src={infoUser.image}
                          alt=""
                        />
                      </div>
                      <div className="col-md-10 d-flex mb-2">
                        <h6 className="text-white fw-bold ms-4">
                          {infoUser.firstname} {infoUser.lastname}
                        </h6>
                        <h6 className="texto-gris ms-2">
                          @{infoUser.username}
                        </h6>
                        {/* <h6 className="texto-gris ms-2">
                          {element.creationDate}
                        </h6> */}
                      </div>
                      <p className="text-white tweet">{element.text}</p>
                    </div>
                    <div className="container d-flex botones">
                      <button className="btn btn-dark rounded rounded-pill texto-gris fw-bold botones-grises">
                        <ModeCommentOutlinedIcon />
                      </button>
                      <button className="btn btn-dark rounded rounded-pill texto-gris fw-bold botones-grises">
                        <RepeatOneOutlinedIcon />
                      </button>
                      <Like
                        tweet={element}
                        refresh={refresh}
                        setRefresh={setRefresh}
                      />
                      <button className="btn btn-dark rounded rounded-pill texto-gris fw-bold botones-grises">
                        <IosShareOutlinedIcon />
                      </button>
                      {/* {String(username === element.username)}
                      {element.username} */}
                      {username.toLowerCase() ===
                      myUser.username?.toLowerCase() ? (
                        <div>
                          <button
                            className="btn btn-dark rounded rounded-pill texto-gris fw-bold botones-grises"
                            onClick={() => deleteTweet(element._id)}
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <hr />
                </>
              );
            })}
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
