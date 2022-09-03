import "bootstrap/dist/css/bootstrap.min.css";
import "../MiddleProfile.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import RepeatOneOutlinedIcon from "@mui/icons-material/RepeatOneOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";

export const MiddleProfile = () => {
  return (
    <div className="col-md-5 middleprofile container d-flex border border-dark">
      <div className="container">
        <div className="row header">
          <button className="btn btn-dark rounded-pill col-md-1 m-1 arrowicon">
            <ArrowBackIcon />
          </button>
          <div className="col-md-10">
            <h3 className="text-white text-start ms-4 fw-bold">
              Nombre Usuario
            </h3>
            <h6 className="text-start ms-4 texto-gris">190 tweets</h6>
          </div>
        </div>
        <div className="row profilesection">
          <div className="fondo-profile text-start">
            <img
              className="rounded-circle avatar-profile ms-2"
              src="https://innostudio.de/fileuploader/images/default-avatar.png"
              alt=""
            />
            <h3 className="text-white text-start ms-4 fw-bold mt-3w">
              Nombre Usuario
            </h3>
            <h6 className="text-start ms-4 texto-gris usuario-profile">
              @Usuario
            </h6>
            <button className="btn btn-black text-light rounded-pill mb-1 btn-lg">
              Edit profile
            </button>
            <h6 className="text-start ms-4 text-white">Bio del usuario</h6>
            <h6 className="text-start ms-4 texto-gris">
              Montevideo - Joined September 2022
            </h6>
            <h6 className="text-start ms-4 text-white">
              278 Following - 137 Followers
            </h6>
            <div className="container d-flex sections">
              <div className="text-white fw-bold mt-3">Tweets</div>
              <div className="texto-gris fw-bold mt-3">Tweets/replies</div>
              <div className="texto-gris fw-bold mt-3">Media</div>
              <div className="texto-gris fw-bold mt-3">Likes</div>
            </div>
            <hr />
            <div className="tweets-section container">
              <div className="row">
                <div className="col-md-1">
                  <img
                    className="rounded-circle avatar-icon ms-2"
                    src="https://innostudio.de/fileuploader/images/default-avatar.png"
                    alt=""
                  />
                </div>
                <div className="col-md-9 d-flex">
                  <h6 className="text-white fw-bold ms-4">Nombre Usuario</h6>
                  <h6 className="texto-gris ms-2">@Usuario</h6>
                  <h6 className="texto-gris ms-2">Set 3, 2022</h6>
                </div>
                <p className="text-white tweet">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis, molestiae! Voluptas, iusto culpa doloremque.
                </p>
              </div>
              <div className="container d-flex botones">
                <button className="btn btn-dark rounded rounded-pill texto-gris fw-bold mt-3">
                  <ModeCommentOutlinedIcon />
                </button>
                <button className="btn btn-dark rounded rounded-pill texto-gris fw-bold mt-3">
                  <RepeatOneOutlinedIcon />
                </button>
                <button className="btn btn-dark rounded rounded-pill texto-gris fw-bold mt-3">
                  <FavoriteBorderOutlinedIcon />
                </button>
                <button className="btn btn-dark rounded rounded-pill texto-gris fw-bold mt-3">
                  <IosShareOutlinedIcon />
                </button>
                <button className="btn btn-dark rounded rounded-pill texto-gris fw-bold mt-3">
                  <SignalCellularAltOutlinedIcon />
                </button>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
