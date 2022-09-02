import "bootstrap/dist/css/bootstrap.min.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../LeftSidebar.css";

export const LeftSidebar = () => {
  return (
    <div className="col-lg-3">
      <div className="row text-start justify-content-end leftsidebar">
        <div className="col-md-7">
          <button className="btn btn-dark text-light text-start rounded-pill mb-1 btn-lg col-md-7 mt-1">
            <TwitterIcon className="fs-2" />
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg fw-bold mt-1">
            <HomeRoundedIcon className="me-3 fs-2" /> Home
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <TagIcon className="me-3 fs-2" />
            Explore
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <NotificationsNoneIcon className="me-3 fs-2" />
            Notifications
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <MailOutlineOutlinedIcon className="me-3 fs-2" /> Messages
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <BookmarkBorderOutlinedIcon className="me-3 fs-2" /> Bookmark
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <FeaturedPlayListOutlinedIcon className="me-3 fs-2" /> Lists
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <Person2OutlinedIcon className="me-3 fs-2" /> Profile
          </button>
          <button className="btn btn-dark text-light rounded-pill mb-1 btn-lg mt-1">
            <PendingOutlinedIcon className="me-3 fs-2" /> More
          </button>
          <button className="btn btn-primary text-center fs-5 rounded-pill btn-lg p-2 ps-5 pe-5 mt-3 fw-bold">
            Tweet
          </button>
          <button className="btn btn-dark text-white rounded-pill btn-hover botonuser">
            <div className="container d-flex text-start">
              <div className="row">
                <div className="col-2 me-3">
                  <img
                    className="rounded-circle mt-1"
                    src="https://innostudio.de/fileuploader/images/default-avatar.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-8">
                <p className="nombreusuario mb-0 fw-bold">Nombre Usuario</p>
                <p className="usuario">@Usuario</p>
              </div>
              <div className="col-2">
                <MoreHorizIcon className="mt-3" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
